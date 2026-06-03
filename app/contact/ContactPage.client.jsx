'use client';

import ContactForm from '@/components/contact-forms/ContactForm.component';

import styles from './contact.module.css';

export default function ContactPageClient() {
	return (
		<main className={styles.contact_page}>
			<section className={styles.contact_qualification}>
				<div className={styles.contact_intro}>
					<p className={styles.eyebrow}>Start the Conversation</p>
					<h1>Let&apos;s See If We&apos;re a Good Fit</h1>
					<a
						href='#contact-form-details'
						className={styles.more_arrow}
						aria-label='Continue to the rest of the contact form'
					>
						<span aria-hidden='true'>&darr;</span>
					</a>
					<div className={styles.intro_copy}>
						<p>Most businesses don&apos;t need another website.</p>
						<p>
							They need a better way to attract qualified prospects, convert
							visitors into customers, and create predictable growth online.
						</p>
						<p>
							At Rock Digital, we partner with businesses that understand their
							website and digital marketing are investments, not expenses. Our
							clients are typically looking to improve lead generation,
							strengthen their online presence, and build systems that support
							long-term growth.
						</p>
						<p>
							If you&apos;re looking for the cheapest option available, we&apos;re
							probably not the right fit. But if you&apos;re serious about
							growing your business and want a strategic partner focused on
							measurable results, we&apos;d love to learn more about your goals.
						</p>
						<p>
							Complete the form and tell us about your project. If it looks like
							there&apos;s a strong fit, we&apos;ll reach out to discuss the next
							steps.
						</p>
					</div>
				</div>
				<div className={styles.form_column}>
					<div className={styles.ready_form_card} id='contact-qualification-form'>
						<ContactForm showQualificationFields submitLabel='Submit Project Details' />
					</div>
				</div>
			</section>
		</main>
	);
}
