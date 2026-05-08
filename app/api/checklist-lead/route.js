import { NextResponse } from 'next/server';

import config from '@/config';

const checklistDownloadUrl =
	process.env.CHECKLIST_DOWNLOAD_URL ||
	'https://nnuvcjkozpiborbkurhp.supabase.co/storage/v1/object/public/downloads/DM-Checklist.pdf';

const getStrapiBaseUrl = () =>
	process.env.STRAPI_API_URL ||
	process.env.NEXT_PUBLIC_STRAPI_API_URL ||
	(process.env.NODE_ENV === 'development'
		? 'http://127.0.0.1:1337'
		: config.api);

const getStrapiHeaders = ({ includeAuthorization = true } = {}) => {
	const headers = {
		'Content-Type': 'application/json',
	};

	if (includeAuthorization && process.env.STRAPI_API_TOKEN) {
		headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
	}

	return headers;
};

const getStrapiErrorMessage = (payload, fallback) => {
	const message = payload?.error?.message || payload?.message || fallback;
	const errorDetails = payload?.error?.details?.errors?.[0]?.path?.[0];

	return errorDetails ? `${message}: ${errorDetails}` : message;
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const createChecklistLead = async ({ email, includeAuthorization = true }) => {
	const response = await fetch(`${getStrapiBaseUrl()}/api/checklist-leads`, {
		method: 'POST',
		headers: getStrapiHeaders({ includeAuthorization }),
		body: JSON.stringify({ data: { email } }),
		cache: 'no-store',
	});
	const payload = await response.json().catch(() => null);

	return { response, payload };
};

export async function POST(request) {
	try {
		const body = await request.json();
		const email = body?.email?.trim().toLowerCase();

		if (!email || !isValidEmail(email)) {
			return NextResponse.json(
				{ error: 'Enter a valid email address.' },
				{ status: 400 },
			);
		}

		let { response: strapiResponse, payload: strapiPayload } =
			await createChecklistLead({ email });

		if (strapiResponse.status === 401 && process.env.STRAPI_API_TOKEN) {
			console.error(
				'checklist-lead Strapi token was rejected. Retrying without Authorization header.',
			);
			const retryResult = await createChecklistLead({
				email,
				includeAuthorization: false,
			});
			strapiResponse = retryResult.response;
			strapiPayload = retryResult.payload;
		}

		const isCredentialError =
			strapiResponse.status === 401 || strapiResponse.status === 403;

		if (!strapiResponse.ok || strapiPayload?.error) {
			const errorMessage = isCredentialError
				? 'Checklist access is temporarily unavailable. Please check the Strapi API token and create access for Checklist Lead.'
				: getStrapiErrorMessage(
						strapiPayload,
						'Failed to save the checklist lead.',
					);

			console.error('checklist-lead Strapi error:', {
				status: strapiResponse.status,
				message: errorMessage,
				payload: strapiPayload,
			});

			return NextResponse.json(
				{
					error: errorMessage,
				},
				{ status: strapiResponse.status || 500 },
			);
		}

		return NextResponse.json(
			{
				checklistLead: strapiPayload?.data ?? null,
				downloadUrl: checklistDownloadUrl,
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error('checklist-lead route error:', error);
		return NextResponse.json(
			{ error: error?.message || 'Failed to submit the checklist request.' },
			{ status: 500 },
		);
	}
}
