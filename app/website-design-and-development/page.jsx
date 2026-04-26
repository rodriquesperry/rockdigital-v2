import Link from 'next/link';

import ContactForm from '@/components/contact-forms/ContactForm.component';

import styles from './designAndDevelopment.module.css';

export const metadata = {
	title: 'Website Design and Development Services',
	description:
		'Rock Digital creates premium website design and development systems focused on clarity, performance, conversion, and long-term business growth.',
};

const firstImpressionCards = [
	{
		title: 'Design Builds Trust',
		description:
			'A refined experience helps visitors feel confident before they contact you.',
	},
	{
		title: 'Clarity Drives Action',
		description:
			'Clear messaging and structure reduce confusion and guide decisions.',
	},
	{
		title: 'Performance Supports Growth',
		description:
			'Fast, mobile-ready pages improve user experience and search visibility.',
	},
];

const strategyCards = [
	{
		icon: 'guide',
		title: 'Guide Visitors',
		description:
			'Clear structure helps people understand where they are and what to do next.',
	},
	{
		icon: 'value',
		title: 'Communicate Value',
		description:
			'Strong messaging explains why your business is the right choice.',
	},
	{
		icon: 'action',
		title: 'Encourage Action',
		description:
			'Conversion-focused layouts guide users toward meaningful next steps.',
	},
	{
		icon: 'performance',
		title: 'Perform Seamlessly',
		description:
			'Responsive, fast-loading pages support every device and browsing experience.',
	},
];

const processSteps = [
	{
		number: '01',
		title: 'Discovery & Strategy',
		description:
			'We identify your goals, audience, behavior, and competitive positioning.',
	},
	{
		number: '02',
		title: 'Design & User Experience',
		description:
			'We design clear, modern interfaces that are easy to navigate and built to convert.',
	},
	{
		number: '03',
		title: 'Development & Performance',
		description:
			'We build clean, scalable pages with speed, structure, and reliability in mind.',
	},
	{
		number: '04',
		title: 'Launch & Optimization',
		description:
			'We do not just launch. We monitor, refine, and position the site for continued growth.',
	},
];

const performanceCards = [
	{
		title: 'Speed Optimized',
		description:
			'Built with clean structure and performance-conscious design decisions.',
	},
	{
		title: 'SEO-Ready',
		description:
			'Structured to support search visibility from the foundation up.',
	},
	{
		title: 'Mobile-First',
		description:
			'Designed for the way people browse, compare, and decide today.',
	},
	{
		title: 'Secure & Scalable',
		description:
			'Built with long-term stability, growth, and reliability in mind.',
	},
];

const systemCards = [
	'Clear Strategy',
	'Better User Flow',
	'Growth Support',
];

const resultCards = [
	{
		number: '01',
		title: 'Clearer Messaging',
		description:
			'Your offer becomes easier to understand, easier to trust, and easier to act on.',
	},
	{
		number: '02',
		title: 'Stronger Trust',
		description:
			'A polished digital presence creates confidence before the first conversation begins.',
	},
	{
		number: '03',
		title: 'Better Conversion Path',
		description:
			'Visitors move through your site with less friction and more intent.',
	},
];

function SectionIntro({ eyebrow, title, body, centered = false }) {
	return (
		<div className={`${styles.sectionIntro} ${centered ? styles.centeredIntro : ''}`.trim()}>
			{eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
			<h2>{title}</h2>
			{body ? <p>{body}</p> : null}
		</div>
	);
}

export default function DesignAndDevelopment() {
	return (
		<div className={styles.pageShell}>
			<section className={styles.heroSection}>
				<div className={styles.container}>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>Website Design &amp; Development</p>
							<h1>Built to turn attention into trust, action, and growth.</h1>
							<p className={styles.heroBody}>
								Your website should do more than look good. It should clarify your
								message, guide visitors, support search visibility, and turn
								attention into measurable business growth.
							</p>
							<div className={styles.heroActions}>
								<Link href='/website-audit' className={styles.primaryButton}>
									Request a Website Audit
								</Link>
								<a href='#process' className={styles.secondaryButton}>
									View Our Process
								</a>
							</div>
							<p className={styles.heroTrustLine}>
								Strategy-first websites built for performance, clarity, and growth.
							</p>
						</div>

						<div className={styles.heroVisual} aria-hidden='true'>
							<div className={styles.dashboardShell}>
								<div className={styles.dashboardChrome}>
									<span />
									<span />
									<span />
								</div>
								<div className={styles.dashboardBody}>
									<div className={styles.dashboardSidebar}>
										<div className={styles.sidebarLine} />
										<div className={styles.sidebarLine} />
										<div className={styles.sidebarLineShort} />
									</div>
									<div className={styles.dashboardMain}>
										<div className={styles.heroMetricCard}>
											<span className={styles.metricLabel}>Growth System</span>
											<strong>Clarity-first structure</strong>
											<div className={styles.metricBars}>
												<span />
												<span />
												<span />
											</div>
										</div>
										<div className={styles.heroPanels}>
											<div className={styles.panelCard}>
												<div className={styles.panelLine} />
												<div className={styles.panelLineWide} />
												<div className={styles.panelAccent} />
											</div>
											<div className={styles.panelCard}>
												<div className={styles.panelLine} />
												<div className={styles.panelLineWide} />
												<div className={styles.panelAccentMuted} />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.floatingBadgeStrategy}>Strategy</div>
							<div className={styles.floatingBadgeDesign}>Design</div>
							<div className={styles.floatingBadgeDevelopment}>Development</div>
							<div className={styles.floatingBadgeOptimization}>Optimization</div>
						</div>
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.lightSection}`}>
				<div className={styles.container}>
					<div className={styles.twoColumnSection}>
						<div className={styles.copyColumn}>
							<SectionIntro
								eyebrow='First Impressions Matter'
								title='Your Website Is Your First Conversion Opportunity'
								body='Most customers meet your business through your website before they ever speak to you. That first interaction shapes trust, credibility, and interest. A strong website makes your value clear, helps people understand what you offer, and gives them a reason to take the next step.'
							/>
						</div>

						<div className={styles.statGrid}>
							{firstImpressionCards.map((card) => (
								<article key={card.title} className={styles.statCard}>
									<h3>{card.title}</h3>
									<p>{card.description}</p>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.whiteSection}`}>
				<div className={styles.container}>
					<SectionIntro
						centered
						title='Design Without Strategy Does not Perform'
						body='A visually appealing site is only part of the equation. True performance comes from how design, development, messaging, and user flow work together.'
					/>

					<div className={styles.featureGrid}>
						{strategyCards.map((card) => (
							<article key={card.title} className={styles.featureCard}>
								<div
									className={`${styles.featureIcon} ${styles[`featureIcon${card.icon.charAt(0).toUpperCase()}${card.icon.slice(1)}`]}`.trim()}
									aria-hidden='true'
								/>
								<h3>{card.title}</h3>
								<p>{card.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id='process' className={`${styles.section} ${styles.processSection}`}>
				<div className={styles.container}>
					<SectionIntro
						eyebrow='Our Approach'
						title='Strategy First, Always'
						body='Every project begins with understanding your business, your audience, and what success actually looks like. From there, we move through a refined process built around outcomes.'
					/>

					<div className={styles.timeline}>
						<div className={styles.timelineLine} aria-hidden='true' />
						{processSteps.map((step) => (
							<article key={step.number} className={styles.timelineCard}>
								<span className={styles.timelineNumber}>{step.number}</span>
								<div className={styles.timelineDot} aria-hidden='true' />
								<h3>{step.title}</h3>
								<p>{step.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.lightSection}`}>
				<div className={styles.container}>
					<SectionIntro
						centered
						eyebrow='Built for Performance'
						title='Not Just Presence. Performance.'
						body='Most websites fail because they are treated like static brochures. Ours are built to perform, supporting speed, search visibility, mobile usability, and long-term scalability.'
					/>

					<div className={styles.performanceGrid}>
						{performanceCards.map((card) => (
							<article key={card.title} className={styles.performanceCard}>
								<div className={styles.performanceAccent} aria-hidden='true' />
								<h3>{card.title}</h3>
								<p>{card.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.whiteSection}`}>
				<div className={styles.container}>
					<div className={styles.twoColumnSection}>
						<div className={styles.copyColumn}>
							<SectionIntro
								title='A System That Works Without Guesswork'
								body='Trying to manage design trends, development standards, user expectations, and performance requirements on your own can quickly become overwhelming. We remove that burden by building a website with a clear strategy, refined structure, and long-term growth in mind.'
							/>
						</div>

						<div className={styles.systemVisual} aria-hidden='true'>
							{systemCards.map((item, index) => (
								<div
									key={item}
									className={`${styles.systemCard} ${styles[`systemCard${index + 1}`]}`.trim()}
								>
									<span className={styles.systemCardLabel}>System Layer</span>
									<strong>{item}</strong>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.resultsSection}`}>
				<div className={styles.container}>
					<SectionIntro
						centered
						title='A Process That Delivers Results'
						body='Our process is straightforward, collaborative, and built around outcomes. It starts with a conversation and ends with a custom-built solution that supports your business goals and your customers’ needs.'
					/>

					<div className={styles.resultsGrid}>
						{resultCards.map((card) => (
							<article key={card.number} className={styles.resultCard}>
								<span className={styles.resultNumber}>{card.number}</span>
								<h3>{card.title}</h3>
								<p>{card.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.formSection}`}>
				<div className={styles.container}>
					<div className={styles.formIntro}>
						<h2>Ready to Build Something That Actually Works?</h2>
						<p>
							If you are ready for a website that does more than just look good,
							one that actively supports your growth, let&apos;s get started.
						</p>
					</div>

					<div className={styles.formCard}>
						<ContactForm />
					</div>

					<p className={styles.formTrust}>
						Built for businesses serious about clarity, performance, and growth.
					</p>
				</div>
			</section>
		</div>
	);
}
