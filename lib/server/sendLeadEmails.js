import 'server-only';

import { readFile } from 'fs/promises';
import { join } from 'path';
import { Resend } from 'resend';

import {
	auditRequestReceivedSubject,
} from '@/emails/Audit Sequence/AuditRequestReceivedEmail';
import { sendAuditSequenceEmails } from '@/lib/server/auditEmailSequence';

const apiKey = process.env.RESEND_API_KEY || 're_xxxxxxxxx';
const fromEmailAddress =
	process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
const fromName = process.env.RESEND_FROM_NAME || 'Rock Digital';
const auditBookingLink = process.env.AUDIT_BOOKING_LINK || '';
const resend = new Resend(apiKey);
const auditLogoCid = 'rock-digital-logo';

const getErrorMessage = (error, fallback) => {
	if (!error) {
		return fallback;
	}

	if (typeof error === 'string') {
		return error;
	}

	return error.message || error.name || fallback;
};

const getFirstName = (name) => {
	const trimmedName = name?.trim();

	if (!trimmedName) {
		return 'there';
	}

	return trimmedName.split(/\s+/)[0];
};

const getFormattedFromEmail = () =>
	fromEmailAddress.includes('<')
		? fromEmailAddress
		: `${fromName} <${fromEmailAddress}>`;

const getAuditLogoAttachment = async () => {
	const logoPath = join(process.cwd(), 'assets', 'RockDigitalLogo-196px.png');
	const logoBuffer = await readFile(logoPath);

	return {
		filename: 'rock-digital-logo.png',
		content: logoBuffer,
		contentType: 'image/png',
		inlineContentId: auditLogoCid,
	};
};

export async function sendLeadEmails(body) {
	if (apiKey === 're_xxxxxxxxx') {
		throw new Error(
			'Replace re_xxxxxxxxx with your real Resend API key in RESEND_API_KEY.',
		);
	}

	const {
		name,
		email,
		phone_num,
		service,
		description,
		business_name,
		website_url,
		unique_visitors,
		conversion_rate,
		submissionType,
		auditSequenceDelayMinutes,
		sendInternalNotification = true,
	} = body;

	const trimmedEmail = email?.trim();
	const isWebsiteAudit = submissionType === 'website-audit';

	if (!trimmedEmail) {
		throw new Error('A recipient email is required.');
	}

	const internalSubject = isWebsiteAudit
		? `New website audit request: ${business_name || name || trimmedEmail}`
		: `New contact form submission: ${service || 'General inquiry'}`;
	const userSubject = isWebsiteAudit
		? auditRequestReceivedSubject
		: 'Thanks for contacting Rock Digital';
	const auditDetailsHtml = isWebsiteAudit
		? `
			<p><strong>Business Name:</strong> ${business_name || 'N/A'}</p>
			<p><strong>Website URL:</strong> ${website_url || 'N/A'}</p>
			<p><strong>Unique Visitors / Month:</strong> ${unique_visitors || 'Unknown'}</p>
			<p><strong>Conversion Rate:</strong> ${conversion_rate || 'Unknown'}</p>
		`
		: '';
	const userIntro = isWebsiteAudit
		? '<p>Thanks for requesting a website audit from Rock Digital. We received your request.</p>'
		: '<p>Thanks for reaching out to Rock Digital. We received your request.</p>';
	const userSummary = isWebsiteAudit
		? `
			<p><strong>Business Name:</strong> ${business_name || 'N/A'}</p>
			<p><strong>Website URL:</strong> ${website_url || 'N/A'}</p>
		`
		: `<p><strong>Service requested:</strong> ${service || 'N/A'}</p>`;

	let internalData = null;

	if (sendInternalNotification) {
		const { data, error } = await resend.emails.send({
			from: getFormattedFromEmail(),
			to: 'rodriques.perry@rockdigital.agency',
			subject: internalSubject,
			replyTo: trimmedEmail,
			html: `
				<p><strong>Name:</strong> ${name || 'N/A'}</p>
				<p><strong>Email:</strong> ${trimmedEmail}</p>
				<p><strong>Phone:</strong> ${phone_num || 'N/A'}</p>
				<p><strong>Service:</strong> ${service || 'N/A'}</p>
				<p><strong>Description:</strong> ${description || 'N/A'}</p>
				${auditDetailsHtml}
			`,
		});

		if (error) {
			throw new Error(
				getErrorMessage(
					error,
					'Failed to send the internal notification email.',
				),
			);
		}

		internalData = data;
	}

	if (isWebsiteAudit) {
		const auditSequence = await sendAuditSequenceEmails({
			resend,
			from: getFormattedFromEmail(),
			to: trimmedEmail,
			replyTo: 'rodriques.perry@rockdigital.agency',
			firstName: getFirstName(name),
			bookingLink: auditBookingLink,
			logoSrc: `cid:${auditLogoCid}`,
			attachments: [await getAuditLogoAttachment()],
			delayMinutes: auditSequenceDelayMinutes,
		});

		if (!auditSequence.firstStepSent) {
			return {
				internalData,
				userEmailSent: false,
				userEmailError: getErrorMessage(
					auditSequence.failedStep?.error,
					'Confirmation email to the user could not be sent.',
				),
				auditSequence,
				note:
					'Submission succeeded, but the first audit sequence email could not be sent.',
			};
		}

		return {
			internalData,
			userData: auditSequence.firstStepResult?.data || null,
			userEmailSent: true,
			auditSequence,
			auditSequenceScheduled: auditSequence.allStepsQueued,
		};
	}

	const { data: userData, error: userError } = await resend.emails.send({
		from: getFormattedFromEmail(),
		to: trimmedEmail,
		subject: userSubject,
		replyTo: 'rodriques.perry@rockdigital.agency',
		html: `
			${userIntro}
			<p><strong>Name:</strong> ${name || 'N/A'}</p>
			${userSummary}
			<p>We will follow up shortly.</p>
		`,
	});

	if (userError) {
		return {
			internalData,
			userEmailSent: false,
			userEmailError: getErrorMessage(
				userError,
				'Confirmation email to the user could not be sent.',
			),
			note:
				'Submission succeeded, but confirmation email to the user was blocked by provider settings.',
		};
	}

	return { userData, internalData, userEmailSent: true };
}
