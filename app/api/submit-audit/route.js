import { NextResponse } from 'next/server';

import config from '@/config';
import { sendLeadEmails } from '@/lib/server/sendLeadEmails';

const getStrapiBaseUrl = () =>
	process.env.STRAPI_API_URL ||
	process.env.NEXT_PUBLIC_STRAPI_API_URL ||
	(process.env.NODE_ENV === 'development'
		? 'http://127.0.0.1:1337'
		: config.api);

const getStrapiHeaders = () => {
	const headers = {
		'Content-Type': 'application/json',
	};

	if (process.env.STRAPI_API_TOKEN) {
		headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
	}

	return headers;
};

const buildAuditDescription = ({
	business_name,
	website_url,
	unique_visitors,
	conversion_rate,
}) =>
	[
		`Business Name: ${business_name || 'N/A'}`,
		`Website URL: ${website_url}`,
		`Unique Visitors / Month: ${unique_visitors || 'Unknown'}`,
		`Conversion Rate: ${conversion_rate || 'Unknown'}`,
	].join('\n');

const getStrapiErrorMessage = (payload, fallback) => {
	const message = payload?.error?.message || payload?.message || fallback;
	const errorDetails = payload?.error?.details?.errors?.[0]?.path?.[0];

	return errorDetails ? `${message}: ${errorDetails}` : message;
};

export async function POST(request) {
	try {
		const body = await request.json();
		const description = buildAuditDescription(body);
		const auditPayload = {
			uuid: body.uuid,
			name: body.name,
			businessName: body.business_name,
			url: body.website_url,
			visitors: body.unique_visitors,
			conversion: body.conversion_rate,
			email: body.email,
		};

		const strapiResponse = await fetch(`${getStrapiBaseUrl()}/api/audits`, {
			method: 'POST',
			headers: getStrapiHeaders(),
			body: JSON.stringify({ data: auditPayload }),
			cache: 'no-store',
		});
		const strapiPayload = await strapiResponse.json().catch(() => null);
		const isForbidden = strapiResponse.status === 403;

		if (!strapiResponse.ok || strapiPayload?.error) {
			return NextResponse.json(
				{
					error: isForbidden
						? 'Strapi denied access to create an audit. Allow create access for the audit content type or set STRAPI_API_TOKEN in the Next app.'
						: getStrapiErrorMessage(
								strapiPayload,
								'Failed to create the website audit request.',
							),
				},
				{ status: strapiResponse.status || 500 },
			);
		}

		let emailResult = null;
		let emailWarning = null;

		try {
			emailResult = await sendLeadEmails({
				...body,
				service: 'Website Audit',
				description,
				submissionType: 'website-audit',
			});
		} catch (error) {
			console.error('submit-audit email error:', error);
			emailWarning =
				error?.message ||
				'The request was saved, but the notification email could not be sent.';
		}

		return NextResponse.json(
			{
				audit: strapiPayload?.data ?? null,
				userEmailSent: emailResult?.userEmailSent ?? false,
				emailWarning,
				emailResult,
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error('submit-audit route error:', error);
		return NextResponse.json(
			{ error: error?.message || 'Failed to submit the website audit request.' },
			{ status: 500 },
		);
	}
}
