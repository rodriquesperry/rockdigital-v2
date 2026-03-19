'use client';

import { useState } from 'react';
import HeroVisual from '@/assets/heroVisual.png';
import Image from 'next/image';

import styles from './page.module.css';

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

const LandingPage1 = () => {
	const [openFAQ, setOpenFAQ] = useState([0]);

	const toggleFAQ = (index) => {
		setOpenFAQ((previous) =>
			previous.includes(index)
				? previous.filter((item) => item !== index)
				: [...previous, index],
		);
	};

	return (
		<div className={styles.app}>
			<section className={styles.hero}>
				<div className={styles.containerGrid}>
					<div>
						<h1 className={styles.h1}>
							Hiring a Web Design Agency Shouldn’t Feel Like a Risk
						</h1>
						<p className={styles.body}>
							Choosing the right web design agency can feel overwhelming. You
							need a website that not only looks good, but actually helps your
							business grow. At Rock Digital, we design websites that are built
							to perform, convert visitors, and support long-term success.{' '}
						</p>
						<div className={styles.ctaRow}>
							<button className={styles.primaryBtn}>
								Request a Website Audit
							</button>
						</div>
					</div>
					<div className={styles.heroVisual}>
						<Image
							src={HeroVisual}
							alt='Hero Visual'
							width={500}
							height={300}
						/>
					</div>
				</div>
			</section>

			<section className={styles.trust}>
				<div className={styles.centerBlock}>
					<h2>A Web Design Agency Focused on Results, Not Just Design</h2>
					<p>
						We don’t believe in generic templates or one-size-fits-all
						solutions.
						<br /> As a web design agency, our focus is on creating websites
						that:
						<ul className={styles.ul}>
							<li>Turn more of your website visitors into paying customers</li>
							<li>Create a clear and professional first impression</li>
							<li>Build trust with your audience from the first visit</li>
							<li>Support your business growth with a scalable website</li>
						</ul>
						Whether you need a brand-new website or a complete redesign, our
						process is built to deliver clarity, efficiency, and measurable
						results. We design and build websites aligned with your business
						goals.
					</p>
				</div>
				{/* <div className={styles.grid3}>
							{[
								'Conversion-Focused',
								'Built for Growth',
								'Performance-Driven',
							].map((t, i) => (
								<div key={i} className={styles.card}>
									<span>{t}</span>
									<p>Designed to turn visitors into customers</p>
								</div>
							))}
						</div> */}
			</section>

			<section className={styles.process}>
				<h2 className={styles.center}>What Happens After You Reach Out?</h2>
				<div className={styles.grid3}>
					{['Discovery', 'Strategy', 'Direction'].map((step, i) => (
						<div key={i} className={styles.cardOutline}>
							<h3>
								Step {i + 1} — {step}
							</h3>
							{/* <p>We guide you with clarity</p> */}
						</div>
					))}
				</div>
				<p className={styles.processTextBlock}>
					We keep things simple, intentional, and focused on value. When you
					contact us:
					<ul>
						<li>We learn about your business, audience, and goals</li>
						<li>We analyze your current online presence</li>
						<li>We identify opportunities to improve your website</li>
						<li>We recommend a clear path forward—no fluff, no pressure</li>
					</ul>
					You won’t get a generic pitch. You’ll get insight into what will
					actually move your business forward.
				</p>
			</section>

			<section className={styles.qualify}>
				<div className={styles.containerGrid}>
					<div>
						<h2>Who We Work Best With</h2>
						<p>We partner with businesses serious about growth.</p>
					</div>
					<div className={styles.highlightBox}>
						<p>Our clients are typically:</p>
						<ul>
							<li>Growth-focused businesses</li>
							<li>Brands ready to elevate</li>
							<li>Companies investing long-term</li>
						</ul>
						<p>
							If you’re simply looking for the cheapest option, we may not be
							the right fit—and that’s okay.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.formSection}>
				<h2>Let’s Build Something That Works</h2>
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
	);
};

export default LandingPage1;
