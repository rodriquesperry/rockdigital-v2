import { createElement } from 'react';

import AuditRequestReceivedEmail, {
	auditRequestReceivedSubject,
	getAuditRequestReceivedText,
} from '@/emails/Audit Sequence/AuditRequestReceivedEmail';
import WhatMostWebsitesGetWrongEmail, {
	getWhatMostWebsitesGetWrongText,
	whatMostWebsitesGetWrongSubject,
} from '@/emails/Audit Sequence/WhatMostWebsitesGetWrongEmail';
import WhatWeLookForInAnAuditEmail, {
	getWhatWeLookForInAnAuditText,
	whatWeLookForInAnAuditSubject,
} from '@/emails/Audit Sequence/WhatWeLookForInAnAuditEmail';
import QuickQuestionEmail, {
	getQuickQuestionText,
	quickQuestionSubject,
} from '@/emails/Audit Sequence/QuickQuestionEmail';

const defaultDelayMinutes = 1440;

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

export const getAuditSequenceDelayMinutes = (delayOverride) =>
	toPositiveNumber(delayOverride) ||
	toPositiveNumber(process.env.AUDIT_SEQUENCE_DELAY_MINUTES) ||
	defaultDelayMinutes;

export const buildAuditSequenceMessages = ({
	firstName,
	bookingLink = '',
	logoSrc,
}) => [
	{
		key: 'audit-request-received',
		subject: auditRequestReceivedSubject,
		react: createElement(AuditRequestReceivedEmail, {
			firstName,
			bookingLink,
			logoSrc,
		}),
		text: getAuditRequestReceivedText({
			firstName,
			bookingLink,
		}),
	},
	{
		key: 'what-most-websites-get-wrong',
		subject: whatMostWebsitesGetWrongSubject,
		react: createElement(WhatMostWebsitesGetWrongEmail, {
			firstName,
			logoSrc,
		}),
		text: getWhatMostWebsitesGetWrongText({
			firstName,
		}),
	},
	{
		key: 'what-we-look-for-in-an-audit',
		subject: whatWeLookForInAnAuditSubject,
		react: createElement(WhatWeLookForInAnAuditEmail, {
			firstName,
			logoSrc,
		}),
		text: getWhatWeLookForInAnAuditText({
			firstName,
		}),
	},
	{
		key: 'quick-question',
		subject: quickQuestionSubject,
		react: createElement(QuickQuestionEmail, {
			firstName,
			logoSrc,
		}),
		text: getQuickQuestionText({
			firstName,
		}),
	},
];

const getScheduledAtIso = ({ baseDate, delayMinutes, stepIndex }) => {
	if (stepIndex === 0) {
		return null;
	}

	const scheduledDate = new Date(
		baseDate.getTime() + stepIndex * delayMinutes * 60 * 1000,
	);

	return scheduledDate.toISOString();
};

export async function sendAuditSequenceEmails({
	resend,
	from,
	to,
	replyTo,
	firstName,
	bookingLink = '',
	logoSrc,
	attachments = [],
	delayMinutes,
}) {
	const effectiveDelayMinutes = getAuditSequenceDelayMinutes(delayMinutes);
	const baseDate = new Date();
	const messages = buildAuditSequenceMessages({
		firstName,
		bookingLink,
		logoSrc,
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
	const scheduledSteps = results.slice(1);
	const failedStep = results.find((result) => result.error) || null;

	return {
		delayMinutes: effectiveDelayMinutes,
		firstStepResult,
		scheduledSteps,
		steps: results,
		failedStep,
		firstStepSent: Boolean(firstStepResult && !firstStepResult.error),
		allStepsQueued:
			results.length === messages.length && results.every((result) => !result.error),
	};
}
