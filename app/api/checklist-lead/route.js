import { NextResponse } from 'next/server';

import config from '@/config';
import { sendChecklistSequenceEmails } from '@/lib/server/checklistEmailSequence';

const checklistDownloads = {
	'digital-marketing-guide':
		process.env.CHECKLIST_DOWNLOAD_URL ||
		'https://nnuvcjkozpiborbkurhp.supabase.co/storage/v1/object/public/downloads/DM-Checklist.pdf',
	'premium-website-launch-checklist':
		process.env.PREMIUM_WEBSITE_LAUNCH_CHECKLIST_DOWNLOAD_URL ||
		'https://nnuvcjkozpiborbkurhp.supabase.co/storage/v1/object/public/downloads/Premium%20Website%20Launch%20Checklist.pdf',
};

const defaultChecklistKey = 'digital-marketing-guide';
const getChecklistKey = (body) => {
	const requestedChecklistKey = body?.checklistKey || body?.checklist;

	if (!requestedChecklistKey) {
		return defaultChecklistKey;
	}

	return Object.hasOwn(checklistDownloads, requestedChecklistKey)
		? requestedChecklistKey
		: null;
};

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

const createChecklistLead = async ({
	email,
	checklistKey,
	includeAuthorization = true,
}) => {
	const response = await fetch(`${getStrapiBaseUrl()}/api/checklist-leads`, {
		method: 'POST',
		headers: getStrapiHeaders({ includeAuthorization }),
		body: JSON.stringify({ data: { email, checklistKey } }),
		cache: 'no-store',
	});
	const payload = await response.json().catch(() => null);

	return { response, payload };
};

export async function POST(request) {
	try {
		const body = await request.json();
		const email = body?.email?.trim().toLowerCase();
		const checklistKey = getChecklistKey(body);

		if (!email || !isValidEmail(email)) {
			return NextResponse.json(
				{ error: 'Enter a valid email address.' },
				{ status: 400 },
			);
		}

		if (!checklistKey) {
			return NextResponse.json(
				{ error: 'Enter a valid checklist key.' },
				{ status: 400 },
			);
		}

		let { response: strapiResponse, payload: strapiPayload } =
			await createChecklistLead({ email, checklistKey });

		if (strapiResponse.status === 401 && process.env.STRAPI_API_TOKEN) {
			console.error(
				'checklist-lead Strapi token was rejected. Retrying without Authorization header.',
			);
			const retryResult = await createChecklistLead({
				email,
				checklistKey,
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

		let emailSequence = null;
		let emailWarning = null;

		try {
			emailSequence = await sendChecklistSequenceEmails({
				to: email,
				checklistKey,
			});
			if (!emailSequence.firstStepSent) {
				emailWarning =
					emailSequence.errorMessage ||
					'The checklist lead was saved, but the checklist email could not be sent.';
			}
		} catch (error) {
			console.error('checklist-lead email sequence error:', error);
			emailWarning =
				error?.message ||
				'The checklist lead was saved, but the checklist email could not be sent.';
		}

		return NextResponse.json(
			{
				checklistLead: strapiPayload?.data ?? null,
				checklistKey,
				downloadUrl: checklistDownloads[checklistKey],
				emailSequence,
				userEmailSent: emailSequence?.firstStepSent ?? false,
				emailWarning,
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
