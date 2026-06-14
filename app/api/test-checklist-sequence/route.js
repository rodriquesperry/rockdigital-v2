import { NextResponse } from 'next/server';

import {
	checklistEmailSequences,
	sendChecklistSequenceEmails,
} from '@/lib/server/checklistEmailSequence';

export async function POST(request) {
	if (process.env.NODE_ENV !== 'development') {
		return NextResponse.json(
			{ error: 'This test route is only available in development.' },
			{ status: 403 },
		);
	}

	try {
		const body = await request.json().catch(() => ({}));
		const checklistKey = body.checklistKey || 'digital-marketing-guide';
		const recipientEmail =
			body.email?.trim() ||
			process.env.CHECKLIST_SEQUENCE_TEST_EMAIL ||
			process.env.RESEND_FROM_EMAIL ||
			'';

		if (!recipientEmail) {
			return NextResponse.json(
				{
					error:
						'Provide an email in the request body or set CHECKLIST_SEQUENCE_TEST_EMAIL.',
				},
				{ status: 400 },
			);
		}

		if (!checklistEmailSequences[checklistKey]) {
			return NextResponse.json(
				{ error: 'Enter a valid checklist key.' },
				{ status: 400 },
			);
		}

		const emailResult = await sendChecklistSequenceEmails({
			to: recipientEmail,
			checklistKey,
			delayMinutes: body.checklistSequenceDelayMinutes || 1,
		});

		return NextResponse.json(emailResult, { status: 200 });
	} catch (error) {
		console.error('test-checklist-sequence route error:', error);
		return NextResponse.json(
			{ error: error?.message || 'Failed to trigger the checklist sequence test.' },
			{ status: 500 },
		);
	}
}
