import 'server-only';

import { readFile } from 'fs/promises';
import { join } from 'path';
import { createElement } from 'react';
import { Resend } from 'resend';

import ChecklistDownloadEmail, {
	getChecklistDownloadSubject,
	getChecklistDownloadText,
} from '@/emails/Checklist Sequence/ChecklistDownloadEmail';

const logoCid = 'rock-digital-logo';
const placeholderResendApiKey = 're_xxxxxxxxx';
const defaultDelayMinutes = 1440;

const digitalMarketingDownloadUrl =
	process.env.CHECKLIST_DOWNLOAD_URL ||
	'https://nnuvcjkozpiborbkurhp.supabase.co/storage/v1/object/public/downloads/DM-Checklist.pdf';

const premiumWebsiteLaunchDownloadUrl =
	process.env.PREMIUM_WEBSITE_LAUNCH_CHECKLIST_DOWNLOAD_URL ||
	'https://nnuvcjkozpiborbkurhp.supabase.co/storage/v1/object/public/downloads/Premium%20Website%20Launch%20Checklist.pdf';

export const checklistEmailSequences = {
	'digital-marketing-guide': {
		checklistName: 'Digital Marketing Checklist',
		downloadUrl: digitalMarketingDownloadUrl,
		landingPageUrl: 'https://rockdigital.agency/digital-marketing-guide',
		intro:
			'Use it to review the core marketing pieces that support visibility, trust, traffic, and better conversion paths.',
		nextStep:
			'Over the next few emails, we will walk through practical ways to turn the checklist into clearer marketing priorities.',
	},
	'premium-website-launch-checklist': {
		checklistName: 'Premium Website Launch Checklist',
		downloadUrl: premiumWebsiteLaunchDownloadUrl,
		landingPageUrl:
			'https://rockdigital.agency/premium-website-launch-checklist',
		intro:
			'Use it before launch to catch the details that can quietly affect trust, usability, search visibility, and conversions.',
		nextStep:
			'Over the next few emails, we will show you how to use the checklist to review your website with more confidence.',
	},
};

const getErrorMessage = (error, fallback) => {
	if (!error) {
		return fallback;
	}

	if (typeof error === 'string') {
		return error;
	}

	return error.message || error.name || fallback;
};

const toPositiveNumber = (value) => {
	if (value === null || value === undefined || value === '') {
		return null;
	}

	const parsedValue = Number(value);

	if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
		return null;
	}

	return parsedValue;
};

const getChecklistSequenceDelayMinutes = (delayOverride) =>
	toPositiveNumber(delayOverride) ||
	toPositiveNumber(process.env.CHECKLIST_SEQUENCE_DELAY_MINUTES) ||
	defaultDelayMinutes;

const getResendConfig = () => {
	const apiKey = process.env.RESEND_API_KEY?.trim();

	if (!apiKey) {
		throw new Error('RESEND_API_KEY is not available to this server runtime.');
	}

	if (apiKey === placeholderResendApiKey) {
		throw new Error(
			'RESEND_API_KEY is still set to the placeholder value. Replace it with a real Resend API key.',
		);
	}

	const fromEmailAddress =
		process.env.RESEND_FROM_EMAIL?.trim() || 'onboarding@resend.dev';
	const fromName = process.env.RESEND_FROM_NAME?.trim() || 'Rock Digital';

	return {
		apiKey,
		from:
			fromEmailAddress.includes('<')
				? fromEmailAddress
				: `${fromName} <${fromEmailAddress}>`,
		replyTo:
			process.env.RESEND_REPLY_TO_EMAIL?.trim() ||
			'rodriques.perry@rockdigital.agency',
	};
};

const getLogoAttachment = async () => {
	const logoPath = join(process.cwd(), 'assets', 'RockDigitalLogo-196px.png');
	const logoBuffer = await readFile(logoPath);

	return {
		filename: 'rock-digital-logo.png',
		content: logoBuffer,
		contentType: 'image/png',
		inlineContentId: logoCid,
	};
};

const getScheduledAtIso = ({ baseDate, delayMinutes, stepIndex }) => {
	if (stepIndex === 0) {
		return null;
	}

	const scheduledDate = new Date(
		baseDate.getTime() + stepIndex * delayMinutes * 60 * 1000,
	);

	return scheduledDate.toISOString();
};

export const buildChecklistSequenceMessages = ({ checklistKey, logoSrc }) => {
	const sequence = checklistEmailSequences[checklistKey];

	if (!sequence) {
		throw new Error(`No checklist email sequence is configured for ${checklistKey}.`);
	}

	return [
		{
			key: `${checklistKey}-download`,
			subject: getChecklistDownloadSubject(sequence.checklistName),
			react: createElement(ChecklistDownloadEmail, {
				checklistName: sequence.checklistName,
				downloadUrl: sequence.downloadUrl,
				intro: sequence.intro,
				nextStep: sequence.nextStep,
				logoSrc,
			}),
			text: getChecklistDownloadText({
				checklistName: sequence.checklistName,
				downloadUrl: sequence.downloadUrl,
				intro: sequence.intro,
				nextStep: sequence.nextStep,
			}),
		},
	];
};

export async function sendChecklistSequenceEmails({
	to,
	checklistKey,
	delayMinutes,
}) {
	const sequence = checklistEmailSequences[checklistKey];

	if (!sequence) {
		throw new Error(`No checklist email sequence is configured for ${checklistKey}.`);
	}

	const { apiKey, from, replyTo } = getResendConfig();
	const resend = new Resend(apiKey);
	const effectiveDelayMinutes = getChecklistSequenceDelayMinutes(delayMinutes);
	const baseDate = new Date();
	const attachments = [await getLogoAttachment()];
	const messages = buildChecklistSequenceMessages({
		checklistKey,
		logoSrc: `cid:${logoCid}`,
	});
	const results = [];

	for (const [index, message] of messages.entries()) {
		const scheduledAt = getScheduledAtIso({
			baseDate,
			delayMinutes: effectiveDelayMinutes,
			stepIndex: index,
		});
		const { data, error } = await resend.emails.send({
			from,
			to,
			replyTo,
			subject: message.subject,
			react: message.react,
			text: message.text,
			attachments,
			...(scheduledAt ? { scheduledAt } : {}),
		});

		results.push({
			step: index + 1,
			key: message.key,
			subject: message.subject,
			scheduledAt,
			data,
			error,
		});

		if (error) {
			break;
		}
	}

	const firstStepResult = results[0] || null;
	const failedStep = results.find((result) => result.error) || null;

	return {
		checklistKey,
		checklistName: sequence.checklistName,
		delayMinutes: effectiveDelayMinutes,
		firstStepResult,
		scheduledSteps: results.slice(1),
		steps: results,
		failedStep,
		firstStepSent: Boolean(firstStepResult && !firstStepResult.error),
		allStepsQueued:
			results.length === messages.length && results.every((result) => !result.error),
		errorMessage: failedStep
			? getErrorMessage(
					failedStep.error,
					'Checklist email could not be sent.',
				)
			: null,
	};
}
