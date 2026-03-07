import React from 'react';

import AuditForm from '@/components/contact-forms/AuditForm.component';
import styles from './websiteAudit.module.css';

export const metadata = {
	title: 'Website Audit',
	description: 'Request a website audit from Rock Digital',
};

const WebsiteAuditPage = () => {
	return (
		<div className={styles.audit_container}>
			<div className={styles.audit_header}>
				<h1>Get a Website Audit</h1>
				<p>
					Share your website details and we&apos;ll review your current
					performance opportunities.
				</p>
			</div>
			<AuditForm />
		</div>
	);
};

export default WebsiteAuditPage;
