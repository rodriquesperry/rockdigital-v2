import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Hr,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from '@react-email/components';

const baseUrl = 'https://rockdigital.agency';
const fallbackFirstName = 'there';
const defaultLogoSrc = '/static/rock-digital-logo.png';

const auditPillars = [
	{
		number: '01',
		title: 'Conversion Performance',
		description:
			'Are visitors taking action—or dropping off? We look at things like CTA placement, page structure, and where users lose interest.',
	},
	{
		number: '02',
		title: 'User Experience & Flow',
		description:
			'Can someone land on your site and immediately know where to go next? We evaluate how easily users move from interest to action.',
	},
	{
		number: '03',
		title: 'Technical Performance',
		description:
			'This includes load speed, mobile responsiveness, and overall site structure. Even small issues here can quietly hurt conversions.',
	},
	{
		number: '04',
		title: 'SEO Foundation',
		description:
			'Is your site structured in a way that search engines can properly read and rank it? We look at on-page setup, indexing readiness, and keyword alignment.',
	},
	{
		number: '05',
		title: 'Messaging Clarity',
		description:
			'Within a few seconds, is it clear what you do, who it’s for, and why it matters? If not, people leave—fast.',
	},
];

export const whatWeLookForInAnAuditSubject = 'What We Look For in an Audit';

export const whatWeLookForInAnAuditPreview =
	'A quick look at the five areas we review in every website audit.';

export const getWhatWeLookForInAnAuditText = ({
	firstName = fallbackFirstName,
} = {}) =>
	[
		`Hi ${firstName},`,
		'',
		'As I’m preparing your audit, I want to give you a quick look at how we evaluate websites.',
		'',
		'Most people think an audit is just surface-level feedback.',
		'',
		'It’s not.',
		'',
		'We break it down into five core areas that directly impact how your website performs:',
		'',
		'1. Conversion Performance',
		'Are visitors taking action—or dropping off? We look at things like CTA placement, page structure, and where users lose interest.',
		'',
		'2. User Experience & Flow',
		'Can someone land on your site and immediately know where to go next? We evaluate how easily users move from interest to action.',
		'',
		'3. Technical Performance',
		'This includes load speed, mobile responsiveness, and overall site structure. Even small issues here can quietly hurt conversions.',
		'',
		'4. SEO Foundation',
		'Is your site structured in a way that search engines can properly read and rank it? We look at on-page setup, indexing readiness, and keyword alignment.',
		'',
		'5. Messaging Clarity',
		'Within a few seconds, is it clear what you do, who it’s for, and why it matters? If not, people leave—fast.',
		'',
		'Each of these areas plays a role in whether your website is generating results—or just existing.',
		'',
		'I’ll walk through how your site performs in each of these during your audit.',
		'',
		'If there’s anything specific you want me to focus on, feel free to reply and let me know.',
		'',
		'Talk soon,',
		'Rocky',
		'Rock Digital',
	].join('\n');

function AuditPillar({ number, title, description, isLast = false }) {
	return (
		<Section style={styles.pillarRow}>
			<Text style={styles.pillarNumber}>{number}</Text>
			<Text style={styles.pillarTitle}>{title}</Text>
			<Text style={styles.pillarDescription}>{description}</Text>
			{!isLast ? <Hr style={styles.pillarDivider} /> : null}
		</Section>
	);
}

export function WhatWeLookForInAnAuditEmail({
	firstName = fallbackFirstName,
	logoSrc = defaultLogoSrc,
}) {
	return (
		<Html lang='en'>
			<Head />
			<Preview>{whatWeLookForInAnAuditPreview}</Preview>
			<Body style={styles.body}>
				<Container style={styles.wrapper}>
					<Section style={styles.brandRow}>
						<Link href={baseUrl} style={styles.brandLink}>
							<Img
								src={logoSrc}
								alt='Rock Digital'
								width='64px'
								height='auto'
								style={styles.logo}
							/>
						</Link>
					</Section>

					<Section style={styles.card}>
						<Text style={styles.eyebrow}>WEBSITE AUDIT PROCESS</Text>
						<Heading as='h1' style={styles.heading}>
							What We Look For in an Audit
						</Heading>

						<Text style={styles.intro}>Hi {firstName},</Text>
						<Text style={styles.paragraph}>
							As I&apos;m preparing your audit, I want to give you a quick look
							at how we evaluate websites.
						</Text>
						<Text style={styles.paragraph}>
							Most people think an audit is just surface-level feedback.
						</Text>
						<Text style={styles.emphasis}>It&apos;s not!</Text>
						<Text style={styles.paragraph}>
							We break it down into five core areas that directly impact how
							your website performs:
						</Text>

						<Section style={styles.pillarsWrap}>
							{auditPillars.map((pillar, index) => (
								<AuditPillar
									key={pillar.number}
									number={pillar.number}
									title={pillar.title}
									description={pillar.description}
									isLast={index === auditPillars.length - 1}
								/>
							))}
						</Section>

						<Section style={styles.closingBlock}>
							<Text style={styles.closingLead}>
								Each of these areas plays a role in whether your website is
								generating results—or just existing.
							</Text>
							<Text style={styles.paragraph}>
								I&apos;ll walk through how your site performs in each of these
								during your audit.
							</Text>
							<Text style={styles.paragraph}>
								If there&apos;s anything specific you want me to focus on, feel
								free to reply and let me know.
							</Text>
						</Section>

						<Section style={styles.signatureBlock}>
							<Text style={styles.signoff}>Talk soon,</Text>
							<Text style={styles.signer}>Rocky</Text>
							<Text style={styles.signatureMeta}>Rock Digital</Text>
						</Section>
					</Section>

					<Section style={styles.footer}>
						<Link href={baseUrl} style={styles.footerLink}>
							rockdigital.agency
						</Link>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

export default WhatWeLookForInAnAuditEmail;

const styles = {
	body: {
		margin: 0,
		padding: '28px 14px',
		backgroundColor: '#f3ede4',
		color: '#1d1d1b',
		fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
	},
	wrapper: {
		width: '100%',
		maxWidth: '640px',
		margin: '0 auto',
	},
	brandRow: {
		padding: '0 6px 14px',
	},
	brandLink: {
		display: 'inline-block',
		textDecoration: 'none',
	},
	logo: {
		display: 'block',
		width: '64px',
		height: 'auto',
		border: 0,
	},
	card: {
		backgroundColor: '#fffdf9',
		border: '1px solid #e7dccd',
		borderRadius: '22px',
		padding: '38px 30px 34px',
		boxShadow: '0 14px 36px rgba(77, 55, 23, 0.06)',
	},
	eyebrow: {
		margin: '0 0 10px',
		color: '#8d6c3a',
		fontSize: '11px',
		fontWeight: 700,
		letterSpacing: '0.16em',
		textTransform: 'uppercase',
	},
	heading: {
		margin: '0 0 24px',
		color: '#1d1d1b',
		fontSize: '28px',
		fontWeight: 400,
		lineHeight: '36px',
		letterSpacing: '.2rem',
	},
	intro: {
		margin: '0 0 18px',
		color: '#35312b',
		fontSize: '17px',
		lineHeight: '28px',
	},
	paragraph: {
		margin: '0 0 16px',
		color: '#4a453d',
		fontSize: '16px',
		lineHeight: '27px',
	},
	emphasis: {
		margin: '0 0 18px',
		color: '#1d1d1b',
		fontSize: '20px',
		fontWeight: 600,
		lineHeight: '30px',
		letterSpacing: '-0.01em',
    fontStyle: 'italic',
	},
	pillarsWrap: {
		marginTop: '28px',
		padding: '2px 0 0',
	},
	pillarRow: {
		padding: '0 0 18px',
	},
	pillarNumber: {
		margin: '0 0 8px',
		color: '#a07e4a',
		fontSize: '12px',
		fontWeight: 700,
		lineHeight: '16px',
		letterSpacing: '0.16em',
		textTransform: 'uppercase',
	},
	pillarTitle: {
		margin: '0 0 8px',
		color: '#1d1d1b',
		fontSize: '19px',
		fontWeight: 500,
		lineHeight: '27px',
	},
	pillarDescription: {
		margin: '0',
		color: '#4a453d',
		fontSize: '15px',
		lineHeight: '25px',
	},
	pillarDivider: {
		margin: '18px 0 0',
		border: 'none',
		borderTop: '1px solid #ece2d4',
	},
	closingBlock: {
		marginTop: '28px',
		paddingTop: '24px',
		borderTop: '1px solid #e8dece',
	},
	closingLead: {
		margin: '0 0 14px',
		color: '#1d1d1b',
		fontSize: '24px',
		fontWeight: 400,
		lineHeight: '31px',
		letterSpacing: '-0.01em',
	},
	signatureBlock: {
		marginTop: '30px',
		paddingTop: '20px',
		borderTop: '1px solid #f0e7db',
	},
	signoff: {
		margin: '0 0 8px',
		color: '#4a453d',
		fontSize: '16px',
		lineHeight: '26px',
	},
	signer: {
		margin: '0 0 4px',
		color: '#1d1d1b',
		fontSize: '21px',
		fontWeight: 600,
		lineHeight: '28px',
	},
	signatureMeta: {
		margin: 0,
		color: '#7c7367',
		fontSize: '14px',
		lineHeight: '22px',
	},
	footer: {
		padding: '14px 6px 0',
	},
	footerLink: {
		color: '#7d7468',
		fontSize: '13px',
		lineHeight: '20px',
		textDecoration: 'none',
	},
};
