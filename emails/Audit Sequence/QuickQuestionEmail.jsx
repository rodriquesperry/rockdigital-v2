import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from '@react-email/components';

const baseUrl = 'https://rockdigital.agency';
const fallbackFirstName = 'there';
const defaultLogoSrc = '/static/rock-digital-logo.png';

export const quickQuestionSubject = 'Quick Question';

export const quickQuestionPreview =
	'A quick question before I send your audit.';

export const getQuickQuestionText = ({
	firstName = fallbackFirstName,
} = {}) =>
	[
		`Hi ${firstName},`,
		'',
		'Before I send your audit, I wanted to ask one quick question:',
		'',
		'What’s your main goal with your website right now?',
		'',
		'More leads, better conversions, a stronger first impression, a redesign—or something else entirely?',
		'',
		'Feel free to reply with whatever comes to mind. That context helps me make the audit more useful.',
		'',
		'Talk soon,',
		'Rocky',
		'Rock Digital',
	].join('\n');

export function QuickQuestionEmail({
	firstName = fallbackFirstName,
	logoSrc = defaultLogoSrc,
}) {
	return (
		<Html lang='en'>
			<Head />
			<Preview>{quickQuestionPreview}</Preview>
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
						<Text style={styles.eyebrow}>WEBSITE AUDIT PREP</Text>
						<Heading as='h1' style={styles.heading}>
							Quick Question
						</Heading>

						<Text style={styles.intro}>Hi {firstName},</Text>
						<Text style={styles.paragraph}>
							Before I send your audit, I wanted to ask one quick question:
						</Text>

						<Section style={styles.questionBlock}>
							<Text style={styles.questionText}>
								What&apos;s your main goal with your website right now?
							</Text>
							<Text style={styles.questionSupport}>
								More leads, better conversions, a stronger first impression, a
								redesign—or something else entirely?
							</Text>
						</Section>

						<Text style={styles.paragraph}>
							Feel free to reply with whatever comes to mind. That context
							helps me make the audit more useful.
						</Text>

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

export default QuickQuestionEmail;

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
	questionBlock: {
		margin: '26px 0 24px',
		padding: '24px 22px',
		backgroundColor: '#f8f2e8',
		border: '1px solid #eadfce',
		borderRadius: '18px',
	},
	questionText: {
		margin: '0 0 12px',
		color: '#1d1d1b',
		fontSize: '24px',
		fontWeight: 400,
		lineHeight: '32px',
		letterSpacing: '-0.01em',
	},
	questionSupport: {
		margin: 0,
		color: '#4a453d',
		fontSize: '16px',
		lineHeight: '27px',
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
