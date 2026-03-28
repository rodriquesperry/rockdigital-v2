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
const fallbackBookingLink = 'https://cal.com/rodriques-perry/website-audit';

export const auditRequestReceivedSubject =
	'We’ve received your website audit request';

export const auditRequestReceivedPreview =
	'We’ve received your request and will follow up within the next 24–48 hours.';

export const getAuditRequestReceivedText = ({
	firstName = fallbackFirstName,
	bookingLink = '',
} = {}) => {
	const effectiveBookingLink = bookingLink || fallbackBookingLink;

	return [
		`Hi ${firstName},`,
		'',
		'Thank you for reaching out.',
		'',
		'We’ve received your request for a website audit. This isn’t a generic checklist or an automated review. At Rock Digital, we take a strategic look at how your site is performing, where opportunities may be slipping through, and what would create the greatest impact moving forward.',
		'',
		'Our process is designed to surface meaningful insights, not just observations, so you have a clearer sense of what’s working, what’s underperforming, and where the strongest opportunities for improvement exist.',
		'',
		'You’ll hear from us within the next 24–48 hours with next steps.',
		'',
		`If you’d prefer to move faster, you can book directly here: ${effectiveBookingLink}`,
		'',
		'Talk soon,',
		'Rocky',
		'Rock Digital',
	].join('\n');
};

export function AuditRequestReceivedEmail({
	firstName = fallbackFirstName,
	bookingLink = '',
	logoSrc = defaultLogoSrc,
}) {
	const effectiveBookingLink = bookingLink || fallbackBookingLink;

	return (
		<Html lang='en'>
			<Head />
			<Preview>{auditRequestReceivedPreview}</Preview>
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
						<Text style={styles.eyebrow}>Website Audit Request</Text>
						<Heading as='h1' style={styles.heading}>
							You&apos;re in.
						</Heading>

						<Text style={styles.intro}>Hi {firstName},</Text>
						<Text style={styles.paragraph}>
							We&apos;ve received your request for a website audit. This
							isn&apos;t a generic checklist or an automated review. At Rock
							Digital, we take a strategic look at how your site is performing,
							where opportunities may be slipping through, and what would create
							the greatest impact moving forward.
						</Text>
						<Text style={styles.paragraph}>
							Our process is designed to surface meaningful insights, not just
							observations, so you have a clearer sense of what&apos;s working,
							what&apos;s underperforming, and where the strongest opportunities
							for improvement exist.
						</Text>

						<Section style={styles.infoBlock}>
							<Text style={styles.infoLead}>
								You&apos;ll hear from us within the next 24–48 hours with next
								steps.
							</Text>
							<Text style={styles.paragraph}>
								If you&apos;d prefer to move faster, you can book directly
								here:
							</Text>
							<Link href={effectiveBookingLink} style={styles.button}>
								Schedule a Call
							</Link>
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

export default AuditRequestReceivedEmail;

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
	infoBlock: {
		marginTop: '28px',
		paddingTop: '24px',
		borderTop: '1px solid #e8dece',
	},
	infoLead: {
		margin: '0 0 14px',
		color: '#1d1d1b',
		fontSize: '24px',
		fontWeight: 400,
		lineHeight: '31px',
		letterSpacing: '-0.01em',
	},
	button: {
		display: 'inline-block',
		marginTop: '4px',
		padding: '13px 20px',
		backgroundColor: 'rgba(206,168,80,1)',
		borderRadius: '999px',
		color: '#fffdf9',
		fontSize: '14px',
		fontWeight: 600,
		lineHeight: '20px',
		textDecoration: 'none',
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
