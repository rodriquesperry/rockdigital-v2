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

const issueItems = [
	{
		number: '01',
		title: 'They look good, but don’t convert',
		content: [
			'A clean design isn’t enough. If your site isn’t guiding visitors toward a clear action, you’re losing opportunities every day.',
		],
	},
	{
		number: '02',
		title: 'No clear user journey',
		content: [
			'Visitors land on the site... and then what?',
			'If there’s no intentional flow from interest to trust to action, people leave.',
		],
	},
	{
		number: '03',
		title: 'Slow load times',
		content: [
			'Even a 1-2 second delay can cost you real leads. Most business owners don’t realize how much performance impacts conversions.',
		],
	},
];

export const whatMostWebsitesGetWrongSubject = 'What most websites get wrong';

export const whatMostWebsitesGetWrongPreview =
	'Most websites do not have a traffic problem. They have a performance problem.';

export const getWhatMostWebsitesGetWrongText = ({
	firstName = fallbackFirstName,
} = {}) =>
	[
		`Hi ${firstName},`,
		'',
		'Before we dive into your audit, I want to share something I see all the time.',
		'',
		'Most websites don’t have a traffic problem.',
		'',
		'They have a performance problem.',
		'',
		'Here are a few of the most common issues:',
		'',
		'1. They look good, but don’t convert',
		'A clean design isn’t enough. If your site isn’t guiding visitors toward a clear action, you’re losing opportunities every day.',
		'',
		'2. No clear user journey',
		'Visitors land on the site... and then what?',
		'If there’s no intentional flow from interest to trust to action, people leave.',
		'',
		'3. Slow load times',
		'Even a 1-2 second delay can cost you real leads. Most business owners don’t realize how much performance impacts conversions.',
		'',
		'The good news is these are all fixable.',
		'',
		'And more importantly, they’re measurable.',
		'',
		'I’ll break this down specifically for your site in your audit.',
		'',
		'If you already have a specific concern about your website, feel free to reply. I’ll take a look while preparing your audit.',
		'',
		'Talk soon,',
		'Rocky',
		'Rock Digital',
	].join('\n');

function IssueItem({ number, title, content, isLast = false }) {
	return (
		<Section style={styles.issueRow}>
			<Text style={styles.issueNumber}>{number}</Text>
			<Text style={styles.issueTitle}>{title}</Text>
			{content.map((paragraph) => (
				<Text key={paragraph} style={styles.issueParagraph}>
					{paragraph}
				</Text>
			))}
			{!isLast ? <Hr style={styles.issueDivider} /> : null}
		</Section>
	);
}

export function WhatMostWebsitesGetWrongEmail({
	firstName = fallbackFirstName,
	logoSrc = defaultLogoSrc,
}) {
	return (
		<Html lang='en'>
			<Head />
			<Preview>{whatMostWebsitesGetWrongPreview}</Preview>
			<Body style={styles.body}>
				<Container style={styles.wrapper}>
					<Section style={styles.brandRow}>
						<Link href={baseUrl} style={styles.brandLink}>
							<Img
								src={logoSrc}
								alt='Rock Digital'
								width='64'
								height='auto'
								style={styles.logo}
							/>
						</Link>
					</Section>

					<Section style={styles.card}>
						<Text style={styles.eyebrow}>Website Audit Insight</Text>
						<Heading as='h1' style={styles.heading}>
							What most websites get wrong.
						</Heading>

						<Text style={styles.intro}>Hi {firstName},</Text>
						<Text style={styles.paragraph}>
							Before we dive into your audit, I want to share something I see
							all the time.
						</Text>

						<Section style={styles.powerBlock}>
							<Text style={styles.powerEyebrow}>The real issue</Text>
							<Text style={styles.powerLine}>
								Most websites don&apos;t have a traffic problem.
							</Text>
							<Text style={styles.powerLineStrong}>
								They have a performance problem.
							</Text>
						</Section>

						<Text style={styles.sectionLabel}>
							Here are a few of the most common issues:
						</Text>

						<Section style={styles.issuesWrap}>
							{issueItems.map((issue, index) => (
							<IssueItem
								key={issue.number}
								number={issue.number}
								title={issue.title}
								content={issue.content}
								isLast={index === issueItems.length - 1}
							/>
							))}
						</Section>

						<Section style={styles.closingBlock}>
							<Text style={styles.closingLead}>
								The good news is these are all fixable.
							</Text>
							<Text style={styles.paragraph}>
								And more importantly, they&apos;re measurable.
							</Text>
							<Text style={styles.paragraph}>
								I&apos;ll break this down specifically for your site in your
								audit.
							</Text>
							<Text style={styles.paragraph}>
								If you already have a specific concern about your website, feel
								free to reply to this email. I&apos;ll take a look while preparing your
								audit.
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

export default WhatMostWebsitesGetWrongEmail;

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
	powerBlock: {
		margin: '30px 0 8px',
		padding: '24px 0',
		// backgroundColor: '#f8f2e8',
		// border: '1px solid #eadfce',
		// borderRadius: '18px',
    borderTop: '1px solid #f0e7db',
	},
	powerEyebrow: {
		margin: '0 0 12px',
		color: '#9c7a45',
		fontSize: '11px',
		fontWeight: 700,
		letterSpacing: '0.14em',
		textTransform: 'uppercase',
	},
	powerLine: {
		margin: '0 0 6px',
		color: '#3b352d',
		fontSize: '24px',
		lineHeight: '32px',
		letterSpacing: '-0.01em',
	},
	powerLineStrong: {
		margin: 0,
		color: '#1d1d1b',
		fontSize: '24px',
		fontWeight: 600,
		lineHeight: '30px',
		letterSpacing: '-0.01em',
	},
	sectionLabel: {
		margin: '0 0 16px',
		color: '#5b5349',
		fontSize: '13px',
		fontWeight: 700,
		lineHeight: '22px',
		letterSpacing: '0.08em',
		textTransform: 'uppercase',
    borderTop: '1px solid #f0e7db',
    paddingTop: '18px',
	},
	issuesWrap: {
		marginTop: '28px',
		padding: '2px 0 0',
	},
	issueRow: {
		padding: '0 0 18px',
	},
	issueNumber: {
		margin: '0 0 8px',
		color: '#a07e4a',
		fontSize: '11px',
		fontWeight: 700,
		lineHeight: '16px',
		letterSpacing: '0.16em',
		textTransform: 'uppercase',
	},
	issueTitle: {
		margin: '0 0 8px',
		color: '#1d1d1b',
		fontSize: '19px',
		fontWeight: 500,
		lineHeight: '27px',
	},
	issueParagraph: {
		margin: '0',
		color: '#4a453d',
		fontSize: '15px',
		lineHeight: '25px',
	},
	issueDivider: {
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
