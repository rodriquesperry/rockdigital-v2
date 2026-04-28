import Link from 'next/link';

import ContactForm from '@/components/contact-forms/ContactForm.component';

import styles from './websiteOptimization.module.css';

export const metadata = {
	title: 'Website Optimization Services',
	description:
		'Rock Digital provides premium website optimization services focused on maintenance, performance, security, updates, search visibility, and long-term growth.',
};

const warningCards = [
	{
		title: 'Lost Trust',
		description:
			'Outdated pages and broken experiences can make visitors question your credibility.',
	},
	{
		title: 'Lower Visibility',
		description:
			'Poor maintenance can weaken search performance and reduce organic traffic.',
	},
	{
		title: 'Missed Revenue',
		description:
			'A neglected website can quietly cost leads, customers, and sales.',
	},
];

const maintenanceCards = [
	{
		icon: 'updates',
		title: 'Keep It Updated',
		description:
			'Plugins, frameworks, content, and technical elements should stay current and reliable.',
	},
	{
		icon: 'secure',
		title: 'Keep It Secure',
		description:
			'Security checks and maintenance help protect your site, your visitors, and your reputation.',
	},
	{
		icon: 'fast',
		title: 'Keep It Fast',
		description:
			'Performance improvements help visitors move through your site without friction.',
	},
	{
		icon: 'converting',
		title: 'Keep It Converting',
		description:
			'Ongoing refinements help turn more visitors into inquiries, leads, and customers.',
	},
];

const processSteps = [
	{
		number: '01',
		title: 'Audit & Diagnose',
		description:
			'We review performance, structure, security, content, and user experience.',
	},
	{
		number: '02',
		title: 'Prioritize Fixes',
		description:
			'We identify what matters most based on impact, risk, and business goals.',
	},
	{
		number: '03',
		title: 'Optimize & Maintain',
		description:
			'We update, refine, secure, and improve the areas that need attention.',
	},
	{
		number: '04',
		title: 'Track & Improve',
		description:
			'We monitor results and continue improving the site as your business grows.',
	},
];

const performanceCards = [
	{
		title: 'Speed Improvements',
		description:
			'Reduce friction with performance-focused updates and cleanup.',
	},
	{
		title: 'Technical SEO Support',
		description:
			'Maintain the structure search engines need to understand your pages.',
	},
	{
		title: 'User Experience Refinement',
		description:
			'Improve layout, clarity, and conversion paths based on how visitors interact.',
	},
	{
		title: 'Stability & Reliability',
		description:
			'Catch issues early before they affect trust, traffic, or revenue.',
	},
];

const trustCards = [
	'Security Checks',
	'Broken Link Review',
	'Content Updates',
	'Performance Cleanup',
];

const impactCards = [
	{
		number: '01',
		title: 'Stronger Visibility',
		description:
			'Maintain the technical foundation needed to support search performance.',
	},
	{
		number: '02',
		title: 'Better Experience',
		description:
			'Keep visitors moving smoothly through your content and calls to action.',
	},
	{
		number: '03',
		title: 'More Confidence',
		description:
			'Show customers your business is active, professional, and ready to serve.',
	},
];

const fitCards = [
	{
		title: 'Maintenance',
		description:
			'For keeping the website current, stable, and protected.',
	},
	{
		title: 'Performance',
		description:
			'For improving speed, structure, and user experience.',
	},
	{
		title: 'Growth Optimization',
		description:
			'For ongoing improvements tied to traffic, conversions, and business goals.',
	},
];

const optimizationServiceOptions = [
	'Website Optimization',
	'Website Maintenance',
	'Performance Improvements',
	'SEO Cleanup',
	'Security & Updates',
	'Not Sure Yet',
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

const iconClassName = (icon) =>
	`${styles.featureIcon} ${styles[`featureIcon${icon.charAt(0).toUpperCase()}${icon.slice(1)}`]}`.trim();

export default function WebsiteOptimization() {
	return (
		<div className={styles.pageShell}>
			<section className={styles.heroSection}>
				<div className={styles.container}>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>Website Optimization</p>
							<h1>Keep Your Website Fast, Secure, and Working for Growth.</h1>
							<p className={styles.heroBody}>
								Your website should not sit untouched after launch. We help keep
								it updated, protected, optimized, and aligned with the way your
								customers search, browse, and decide.
							</p>
							<div className={styles.heroActions}>
								<Link href='/website-audit' className={styles.primaryButton}>
									Request a Website Audit
								</Link>
								<a href='#process' className={styles.secondaryButton}>
									View Optimization Process
								</a>
							</div>
							<p className={styles.heroTrustLine}>
								Ongoing optimization built for speed, security, visibility, and
								conversion.
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
											<div className={styles.dashboardHeaderRow}>
												<div>
													<span className={styles.metricLabel}>Site Health</span>
													<strong>Optimization in motion</strong>
												</div>
												<div className={styles.scoreRing}>
													<span>92</span>
												</div>
											</div>
											<div className={styles.progressTrack}>
												<div className={styles.progressBar} />
											</div>
										</div>
										<div className={styles.monitorGrid}>
											<div className={styles.monitorCard}>
												<span className={styles.monitorLabel}>Speed</span>
												<strong>Fast</strong>
											</div>
											<div className={styles.monitorCard}>
												<span className={styles.monitorLabel}>Security</span>
												<strong>Protected</strong>
											</div>
											<div className={styles.monitorCard}>
												<span className={styles.monitorLabel}>SEO</span>
												<strong>Healthy</strong>
											</div>
											<div className={styles.monitorCard}>
												<span className={styles.monitorLabel}>Updates</span>
												<strong>Current</strong>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.floatingBadgeStrategy}>Speed</div>
							<div className={styles.floatingBadgeDesign}>Security</div>
							<div className={styles.floatingBadgeDevelopment}>SEO</div>
							<div className={styles.floatingBadgeOptimization}>Updates</div>
						</div>
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.lightSection}`}>
				<div className={styles.container}>
					<div className={styles.twoColumnSection}>
						<div className={styles.copyColumn}>
							<SectionIntro
								eyebrow='After Launch Matters'
								title='A Website Left Alone Eventually Starts Working Against You'
								body='One of the worst things a business can do is build a website and leave it untouched. Your website is often the first place customers go to understand what you offer, decide whether they trust you, and determine if they are ready to take the next step. When your site feels outdated, slow, broken, or neglected, it can make your business appear inactive or irrelevant.'
							/>
						</div>

						<div className={styles.statGrid}>
							{warningCards.map((card) => (
								<article key={card.title} className={styles.warningCard}>
									<div className={styles.warningAccent} aria-hidden='true' />
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
						title='Optimization Is More Than Basic Website Maintenance'
						body='Every website requires upkeep, but real optimization goes beyond making sure the site stays online. It means improving performance, protecting the site, updating content, monitoring issues, and refining the user experience so your website continues supporting your business.'
					/>

					<div className={styles.featureGrid}>
						{maintenanceCards.map((card) => (
							<article key={card.title} className={styles.featureCard}>
								<div className={iconClassName(card.icon)} aria-hidden='true' />
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
						eyebrow='Our Optimization Approach'
						title='Monitor. Maintain. Improve.'
						body='We treat optimization as an ongoing system, not a one-time cleanup. The goal is to keep your website healthy, relevant, and aligned with your business goals over time.'
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
						eyebrow='Built for Ongoing Performance'
						title='Your Website Should Get Better Over Time'
						body='A strong website is never truly finished. Search behavior changes, technology changes, customer expectations change, and your business changes. Ongoing optimization helps your website keep up instead of falling behind.'
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
								title='Protect the Trust Your Website Has Already Earned'
								body='When visitors land on your site, they expect it to work. Broken pages, outdated tools, security warnings, and slow load times can immediately damage confidence. Website optimization helps protect the trust you have built by keeping the experience stable, current, and professional.'
							/>
						</div>

						<div className={styles.securityVisual} aria-hidden='true'>
							{trustCards.map((item, index) => (
								<div
									key={item}
									className={`${styles.securityCard} ${styles[`securityCard${index + 1}`]}`.trim()}
								>
									<span className={styles.systemCardLabel}>Trust Layer</span><br />
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
						title='Small Website Issues Can Become Big Business Problems'
						body='Optimization helps prevent silent problems from turning into lost visibility, lower engagement, fewer inquiries, and missed revenue. The goal is simple: keep your website working as an asset instead of allowing it to become a liability.'
					/>

					<div className={styles.resultsGrid}>
						{impactCards.map((card) => (
							<article key={card.number} className={styles.resultCard}>
								<span className={styles.resultNumber}>{card.number}</span>
								<h3>{card.title}</h3>
								<p>{card.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.lightSection}`}>
				<div className={styles.container}>
					<div className={styles.fitIntro}>
						<SectionIntro
							centered
							title='Optimization Built Around What Your Website Actually Needs'
							body='We offer custom website optimization and maintenance solutions because every business has different goals, risks, and growth priorities. Whether your site needs regular updates, performance improvements, technical cleanup, or ongoing strategic support, the plan should fit the website and the business behind it.'
						/>
						<Link href='/website-audit' className={styles.primaryButton}>
							Request a Website Audit
						</Link>
					</div>

					<div className={styles.fitGrid}>
						{fitCards.map((card) => (
							<article key={card.title} className={styles.fitCard}>
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
						<h2>Ready to Keep Your Website Working?</h2>
						<p>
							Fill out your information below and check your email for follow-up
							instructions. We&apos;ll review your needs and help you identify the
							right optimization path for your website.
						</p>
					</div>

					<div className={styles.formCard}>
						<ContactForm
							serviceOptions={optimizationServiceOptions}
							servicePlaceholder='Choose your optimization need'
						/>
					</div>

					<p className={styles.formTrust}>
						Built for businesses serious about keeping their website secure,
						current, and growth-ready.
					</p>
				</div>
			</section>
		</div>
	);
}
