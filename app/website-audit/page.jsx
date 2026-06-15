import React from 'react';

import AuditForm from '@/components/contact-forms/AuditForm.component';
import styles from './websiteAudit.module.css';

export const metadata = {
	title: 'Website Audit',
	description: 'Request a website audit from Rock Digital',
};

const WebsiteAuditPage = () => {
	return (
		<main className={styles.audit_page}>
			<section className={styles.audit_qualification}>
				<div className={styles.audit_intro}>
					<p className={styles.eyebrow}>Website Audit</p>
					<h1>Find Out What Your Website Is Really Costing You</h1>
					<a
						href='#website-audit-form'
						className={styles.more_arrow}
						aria-label='Continue to the website audit request form'
					>
						<span aria-hidden='true'>&darr;</span>
					</a>
					<div className={styles.intro_copy}>
						<p>A better website starts with knowing what&apos;s getting in the way.</p>
						<p>
							We&apos;ll review your current site through the lens of user
							experience, conversion flow, performance signals, and the details
							that help visitors decide whether to take the next step.
						</p>
						<p>
							This is built for businesses that already have a website, but know
							it could be doing more. If your traffic is not turning into leads,
							your message feels unclear, or your site no longer matches the
							quality of your work, an audit gives you a clearer path forward.
						</p>
						<p>
							Send over the details you have. If you do not know your monthly
							visitors or conversion rate, &quot;Unknown&quot; is perfectly fine.
						</p>
					</div>
				</div>
				<div className={styles.form_column}>
					<div className={styles.audit_form_card} id='website-audit-form'>
						<AuditForm />
					</div>
				</div>
			</section>
		</main>
	);
};

export default WebsiteAuditPage;
