import { NextResponse } from 'next/server';
import { sendLeadEmails } from '@/lib/server/sendLeadEmails';

export async function POST(request) {
	try {
		const body = await request.json();
		const emailResult = await sendLeadEmails(body);
		return NextResponse.json(emailResult, { status: 200 });
	} catch (error) {
		console.error('send-email route error:', error);
		return NextResponse.json(
			{ error: error?.message || 'Failed to send email.' },
			{ status: 500 }
		);
	}
}
