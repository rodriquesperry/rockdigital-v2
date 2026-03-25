import { Img } from '@react-email/img';

const baseUrl = 'https://rockdigital.agency';
const fallbackFirstName = 'there';
const defaultLogoSrc = '/static/rock-digital-logo.png';


export const auditRequestReceivedSubject =
	'We’ve received your website audit request';

export const auditRequestReceivedPreview =
	'We’ve received your request and will follow up within the next 24–48 hours.';

export const getAuditRequestReceivedText = ({
	firstName = fallbackFirstName,
	bookingLink = '',
} = {}) =>
	[
		`Hi ${firstName},`,
		'',
		'Thank you for reaching out.',
		'',
		'We’ve received your request for a website audit. This isn’t a generic checklist or an automated review. At Rock Digital, we take a strategic look at how your site is performing, where opportunities may be slipping through, and what would create the greatest impact moving forward.',
		'',
		'Our process is designed to surface meaningful insights, not just observations, so you have a clearer sense of what’s working, what’s underperforming, and where the strongest opportunities for improvement exist.',
		'',
		'You’ll hear from us within the next 24–48 hours with next steps.',
		bookingLink ? '' : null,
		bookingLink ? `If you’d prefer to move faster, you can book directly here: ${bookingLink}` : null,
		'',
		'Rock Digital',
	]
		.filter(Boolean)
		.join('\n');

export function AuditRequestReceivedEmail({
	firstName = fallbackFirstName,
	bookingLink = '',
	logoSrc = defaultLogoSrc,
}) {
	return (
		<html lang='en'>
			<body style={styles.body}>
				<div style={styles.preview}>{auditRequestReceivedPreview}</div>
				<table
					role='presentation'
					cellPadding='0'
					cellSpacing='0'
					width='100%'
					style={styles.wrapper}
				>
					<tbody>
						<tr>
							<td align='center'>
								<table
									role='presentation'
									cellPadding='0'
									cellSpacing='0'
									width='100%'
									style={styles.container}
								>
									<tbody>
										<tr>
											<td style={styles.brandRow}>
												<a href={baseUrl} style={styles.brandLink}>
													<Img
														src={logoSrc}
														alt='Rock Digital'
														width='64'
														style={styles.logo}
													/>
												</a>
											</td>
										</tr>
										<tr>
											<td style={styles.card}>
												<p style={styles.eyebrow}>Website Audit Request</p>
												<h1 style={styles.heading}>You&apos;re in.</h1>
												<p style={styles.paragraph}>Hi {firstName},</p>
												<p style={styles.paragraph}>
													Thank you for reaching out.
												</p>
												<p style={styles.paragraph}>
													We&apos;ve received your request for a website audit.
													This isn&apos;t a generic checklist or an automated
													review. At Rock Digital, we take a strategic look at
													how your site is performing, where opportunities may
													be slipping through, and what would create the
													greatest impact moving forward.
												</p>
												<p style={styles.paragraph}>
													Our process is designed to surface meaningful
													insights, not just observations, so you have a
													clearer sense of what&apos;s working, what&apos;s
													underperforming, and where the strongest
													opportunities for improvement exist.
												</p>
												<p style={styles.paragraph}>
													You&apos;ll hear from us within the next 24–48 hours
													with next steps.
												</p>
												{bookingLink ? (
													<>
														<p style={styles.paragraph}>
															If you&apos;d prefer to move faster, you can book
															directly here:
														</p>
														<p style={styles.buttonRow}>
															<a href={bookingLink} style={styles.button}>
																Book a Call
															</a>
														</p>
													</>
												) : null}
												<p style={styles.signature}>
													Rock Digital
												</p>
											</td>
										</tr>
										<tr>
											<td style={styles.footer}>
												<a href={baseUrl} style={styles.footerLink}>
													rockdigital.agency
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</body>
		</html>
	);
}

export default AuditRequestReceivedEmail;

const styles = {
	body: {
		margin: 0,
		padding: 0,
		backgroundColor: '#f4efe7',
		color: '#1d1d1b',
		fontFamily:
			'Georgia, Cambria, "Times New Roman", Times, serif',
	},
	preview: {
		display: 'none',
		overflow: 'hidden',
		lineHeight: '1px',
		opacity: 0,
		maxHeight: 0,
		maxWidth: 0,
	},
	wrapper: {
		width: '100%',
		backgroundColor: '#f4efe7',
		padding: '32px 16px',
	},
	container: {
		maxWidth: '640px',
		margin: '0 auto',
	},
	brandRow: {
		padding: '0 0 18px',
	},
	brandLink: {
		display: 'inline-block',
		textDecoration: 'none',
	},
	logo: {
		display: 'block',
		width: '64px',
		maxWidth: '100%',
		height: 'auto',
		border: 0,
	},
	card: {
		backgroundColor: '#fffdf9',
		border: '1px solid #e6dbca',
		borderRadius: '20px',
		padding: '40px 36px',
		boxShadow: '0 10px 30px rgba(77, 55, 23, 0.08)',
	},
	eyebrow: {
		margin: '0 0 12px',
		color: '#9c7a45',
		fontSize: '12px',
		fontWeight: 700,
		letterSpacing: '0.14em',
		textTransform: 'uppercase',
	},
	heading: {
		margin: '0 0 24px',
		color: '#1d1d1b',
		fontSize: '34px',
		fontWeight: 600,
		lineHeight: 1.1,
	},
	paragraph: {
		margin: '0 0 18px',
		color: '#35312b',
		fontSize: '17px',
		lineHeight: 1.7,
	},
	buttonRow: {
		margin: '8px 0 28px',
	},
	button: {
		display: 'inline-block',
		padding: '14px 22px',
		backgroundColor: '#c48d2b',
		borderRadius: '999px',
		color: '#fffdf9',
		fontSize: '15px',
		fontWeight: 700,
		textDecoration: 'none',
	},
	signature: {
		margin: '28px 0 0',
		color: '#1d1d1b',
		fontSize: '17px',
		fontWeight: 600,
		lineHeight: 1.6,
	},
	footer: {
		padding: '16px 4px 0',
		color: '#7d7468',
		fontSize: '13px',
		lineHeight: 1.5,
	},
	footerLink: {
		color: '#7d7468',
		textDecoration: 'none',
	},
};
