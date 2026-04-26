import Link from 'next/link';

import ContactForm from '@/components/contact-forms/ContactForm.component';

import styles from './websiteImprovement.module.css';

export const metadata = {
	title: 'Digital Growth Strategy Services',
	description:
		'Rock Digital builds premium digital growth strategies that connect visibility, traffic, trust, conversion, and measurable business growth.',
};

const impactCards = [
	{
		title: 'Low Visibility',
		description:
			'If your business is not showing up where customers search, competitors get the opportunity first.',
	},
	{
		title: 'Wasted Traffic',
		description:
			'Traffic without strategy can bring visitors who never become leads or customers.',
	},
	{
		title: 'Unclear Direction',
		description:
			'Disconnected marketing efforts make it harder to know what is working and what needs improvement.',
	},
];

const foundationCards = [
	{
		icon: 'audience',
		title: 'Attract the Right Audience',
		description:
			'Reach people who are actively searching for what your business offers.',
	},
	{
		icon: 'trust',
		title: 'Build Trust Before Contact',
		description:
			'Use helpful content, strong positioning, and clear messaging to build confidence.',
	},
	{
		icon: 'leads',
		title: 'Convert Traffic Into Leads',
		description:
			'Create focused paths that guide visitors toward inquiries, calls, and sales.',
	},
	{
		icon: 'measure',
		title: 'Measure What Matters',
		description:
			'Track the signals that show whether your strategy is creating real business impact.',
	},
];

const processSteps = [
	{
		number: '01',
		title: 'Research & Positioning',
		description:
			'We identify your audience, competitors, opportunities, and strongest market position.',
	},
	{
		number: '02',
		title: 'Traffic Strategy',
		description:
			'We map the right channels, including SEO, content, local search, paid campaigns, and referral paths.',
	},
	{
		number: '03',
		title: 'Conversion Planning',
		description:
			'We align messaging, landing pages, calls to action, and user flow around measurable outcomes.',
	},
	{
		number: '04',
		title: 'Optimization & Growth',
		description:
			'We track performance, refine campaigns, and improve the strategy as data and goals evolve.',
	},
];

const channelCards = [
	{
		title: 'Local SEO',
		description:
			'Improve visibility for searches in your service areas and help nearby customers find you.',
	},
	{
		title: 'Search Engine Optimization',
		description:
			'Strengthen your website structure, content, and authority for long-term organic growth.',
	},
	{
		title: 'Pay-Per-Click Marketing',
		description:
			'Use targeted campaigns to reach high-intent audiences faster and support specific offers.',
	},
	{
		title: 'Content Marketing',
		description:
			'Create useful, search-focused content that builds trust and answers buyer questions.',
	},
	{
		title: 'Landing Page Strategy',
		description:
			'Match traffic sources with focused pages designed to convert.',
	},
	{
		title: 'Analytics & Reporting',
		description:
			'Track performance so decisions are based on real signals instead of guesswork.',
	},
];

const impactResults = [
	{
		number: '01',
		title: 'Stronger Visibility',
		description:
			'Show up more consistently where your ideal customers are searching.',
	},
	{
		number: '02',
		title: 'Better Qualified Traffic',
		description:
			'Attract visitors who are more likely to need, trust, and choose your business.',
	},
	{
		number: '03',
		title: 'More Measurable Growth',
		description:
			'Understand which efforts are creating leads, inquiries, and revenue opportunities.',
	},
];

const fitCards = [
	{
		title: 'Local Growth',
		description:
			'For businesses that need stronger visibility in specific service areas.',
	},
	{
		title: 'Lead Generation',
		description:
			'For businesses that need more qualified inquiries, calls, and booked opportunities.',
	},
	{
		title: 'Long-Term Authority',
		description:
			'For businesses that want to build sustainable visibility through SEO and content.',
	},
];

const funnelCards = ['Visitor', 'Trust', 'Offer', 'Action'];

const digitalGrowthServiceOptions = [
	'Digital Growth Strategy',
	'Local SEO',
	'Search Engine Optimization',
	'Pay-Per-Click Marketing',
	'Content Marketing',
	'Landing Page Strategy',
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

export default function WebsiteImprovement() {
	return (
		<div className={styles.pageShell}>
			<section className={styles.heroSection}>
				<div className={styles.container}>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>Digital Growth Strategy</p>
							<h1>Turn Online Visibility Into Consistent Business Growth.</h1>
							<p className={styles.heroBody}>
								Your website should not sit online hoping the right people find
								it. We help you build a clear digital growth strategy that
								attracts qualified traffic, strengthens trust, and turns attention
								into measurable business opportunities.
							</p>
							<div className={styles.heroActions}>
								<Link href='/website-audit' className={styles.primaryButton}>
									Request a Website Audit
								</Link>
								<a href='#process' className={styles.secondaryButton}>
									View Growth Strategy
								</a>
							</div>
							<p className={styles.heroTrustLine}>
								Built for businesses that need traffic, clarity, and conversions
								working together.
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
													<span className={styles.metricLabel}>Growth View</span>
													<strong>Traffic mapped to conversion</strong>
												</div>
												<div className={styles.scoreRing}>
													<span>88</span>
												</div>
											</div>
											<div className={styles.progressTrack}>
												<div className={styles.progressBar} />
											</div>
										</div>

										<div className={styles.pathCard}>
											<span className={styles.pathNode}>Search</span>
											<span className={styles.pathConnector} />
											<span className={styles.pathNode}>Trust</span>
											<span className={styles.pathConnector} />
											<span className={styles.pathNode}>Lead</span>
										</div>

										<div className={styles.monitorGrid}>
											<div className={styles.monitorCard}>
												<span className={styles.monitorLabel}>SEO</span>
												<strong>Active</strong>
											</div>
											<div className={styles.monitorCard}>
												<span className={styles.monitorLabel}>Content</span>
												<strong>Aligned</strong>
											</div>
											<div className={styles.monitorCard}>
												<span className={styles.monitorLabel}>PPC</span>
												<strong>Targeted</strong>
											</div>
											<div className={styles.monitorCard}>
												<span className={styles.monitorLabel}>Conversion</span>
												<strong>Focused</strong>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.floatingBadgeStrategy}>SEO</div>
							<div className={styles.floatingBadgeDesign}>Content</div>
							<div className={styles.floatingBadgeDevelopment}>PPC</div>
							<div className={styles.floatingBadgeOptimization}>Conversion</div>
						</div>
					</div>
				</div>
			</section>

			<section className={`${styles.section} ${styles.lightSection}`}>
				<div className={styles.container}>
					<div className={styles.twoColumnSection}>
						<div className={styles.copyColumn}>
							<SectionIntro
								eyebrow='Visibility Is Not Automatic'
								title='A Website Without Strategy Is Easy to Ignore'
								body='If you are serious about growing your business, a strong and consistent online presence is no longer optional. It is not enough to build a website and hope people find it. Your audience needs to discover you, trust you, understand your value, and have a clear reason to take action.'
							/>
						</div>

						<div className={styles.statGrid}>
							{impactCards.map((card) => (
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
						title='Growth Comes From Strategy, Not Random Marketing'
						body='Digital growth works best when every channel has a purpose. SEO, paid ads, content, local visibility, and conversion strategy should support the same business goal: attracting the right people and moving them toward a decision.'
					/>

					<div className={styles.featureGrid}>
						{foundationCards.map((card) => (
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
						eyebrow='Our Growth Approach'
						title='Plan. Attract. Convert. Improve.'
						body='We do not treat digital marketing as disconnected tactics. We build a strategy around your market, your audience, your offer, and the path customers take before choosing a business like yours.'
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
						eyebrow='Digital Growth Channels'
						title='The Right Channels Working Toward One Goal'
						body='As a full-service digital agency, we help connect the pieces of your online presence so traffic, visibility, content, and conversion work together instead of competing for attention.'
					/>

					<div className={styles.channelGrid}>
						{channelCards.map((card) => (
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
								title='Traffic Only Matters When It Has a Clear Path'
								body='Getting people to your website is only part of the work. Once they arrive, the page needs to answer their questions, establish trust, and guide them toward the next step. Digital growth strategy connects traffic generation with conversion-focused design so your marketing has a better chance of becoming revenue.'
							/>
						</div>

						<div className={styles.conversionVisual} aria-hidden='true'>
							<div className={styles.conversionLine} />
							{funnelCards.map((item, index) => (
								<div
									key={item}
									className={`${styles.conversionCard} ${styles[`conversionCard${index + 1}`]}`.trim()}
								>
									<span className={styles.systemCardLabel}>Growth Step</span>
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
						title='Disconnected Marketing Creates Missed Opportunities'
						body='When SEO, ads, content, website design, and conversion strategy are not aligned, businesses often spend more while learning less. A clear digital growth strategy helps each effort support the next.'
					/>

					<div className={styles.resultsGrid}>
						{impactResults.map((card) => (
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
							title='Built Around Your Business Goals'
							body='Digital growth strategy should not be one-size-fits-all. The right plan depends on your market, audience, budget, timeline, competition, and offer. We help identify the strategies that make the most sense for where your business is now and where you want it to go.'
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
						<h2>Ready to Build a Strategy That Drives Growth?</h2>
						<p>
							Tell us what you are looking for, and we&apos;ll follow up with the
							next steps. Whether you need local SEO, paid campaigns, content
							strategy, or a clearer growth plan, we&apos;ll help you identify the
							right path forward.
						</p>
					</div>

					<div className={styles.formCard}>
						<ContactForm
							serviceOptions={digitalGrowthServiceOptions}
							servicePlaceholder='Choose your growth strategy need'
						/>
					</div>

					<p className={styles.formTrust}>
						Built for businesses serious about visibility, traffic, conversion,
						and long-term growth.
					</p>
				</div>
			</section>
		</div>
	);
}
