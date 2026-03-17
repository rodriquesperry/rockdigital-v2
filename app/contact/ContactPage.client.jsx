'use client';

import { useState } from 'react';

import ContactForm from '@/components/contact-forms/ContactForm.component';

import styles from './contact.module.css';

const faqs = [
	{
		q: 'How long does a project take?',
		a: 'Most projects take 4-8 weeks depending on scope.',
	},
	{
		q: 'What does pricing look like?',
		a: 'Pricing is tailored to your needs and goals.',
	},
	{
		q: 'Do you handle development?',
		a: 'Yes, we handle both design and development.',
	},
	{
		q: 'Will my site be optimized?',
		a: 'Yes, performance and SEO are built in.',
	},
];

export default function ContactPageClient() {
	const [openFAQ, setOpenFAQ] = useState([0]);

	const toggleFAQ = (index) => {
		setOpenFAQ((previous) =>
			previous.includes(index)
				? previous.filter((item) => item !== index)
				: [...previous, index],
		);
	};

	return (
		<div>
			<div className={styles.contact_container}>
				<div className={styles.app}>
					<section className={styles.hero}>
						<div className={styles.containerGrid}>
							<div>
								<p className={styles.eyebrow}>Web Design Agency</p>
								<h1 className={styles.h1}>
									Hiring a Web Design Agency Shouldn’t Feel Like a Risk
								</h1>
								<p className={styles.body}>
									Choosing the right web design agency can feel overwhelming.
									You’ve likely seen websites that look good but don’t convert,
									agencies that overpromise and underdeliver, or projects that
									drag on with no clear direction. The reality is—your website
									isn’t just a design project. It’s a business asset that should
									generate leads, build trust, and support your growth. At Rock
									Digital, we approach web design differently. Every website we
									build is strategic, performance-driven, and tailored to your
									business goals.{' '}
								</p>
								<div className={styles.ctaRow}>
									<button className={styles.primaryBtn}>
										Start Your Project
									</button>
									<a href='#' className={styles.link}>
										See Our Work →
									</a>
								</div>
							</div>
							<div className={styles.heroVisual} />
						</div>
					</section>

					<section className={styles.trust}>
						<div className={styles.centerBlock}>
							<h2>A Web Design Agency Focused on Results, Not Just Design</h2>
							<p>
								We design and build websites aligned with your business goals.
							</p>
						</div>
						<div className={styles.grid3}>
							{[
								'Conversion-Focused',
								'Built for Growth',
								'Performance-Driven',
							].map((t, i) => (
								<div key={i} className={styles.card}>
									<h3>{t}</h3>
									<p>Designed to turn visitors into customers</p>
								</div>
							))}
						</div>
					</section>

					<section className={styles.process}>
						<h2 className={styles.center}>What Happens After You Reach Out</h2>
						<div className={styles.grid3}>
							{['Discovery', 'Strategy', 'Direction'].map((step, i) => (
								<div key={i} className={styles.cardOutline}>
									<h3>
										Step {i + 1} — {step}
									</h3>
									<p>We guide you with clarity</p>
								</div>
							))}
						</div>
					</section>

					<section className={styles.qualify}>
						<div className={styles.containerGrid}>
							<div>
								<h2>Who We Work Best With</h2>
								<p>We partner with businesses serious about growth.</p>
							</div>
							<div className={styles.highlightBox}>
								<ul>
									<li>Growth-focused businesses</li>
									<li>Brands ready to elevate</li>
									<li>Companies investing long-term</li>
								</ul>
								<strong>
									Not looking for the cheapest option—looking for the right one.
								</strong>
							</div>
						</div>
					</section>

					<section className={styles.formSection}>
						<h2>Let’s Build Something That Works</h2>
						<ContactForm />
					</section>

					<section className={styles.faq}>
						<h2>Frequently Asked Questions</h2>
						{faqs.map((f, i) => (
							<div key={i} className={styles.faqItem}>
								<button onClick={() => toggleFAQ(i)}>{f.q}</button>
								{openFAQ.includes(i) && <p>{f.a}</p>}
							</div>
						))}
					</section>

					<section className={styles.finalCta}>
						<h2>Ready to Work With a Web Design Agency That Delivers?</h2>
						<button className={styles.primaryBtn}>Start Your Project</button>
					</section>
				</div>
			</div>
		</div>
	);
}
