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
const defaultLogoSrc = '/static/rock-digital-logo.png';
const fallbackChecklistName = 'Rock Digital Checklist';
const fallbackDownloadUrl = baseUrl;

export const getChecklistDownloadSubject = (checklistName = fallbackChecklistName) =>
	`Here is your ${checklistName}`;

export const getChecklistDownloadPreview = (
	checklistName = fallbackChecklistName,
) => `Your ${checklistName} is ready.`;

export const getChecklistDownloadText = ({
	checklistName = fallbackChecklistName,
	downloadUrl = fallbackDownloadUrl,
	intro = '',
	nextStep = '',
} = {}) =>
	[
		'Hi there,',
		'',
		`Thanks for requesting the ${checklistName}.`,
		'',
		intro ||
			'Use it as a practical reference while you review your website and decide what needs attention next.',
		'',
		`Download it here: ${downloadUrl}`,
		'',
		nextStep ||
			'We will send a few helpful follow-up emails with practical ways to use the checklist.',
		'',
		'Talk soon,',
		'Rocky',
		'Rock Digital',
	].join('\n');

export function ChecklistDownloadEmail({
	checklistName = fallbackChecklistName,
	downloadUrl = fallbackDownloadUrl,
	intro = '',
	nextStep = '',
	logoSrc = defaultLogoSrc,
}) {
	const preview = getChecklistDownloadPreview(checklistName);

	return (
		<Html lang='en'>
			<Head />
			<Preview>{preview}</Preview>
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
						<Text style={styles.eyebrow}>Checklist Download</Text>
						<Heading as='h1' style={styles.heading}>
							Your checklist is ready.
						</Heading>

						<Text style={styles.paragraph}>Hi there,</Text>
						<Text style={styles.paragraph}>
							Thanks for requesting the {checklistName}.
						</Text>
						<Text style={styles.paragraph}>
							{intro ||
								'Use it as a practical reference while you review your website and decide what needs attention next.'}
						</Text>

						<Link href={downloadUrl} style={styles.button}>
							Download the Checklist
						</Link>

						<Text style={styles.nextStep}>
							{nextStep ||
								'We will send a few helpful follow-up emails with practical ways to use the checklist.'}
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

export default ChecklistDownloadEmail;

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
		letterSpacing: '.04em',
	},
	paragraph: {
		margin: '0 0 16px',
		color: '#4a453d',
		fontSize: '16px',
		lineHeight: '27px',
	},
	button: {
		display: 'inline-block',
		margin: '12px 0 22px',
		padding: '13px 20px',
		backgroundColor: 'rgba(206,168,80,1)',
		borderRadius: '999px',
		color: '#fffdf9',
		fontSize: '14px',
		fontWeight: 600,
		lineHeight: '20px',
		textDecoration: 'none',
	},
	nextStep: {
		margin: '0',
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
		margin: '0 0 6px',
		color: '#4a453d',
		fontSize: '16px',
		lineHeight: '24px',
	},
	signer: {
		margin: '0',
		color: '#1d1d1b',
		fontSize: '18px',
		fontWeight: 700,
		lineHeight: '26px',
	},
	signatureMeta: {
		margin: '0',
		color: '#8d6c3a',
		fontSize: '14px',
		lineHeight: '22px',
	},
	footer: {
		padding: '18px 6px 0',
		textAlign: 'center',
	},
	footerLink: {
		color: '#8d6c3a',
		fontSize: '13px',
		textDecoration: 'none',
	},
};
