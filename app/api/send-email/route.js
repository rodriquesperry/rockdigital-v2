import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY || 're_xxxxxxxxx';
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
const resend = new Resend(apiKey);

export async function POST(request) {
	try {
		if (apiKey === 're_xxxxxxxxx') {
			return NextResponse.json(
				{
					error:
						'Replace re_xxxxxxxxx with your real Resend API key in RESEND_API_KEY.',
				},
				{ status: 500 }
			);
		}

		const body = await request.json();
		const { name, email, phone_num, service, description } = body;
		const trimmedEmail = email?.trim();

		if (!trimmedEmail) {
			return NextResponse.json(
				{ error: 'A recipient email is required.' },
				{ status: 400 }
			);
		}

		const { data: internalData, error: internalError } = await resend.emails.send({
			from: fromEmail,
			to: 'rodriques.perry@rockdigital.agency',
			subject: `New contact form submission: ${service || 'General inquiry'}`,
			replyTo: trimmedEmail,
			html: `
				<p><strong>Name:</strong> ${name || 'N/A'}</p>
				<p><strong>Email:</strong> ${trimmedEmail}</p>
				<p><strong>Phone:</strong> ${phone_num || 'N/A'}</p>
				<p><strong>Service:</strong> ${service || 'N/A'}</p>
				<p><strong>Description:</strong> ${description || 'N/A'}</p>
			`,
		});

		if (internalError) {
			console.error('Resend internal email error:', internalError);
			return NextResponse.json({ error: internalError }, { status: 500 });
		}

		const { data: userData, error: userError } = await resend.emails.send({
			from: fromEmail,
			to: trimmedEmail,
			subject: 'Thanks for contacting Rock Digital',
			replyTo: 'rodriques.perry@rockdigital.agency',
			html: `
				<p>Thanks for reaching out to Rock Digital. We received your request.</p>
				<p><strong>Name:</strong> ${name || 'N/A'}</p>
				<p><strong>Service requested:</strong> ${service || 'N/A'}</p>
				<p>We will follow up shortly.</p>
			`,
		});

		if (userError) {
			console.error('Resend user email error:', userError);
			return NextResponse.json(
				{
					internalData,
					userEmailSent: false,
					userEmailError: userError,
					note:
						'Submission succeeded, but confirmation email to the user was blocked by provider settings.',
				},
				{ status: 200 }
			);
		}

		return NextResponse.json({ userData, internalData, userEmailSent: true }, { status: 200 });
	} catch (error) {
		console.error('send-email route error:', error);
		return NextResponse.json(
			{ error: error?.message || 'Failed to send email.' },
			{ status: 500 }
		);
	}
}
