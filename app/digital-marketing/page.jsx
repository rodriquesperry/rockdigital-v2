import Link from 'next/link';

import JsonLd from '@/components/seo/JsonLd';

import styles from './digitalMarketing.module.css';

const pageTitle = 'Digital Marketing Services | Rock Digital';
const pageDescription =
	'Digital marketing services built to improve visibility, attract qualified traffic, and turn your website into a growth system through SEO, content, conversion, and analytics.';
const pageUrl = 'https://rockdigital.agency/digital-marketing';
const auditHref = '/website-audit';

export const metadata = {
	title: {
		absolute: pageTitle,
	},
	description: pageDescription,
	alternates: {
		canonical: pageUrl,
	},
	openGraph: {
		title: pageTitle,
		description:
			'Build a connected digital marketing system that attracts, converts, and scales with Rock Digital.',
		url: pageUrl,
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: pageTitle,
		description:
			'Build a connected digital marketing system that attracts, converts, and scales with Rock Digital.',
	},
};

const systemCards = [
	{
		title: 'Visibility',
		copy: 'Show up when your ideal customers are actively searching for what you offer.',
	},
	{
		title: 'Traffic',
		copy: 'Attract qualified visitors through SEO, content, paid campaigns, and local search strategy.',
	},
	{
		title: 'Conversion',
		copy: 'Turn attention into action with stronger pages, clearer messaging, and intentional user journeys.',
	},
	{
		title: 'Optimization',
		copy: 'Use data to refine performance, improve results, and build long-term momentum.',
	},
];

const seoFocusAreas = [
	'Keyword strategy',
	'Search intent alignment',
	'Technical SEO',
	'On-page optimization',
	'Local SEO',
	'Content structure',
];

const conversionLevers = [
	'Clear positioning',
	'Stronger calls-to-action',
	'Faster user decisions',
	'Better page flow',
	'Improved trust signals',
	'Reduced friction',
];

const authoritySteps = [
	'Research Search Intent',
	'Build Topic Authority',
	'Create Supporting Content',
	'Link Strategically',
	'Measure and Improve',
];

const analyticsMetrics = [
	'Visibility',
	'Traffic Quality',
	'Engagement',
	'Conversions',
	'Opportunities',
];

const whyCards = [
	{
		title: 'Strategy Before Tactics',
		copy: 'Every decision should support a clear business objective.',
	},
	{
		title: 'Built Around Conversion',
		copy: 'Traffic is only valuable when it has a path to action.',
	},
	{
		title: 'SEO-Aware Execution',
		copy: 'Content, structure, and technical details should support search visibility.',
	},
	{
		title: 'Long-Term Optimization',
		copy: 'Growth improves when performance is measured and refined.',
	},
];

const faqs = [
	{
		question: 'What is digital marketing?',
		answer:
			'Digital marketing is the use of online channels such as search engines, websites, content, paid ads, email, and analytics to attract customers, build trust, and drive business growth.',
	},
	{
		question: 'Why is digital marketing important for local businesses?',
		answer:
			'Digital marketing helps local businesses show up when customers search online, build credibility before a conversation happens, and turn website visitors into leads or customers.',
	},
	{
		question: 'How does SEO fit into digital marketing?',
		answer:
			'SEO is one of the core foundations of digital marketing because it helps your business become more visible in search results for relevant keywords and local searches.',
	},
	{
		question: 'Do I need a better website before investing in digital marketing?',
		answer:
			'In many cases, yes. If your website is unclear, slow, outdated, or not built to convert, your marketing campaigns may drive traffic without producing strong results.',
	},
	{
		question: 'How long does digital marketing take to work?',
		answer:
			'Some channels can create visibility quickly, but long-term digital marketing results usually improve over time as SEO, content, analytics, and conversion optimization compound together.',
	},
];

const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: faq.answer,
		},
	})),
};

function CheckList({ title, items }) {
	return (
		<aside className={styles.checkCard}>
			<h3>{title}</h3>
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</aside>
	);
}

function SectionIntro({ eyebrow, title, copy, light = false }) {
	return (
		<header className={`${styles.sectionIntro} ${light ? styles.sectionIntroLight : ''}`.trim()}>
			{eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
			<h2>{title}</h2>
			{copy ? <p>{copy}</p> : null}
		</header>
	);
}

export default function DigitalMarketingPage() {
	return (
		<div className={styles.pageShell}>
			<JsonLd data={faqSchema} />

			<section className={styles.heroSection}>
				<div className={styles.container}>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DIGITAL MARKETING</p>
							<h1>
								Digital Marketing Built to{' '}
								<span>Attract, Convert, and Scale</span>
							</h1>
							<p className={styles.heroLead}>
								Digital marketing should do more than generate clicks. It
								should create a connected system that helps the right people
								find your business, trust your brand, and take action.
							</p>
							<p className={styles.heroSupport}>
								At Rock Digital, we align SEO, content, traffic strategy,
								conversion optimization, and analytics into one focused growth
								system so your marketing works together instead of operating in
								disconnected pieces.
							</p>
							<div className={styles.heroActions}>
								<Link href={auditHref} className={styles.primaryButton}>
									Request a Website Audit
								</Link>
							</div>
							<p className={styles.heroTrustLine}>
								Built for businesses ready to turn visibility into measurable
								growth.
							</p>
						</div>

						<div className={styles.heroVisual} aria-hidden='true'>
							<div className={styles.strategyPanel}>
								<div className={styles.panelTop}>
									<span />
									<span />
									<span />
								</div>
								<div className={styles.chartArea}>
									<div className={styles.chartLine} />
									<div className={styles.chartNodeOne} />
									<div className={styles.chartNodeTwo} />
									<div className={styles.chartNodeThree} />
								</div>
								<div className={styles.systemMap}>
									<span>SEO</span>
									<span>Content</span>
									<span>Traffic</span>
									<span>Conversion</span>
									<span>Analytics</span>
								</div>
								<div className={styles.panelFooter}>
									<strong>Growth System</strong>
									<span>Visibility + trust + action</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.problemSection}>
				<div className={styles.container}>
					<div className={styles.editorialGrid}>
						<div className={styles.editorialHeading}>
							<p className={styles.darkEyebrow}>The real issue</p>
							<h2>Most Digital Marketing Fails Because It Is Disconnected</h2>
						</div>
						<div className={styles.editorialCopy}>
							<p>
								Many businesses invest in SEO, ads, content, and social media,
								but never see meaningful results because each piece is treated
								as a separate tactic. Traffic is sent to weak pages. Content is
								created without search intent. Campaigns are launched without
								conversion strategy. Data is collected but rarely used to
								improve performance.
							</p>
							<p>The problem usually is not effort. The problem is lack of alignment.</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.systemSection}>
				<div className={styles.container}>
					<SectionIntro
						eyebrow='Growth system'
						title='A Digital Marketing System Built Around Growth'
						copy='We do not approach digital marketing as a list of services. We build connected systems that help your business become more visible, attract qualified traffic, convert more visitors, and improve over time.'
						light
					/>
					<div className={styles.cardGrid}>
						{systemCards.map((card, index) => (
							<article className={styles.systemCard} key={card.title}>
								<span>{String(index + 1).padStart(2, '0')}</span>
								<h3>{card.title}</h3>
								<p>{card.copy}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.lightSection}>
				<div className={styles.container}>
					<div className={styles.splitGrid}>
						<div className={styles.splitCopy}>
							<p className={styles.darkEyebrow}>SEO strategy</p>
							<h2>Search Engine Optimization That Builds Long-Term Visibility</h2>
							<p>
								SEO is the foundation of sustainable digital marketing. When
								your business ranks for the right searches, you create a steady
								source of high-intent traffic without depending entirely on paid
								advertising.
							</p>
							<p>
								We focus on search strategies that match how your customers
								actually look for services, products, and answers online. That
								includes keyword strategy, search intent, technical SEO,
								on-page optimization, content structure, and local SEO.
							</p>
							<p>
								For location-focused growth, see how we approach{' '}
								<Link href='/digital-marketing-new-braunfels' className={styles.inlineLink}>
									digital marketing in New Braunfels
								</Link>
								.
							</p>
						</div>
						<CheckList title='SEO Focus Areas' items={seoFocusAreas} />
					</div>
				</div>
			</section>

			<section className={styles.trafficSection}>
				<div className={styles.container}>
					<div className={styles.trafficGrid}>
						<div className={styles.statColumn} aria-hidden='true'>
							<span>01</span>
							<span>Right Traffic</span>
						</div>
						<div className={styles.darkCopyBlock}>
							<p className={styles.eyebrow}>Traffic strategy</p>
							<h2>Traffic Generation With a Purpose</h2>
							<p>
								Traffic alone does not grow a business. The right traffic does.
								We help create strategies that attract people who are more
								likely to need your services, trust your brand, and move
								forward.
							</p>
							<p>
								That may include organic search, paid campaigns, local
								visibility, content distribution, and funnel-focused traffic
								strategies. The goal is not vanity metrics. The goal is
								qualified attention that can turn into real opportunities.
							</p>
							<p>
								For a deeper local strategy breakdown, read our guide to{' '}
								<Link
									href='/blog/top-san-antonio-digital-marketing-strategies'
									className={styles.inlineLinkDark}
								>
									top San Antonio digital marketing strategies
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.lightSection}>
				<div className={styles.container}>
					<div className={styles.splitGrid}>
						<div className={styles.splitCopy}>
							<p className={styles.darkEyebrow}>Conversion optimization</p>
							<h2>Traffic Means Nothing Without Conversion</h2>
							<p>
								A digital marketing strategy is only as strong as the
								experience visitors land on. If your website is confusing,
								slow, unclear, or poorly positioned, your marketing budget works
								harder than it should.
							</p>
							<p>
								That is why our digital marketing approach connects directly to
								web design, messaging, user experience, calls-to-action, and
								page structure. Your website should not just receive traffic. It
								should guide visitors toward action.
							</p>
							<p>
								A{' '}
								<Link href='/web-design' className={styles.inlineLink}>
									conversion-focused website
								</Link>{' '}
								gives your marketing a stronger foundation, and our{' '}
								<Link href='/web-design-guide' className={styles.inlineLink}>
									web design guide
								</Link>{' '}
								explains why design, structure, and strategy must work together.
							</p>
						</div>
						<CheckList title='Conversion Levers' items={conversionLevers} />
					</div>
				</div>
			</section>

			<section className={styles.authoritySection}>
				<div className={styles.container}>
					<SectionIntro
						eyebrow='Content and authority'
						title='Content That Builds Authority, Not Just Activity'
						copy='Publishing content without strategy creates noise. Strategic content builds authority. We help structure content around the questions, searches, and decision points your customers already have.'
					/>
					<p className={styles.centeredSupport}>
						This includes pillar pages, cluster articles, local pages, blog
						content, and internal linking systems that support both SEO and user
						experience.
					</p>
					<div className={styles.timeline}>
						{authoritySteps.map((step, index) => (
							<article className={styles.timelineStep} key={step}>
								<span>{String(index + 1).padStart(2, '0')}</span>
								<h3>{step}</h3>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.analyticsSection}>
				<div className={styles.container}>
					<div className={styles.analyticsGrid}>
						<div className={styles.darkCopyBlock}>
							<p className={styles.eyebrow}>Analytics and optimization</p>
							<h2>Measure, Refine, and Improve Over Time</h2>
							<p>
								Digital marketing should not be based on guesswork. We look at
								what people are searching for, how they find your website,
								where they engage, where they drop off, and what actions they
								take.
							</p>
							<p>
								That data helps reveal what is working, what needs improvement,
								and where the greatest opportunities exist. Over time, this
								turns marketing from random activity into a clearer growth
								system.
							</p>
						</div>
						<div className={styles.metricsPanel} aria-label='Performance areas measured'>
							{analyticsMetrics.map((metric, index) => (
								<div className={styles.metricCard} key={metric}>
									<span>{metric}</span>
									<strong>{`${72 + index * 5}%`}</strong>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={styles.whySection}>
				<div className={styles.container}>
					<SectionIntro
						eyebrow='Why Rock Digital'
						title='Why Work With Rock Digital'
						copy='Rock Digital is built for businesses that want more than surface-level marketing. We combine strategy, design, SEO, content, and optimization to create digital systems that support growth.'
					/>
					<p className={styles.centeredSupport}>
						We are not interested in chasing every trend or selling
						disconnected services. We focus on the pieces that matter:
						visibility, trust, conversion, and long-term performance.
					</p>
					<div className={styles.whyGrid}>
						{whyCards.map((card) => (
							<article className={styles.whyCard} key={card.title}>
								<h3>{card.title}</h3>
								<p>{card.copy}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.finalCtaSection}>
				<div className={styles.container}>
					<div className={styles.finalCtaInner}>
						<div>
							<p className={styles.eyebrow}>Next strategic move</p>
							<h2>Ready to Turn Your Digital Marketing Into a Growth System?</h2>
							<p>
								If your website, SEO, content, and traffic strategy are not
								working together, there is likely untapped opportunity. Start
								with a website and marketing audit so we can identify what is
								holding back performance and where growth can be unlocked.
							</p>
						</div>
						<div className={styles.finalCtaAction}>
							<Link href={auditHref} className={styles.primaryButton}>
								Request a Website Audit
							</Link>
							<p>
								We&apos;ll review your digital presence, identify gaps, and
								outline the next strategic move.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.faqSection}>
				<div className={styles.container}>
					<div className={styles.faqGrid}>
						<div className={styles.faqHeading}>
							<p className={styles.darkEyebrow}>FAQ</p>
							<h2>Digital Marketing Questions</h2>
						</div>
						<div className={styles.faqList}>
							{faqs.map((faq) => (
								<details className={styles.faqItem} key={faq.question}>
									<summary>
										<span>{faq.question}</span>
										<span aria-hidden='true'>+</span>
									</summary>
									<p>{faq.answer}</p>
								</details>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
