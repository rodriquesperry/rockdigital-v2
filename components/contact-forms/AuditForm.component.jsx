'use client';

import { useState } from 'react';

import styles from './auditForm.module.css';

const AuditForm = () => {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className={styles.form_container}>
			<p className={styles.form_note}>
				If you do not know your unique visitors or conversion rate, enter
				&quot;Unknown&quot;.
			</p>
			<form id={styles['audit_form']} onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					id='name'
					name='name'
					type='text'
					className={styles.form_field}
					placeholder='Enter your name'
				/>

				<label htmlFor='business_name'>Business Name</label>
				<input
					id='business_name'
					name='business_name'
					type='text'
					className={styles.form_field}
					placeholder='Enter your business name'
				/>

				<label htmlFor='website_url'>
					Website URL <span className={styles.required}>*</span>
				</label>
				<input
					id='website_url'
					name='website_url'
					type='url'
					className={styles.form_field}
					placeholder='https://yourwebsite.com'
					required
				/>

				<label htmlFor='unique_visitors'># of Unique Visitors / Month</label>
				<input
					id='unique_visitors'
					name='unique_visitors'
					type='text'
					className={styles.form_field}
					placeholder='e.g. 1200 or Unknown'
				/>

				<label htmlFor='conversion_rate'>Conversion Rate</label>
				<input
					id='conversion_rate'
					name='conversion_rate'
					type='text'
					className={styles.form_field}
					placeholder='e.g. 2.5% or Unknown'
				/>

        <label htmlFor='email'>Email Address</label>
				<input
					id='email'
					name='email'
					type='email'
					className={styles.form_field}
					placeholder='Enter your email address'
				/>

				<div className={styles.audit_form_button_container}>
					<button type='submit' className='btn btn-warning'>
						Submit Audit Request
					</button>
				</div>

				{submitted && (
					<p className={styles.success_message}>
						Thanks. Your website audit request has been submitted.
					</p>
				)}
			</form>
		</div>
	);
};

export default AuditForm;
