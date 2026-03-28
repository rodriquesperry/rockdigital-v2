import { NextResponse } from 'next/server';

import { sendLeadEmails } from '@/lib/server/sendLeadEmails';

const defaultTestName = 'Audit Sequence Test';
const defaultWebsiteUrl = 'https://example.com';

export async function POST(request) {
	if (process.env.NODE_ENV !== 'development') {
		return NextResponse.json(
			{ error: 'This test route is only available in development.' },
			{ status: 403 },
		);
	}

	try {
		const body = await request.json().catch(() => ({}));
		const recipientEmail =
			body.email?.trim() ||
			process.env.AUDIT_SEQUENCE_TEST_EMAIL ||
			process.env.RESEND_FROM_EMAIL ||
			'';

		if (!recipientEmail) {
			return NextResponse.json(
				{
					error:
						'Provide an email in the request body or set AUDIT_SEQUENCE_TEST_EMAIL.',
				},
				{ status: 400 },
			);
		}

		const emailResult = await sendLeadEmails({
			name: body.name || defaultTestName,
			email: recipientEmail,
			phone_num: body.phone_num || '',
			service: 'Website Audit',
			description: body.description || 'Local audit email sequence test.',
			business_name: body.business_name || 'Rock Digital Test',
			website_url: body.website_url || defaultWebsiteUrl,
			unique_visitors: body.unique_visitors || '1,000',
			conversion_rate: body.conversion_rate || '2%',
			submissionType: 'website-audit',
			auditSequenceDelayMinutes: body.auditSequenceDelayMinutes || 1,
			sendInternalNotification: false,
		});

		return NextResponse.json(emailResult, { status: 200 });
	} catch (error) {
		console.error('test-audit-sequence route error:', error);
		return NextResponse.json(
			{ error: error?.message || 'Failed to trigger the audit sequence test.' },
			{ status: 500 },
		);
	}
}
