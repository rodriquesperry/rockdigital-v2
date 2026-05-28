import Link from 'next/link';

import styles from './digitalMarketingSanAntonio.module.css';

export const metadata = {
	title: {
		absolute: 'Digital Marketing San Antonio | Rock Digital',
	},
	description:
		'Rock Digital helps San Antonio businesses generate qualified demand through strategic web design, SEO, conversion optimization, local visibility, analytics, and growth-focused digital marketing systems.',
	alternates: {
		canonical: '/digital-marketing-san-antonio',
	},
	openGraph: {
		title: 'Digital Marketing San Antonio | Rock Digital',
		description:
			'Rock Digital helps San Antonio businesses generate qualified demand through strategic web design, SEO, conversion optimization, local visibility, analytics, and growth-focused digital marketing systems.',
		url: '/digital-marketing-san-antonio',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Digital Marketing San Antonio | Rock Digital',
		description:
			'Rock Digital helps San Antonio businesses generate qualified demand through strategic web design, SEO, conversion optimization, local visibility, analytics, and growth-focused digital marketing systems.',
	},
};

const pageContent = {
	heroEyebrow: 'Digital Marketing San Antonio',

	heroHeadline: 'Turn Your Website and Marketing Into a Revenue System',

	heroSubheadline:
		'Rock Digital helps San Antonio businesses generate qualified demand through strategic web design, SEO, conversion optimization, local visibility, analytics, and growth-focused digital marketing systems.',

	heroLinks: [
		{
			text: 'Request a Marketing Strategy Audit',
			href: '/website-audit',
		},
	],

	sections: [
		{
			eyebrow: 'Marketing Without Strategy Creates Friction',

			heading: 'Your Marketing Should Generate Revenue — Not Confusion',

			subheading:
				'Disconnected marketing systems often create inconsistent growth, poor lead quality, and unclear performance visibility.',

			body: `Many San Antonio businesses invest in websites, SEO, paid ads, social media, or content marketing without ever seeing those efforts work together. The result is usually the same: inconsistent leads, poor lead quality, weak conversion rates, and marketing reports that never clearly explain what is actually driving growth. Businesses are tired of guessing. They are tired of paying retainers without understanding what is working, where leads are coming from, or why competitors continue to outperform them online. [[DIGITAL_MARKETING]] should not feel like a gamble. It should function like a system designed to generate visibility, trust, qualified traffic, and measurable business growth.`,

			links: [
				{
					id: 'DIGITAL_MARKETING',
					text: 'Digital marketing',
					href: '/digital-marketing',
				},
			],
		},

		{
			eyebrow: 'Why Businesses Struggle Online',

			heading: 'Why Many Digital Marketing Campaigns Underperform',

			subheading:
				'Most marketing problems are not caused by one tactic failing. They happen when the entire growth system lacks alignment.',

			body: `The problem is rarely one individual tactic. Most underperforming marketing campaigns fail because the business lacks a connected growth strategy. A website may look modern but fail to convert visitors into leads. SEO efforts may increase traffic without attracting qualified buyers. Paid ads may drive clicks while the landing pages fail to build trust. Businesses often end up with disconnected marketing pieces instead of a unified system designed around lead generation and conversion. That disconnect creates wasted budget, poor reporting visibility, inconsistent demand, and frustration for business owners trying to scale.`,

			links: [],
		},

		{
			eyebrow: 'The Market Has Changed',

			heading:
				'Digital Marketing Is No Longer Optional for San Antonio Businesses',

			subheading:
				'Customers now research, compare, and evaluate businesses online long before making contact.',

			body: `San Antonio continues to grow rapidly, and so does online competition. Businesses across healthcare, professional services, construction, hospitality, home services, manufacturing, and B2B sectors are competing aggressively for visibility online. Customers now search, compare, evaluate reviews, and make decisions digitally before ever contacting a business. Companies with stronger positioning, stronger websites, stronger local visibility, and better conversion systems consistently capture more demand — even when competitors offer similar services. In a market as competitive and fast-growing as San Antonio, digital marketing is no longer an optional growth channel. It is part of the infrastructure that supports long-term business growth. For more local context, see our guide to [[SAN_ANTONIO_MARKETING_STRATEGIES]].`,

			links: [
				{
					id: 'SAN_ANTONIO_MARKETING_STRATEGIES',
					text: 'San Antonio digital marketing strategies',
					href: '/blog/top-san-antonio-digital-marketing-strategies',
				},
			],
		},

		{
			eyebrow: 'The Rock Digital Approach',

			heading: 'A Revenue-Focused Growth System — Not Disconnected Services',

			subheading:
				'Every part of your digital presence should work together to support measurable business growth.',

			body: `Rock Digital approaches digital marketing differently. Instead of treating SEO, web design, paid advertising, analytics, and branding as isolated services, we build integrated growth systems designed to support measurable business outcomes. Every part of the system works together: your website builds trust and improves conversion rates, SEO improves visibility for high-intent searches, local optimization strengthens your presence in Google Maps and local discovery platforms, content builds authority, analytics provide clarity, and paid campaigns accelerate demand generation. The goal is not simply more traffic. The goal is qualified opportunities, stronger conversion performance, and predictable long-term growth.`,

			links: [],
		},

		{
			eyebrow: 'Built Around Business Outcomes',

			heading: 'Built for Businesses That Need Qualified Leads',

			subheading:
				'Different industries require different strategies, messaging, and conversion systems.',

			body: `Not every business needs the same type of marketing strategy. A contractor trying to generate booked jobs has very different growth challenges than a healthcare practice, law firm, or B2B company. Effective digital marketing requires understanding how buyers search, what builds trust in each industry, and what drives conversion decisions. Rock Digital focuses on building strategies around qualified demand, lead quality, customer intent, and conversion behavior rather than generic traffic goals. That means building marketing systems designed specifically around how your business actually generates revenue.`,

			links: [],
		},

		{
			eyebrow: 'Strategic Website Performance',

			heading: 'Strategic Web Design That Supports Growth',

			subheading:
				'Your website should strengthen trust, improve conversion rates, and support long-term visibility.',

			body: `Your website is one of the most important assets in your marketing system. Many businesses lose leads because their website lacks clear positioning, weakens trust, creates friction, or fails to guide visitors toward action. Effective [[WEB_DESIGN]] is not just visual. It influences search visibility, conversion rates, lead quality, user trust, and overall marketing performance. Rock Digital builds websites designed to support business growth through strategic messaging, conversion-focused layouts, search optimization, performance improvements, and user experience enhancements that help turn visitors into customers. If your current site is limiting growth, our [[WEBSITE_IMPROVEMENT]] process can help identify what needs to change.`,

			links: [
				{
					id: 'WEB_DESIGN',
					text: 'web design',
					href: '/web-design',
				},
				{
					id: 'WEBSITE_IMPROVEMENT',
					text: 'website improvement',
					href: '/website-improvement',
				},
			],
		},

		{
			eyebrow: 'Visibility With Intent',

			heading: 'SEO That Prioritizes Visibility and Conversion',

			subheading:
				'Search visibility only matters when it attracts qualified opportunities and supports conversion.',

			body: `SEO is not about chasing rankings for the sake of rankings. Strong SEO should improve visibility for the searches that actually generate business opportunities. That means targeting high-intent keywords, [[IMPROVING_LOCAL_SEARCH_PRESENCE]], optimizing technical performance, strengthening website authority, and building content that aligns with buyer intent. Modern SEO also extends beyond traditional search results. Businesses now need visibility across Google Maps, local review ecosystems, and AI-assisted search experiences where users increasingly discover and compare companies before making decisions. If visibility is a current challenge, start with our guide on [[GET_FOUND_ON_GOOGLE]].`,

			links: [
				{
					id: 'GET_FOUND_ON_GOOGLE',
					text: 'how to get your website found on Google',
					href: '/blog/how-to-get-your-website-found-on-google',
				},
				{
					id: 'IMPROVING_LOCAL_SEARCH_PRESENCE',
					text: 'improving local search presence',
					href: '/blog/why-digital-marketing-matters-for-small-businesses',
				},
			],
		},

		{
			eyebrow: 'Trust Drives Local Growth',

			heading: 'Local Visibility Matters More Than Ever',

			subheading:
				'Businesses that appear more credible locally often outperform competitors during the decision-making process.',

			body: `Local trust plays a major role in how San Antonio businesses earn customers online. Buyers want businesses that feel credible, established, and visible within the community. Google Business Profile optimization, review strategy, local SEO, reputation management, location relevance, and consistent local authority signals all influence how businesses appear in search and how customers evaluate trustworthiness. Businesses that dominate local visibility often outperform competitors not simply because they rank better, but because they appear more credible and more established during the decision-making process.`,

			links: [],
		},

		{
			eyebrow: 'Transparency Builds Confidence',

			heading: 'Clear Reporting and Accountability',

			subheading:
				'Business owners should always understand how marketing performance connects to growth.',

			body: `Business owners should never feel uncertain about what their marketing is doing. One of the largest frustrations in the digital marketing industry is the lack of transparency surrounding performance, reporting, and measurable outcomes. Rock Digital focuses on clarity, accountability, and measurable business impact. That means tracking meaningful metrics tied to visibility, lead generation, conversion performance, and growth rather than relying on vanity metrics that fail to explain actual business results. Effective marketing should create confidence, not confusion.`,

			links: [],
		},

		{
			eyebrow: 'Growth Requires Long-Term Thinking',

			heading: 'Designed for Long-Term Growth — Not Short-Term Tricks',

			subheading:
				'Strong digital performance is built through consistency, authority, and strategic refinement over time.',

			body: `Sustainable growth rarely comes from shortcuts. Businesses that consistently generate qualified demand online usually invest in strong positioning, trust-building, search visibility, conversion optimization, authority, and long-term strategic improvements. Quick fixes and low-cost marketing packages often create temporary spikes without building durable business momentum. Rock Digital focuses on building long-term growth infrastructure designed to strengthen visibility, improve lead quality, support conversion performance, and help businesses scale more effectively over time. This is why [[WEBSITE_OPTIMIZATION]] matters after launch, not just during the initial build.`,

			links: [
				{
					id: 'WEBSITE_OPTIMIZATION',
					text: 'website optimization',
					href: '/website-optimization',
				},
			],
		},

		{
			eyebrow: 'Not Every Agency Is Built the Same',

			heading: 'A Better Fit for Businesses Ready to Grow',

			subheading:
				'Strategic growth requires more than low-cost marketing packages and generic tactics.',

			body: `Some businesses are simply looking for the cheapest marketing option available. Others are looking for a strategic partner that understands growth, conversion behavior, positioning, search visibility, and long-term business performance. Rock Digital is built for businesses that understand digital marketing is an investment in future growth, customer acquisition, and long-term competitive positioning. The goal is not to generate more activity. The goal is to create a stronger business growth system capable of producing measurable results.`,

			links: [],
		},

		{
			eyebrow: 'Built for the San Antonio Market',

			heading: 'Digital Marketing for San Antonio Businesses',

			subheading:
				'Local businesses need stronger positioning, stronger visibility, and stronger conversion systems to remain competitive.',

			body: `San Antonio is one of the most dynamic business markets in Texas, supported by growth across healthcare, construction, military-connected industries, professional services, hospitality, tourism, manufacturing, cybersecurity, and B2B sectors. As competition increases throughout the region, businesses need more than basic marketing tactics to remain competitive online. They need stronger positioning, stronger visibility, stronger conversion systems, and a marketing strategy built around how modern buyers actually search, evaluate, and make purchasing decisions. Businesses that invest strategically in digital marketing are better positioned to capture demand, strengthen authority, and build sustainable long-term growth.`,

			links: [],
		},

		{
			eyebrow: 'Start With Strategy',

			heading: 'Request a Marketing Strategy Audit',

			subheading:
				'Identify what is limiting growth and uncover where your strongest opportunities exist.',

			body: `If your business is already investing in marketing but still struggling with inconsistent leads, weak conversion performance, low visibility, or unclear reporting, it may be time for a more strategic approach. Rock Digital helps San Antonio businesses identify growth barriers, improve visibility, strengthen conversion systems, and build marketing infrastructure designed for measurable business performance. Request a [[MARKETING_STRATEGY_AUDIT]] to uncover where your current marketing may be underperforming and where the greatest growth opportunities exist.`,

			links: [
				{
					id: 'MARKETING_STRATEGY_AUDIT',
					text: 'marketing strategy audit',
					href: '/website-audit',
				},
			],
		},
	],
};

const serviceSystemItems = [
	{
		label: 'Web Design',
		sectionIndex: 5,
	},
	{
		label: 'SEO',
		sectionIndex: 6,
	},
	{
		label: 'Local Visibility',
		sectionIndex: 7,
	},
	{
		label: 'Analytics',
		sectionIndex: 8,
	},
	{
		label: 'Conversion Optimization',
		sectionIndex: 9,
	},
];

const outcomeItems = [
	{
		title: 'Qualified leads',
		description:
			'Marketing systems designed around customer intent, lead quality, and revenue behavior.',
	},
	{
		title: 'Clearer reporting',
		description:
			'Performance visibility tied to meaningful growth signals instead of vanity metrics.',
	},
	{
		title: 'Better visibility',
		description:
			'Stronger search, local, and discovery presence for high-intent San Antonio demand.',
	},
	{
		title: 'Stronger conversion',
		description:
			'Website and marketing improvements that help turn visitors into real opportunities.',
	},
];

const faqItems = [
	{
		question: 'What does a digital marketing agency in San Antonio do?',
		answer:
			'A digital marketing agency helps businesses improve online visibility, strengthen website performance, attract qualified traffic, improve conversion rates, and measure how marketing activity connects to business growth.',
	},
	{
		question:
			'How is Rock Digital different from a traditional marketing agency?',
		answer:
			'Rock Digital focuses on integrated growth systems instead of disconnected services. The work connects website strategy, SEO, local visibility, analytics, and conversion optimization around measurable business outcomes.',
	},
	{
		question: 'Is SEO enough for a San Antonio business to grow online?',
		answer:
			'SEO is important, but it works best when it is connected to a strong website, clear positioning, local visibility, conversion-focused landing pages, and reporting that shows what is actually driving growth.',
	},
	{
		question: 'When should a business request a marketing strategy audit?',
		answer:
			'A business should request a marketing strategy audit when leads are inconsistent, reporting is unclear, visibility is weak, conversion rates are low, or the website and marketing channels are not working together.',
	},
	{
		question: 'Why do digital marketing campaigns underperform?',
		answer:
			'Digital marketing campaigns often underperform when the website, SEO, paid ads, content, local visibility, and reporting are disconnected instead of working together as a unified growth system.',
	},
	{
		question: 'How important is web design for digital marketing performance?',
		answer:
			'Web design is central to digital marketing performance because the website affects trust, search visibility, conversion rates, lead quality, user experience, and how effectively visitors become customers.',
	},
	{
		question: 'Why does local visibility matter for San Antonio businesses?',
		answer:
			'Local visibility matters because customers compare businesses online before making contact. Strong local SEO, reviews, Google Business Profile performance, and reputation signals help businesses appear more credible during the decision-making process.',
	},
	{
		question: 'What should businesses expect from clear marketing reporting?',
		answer:
			'Clear marketing reporting should help business owners understand visibility, lead generation, conversion performance, and growth impact instead of relying only on vanity metrics that do not explain business results.',
	},
];

function slugify(value) {
	return value
		.toLowerCase()
		.replace(/—/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

function getLinkedBodyParts(body, links) {
	if (!links.length) {
		return [body];
	}

	const linkMap = new Map(links.map((link) => [`[[${link.id}]]`, link]));
	const tokenPattern = /\[\[[A-Z0-9_]+\]\]/g;
	const parts = body.split(tokenPattern);
	const tokens = body.match(tokenPattern) || [];

	return parts.flatMap((part, index) => {
		const token = tokens[index];
		const link = linkMap.get(token);

		if (!link) {
			return [part];
		}

		return [part, { ...link, key: `${link.id}-${index}` }];
	});
}

function RichText({ parts }) {
	return (
		<>
			{parts.map((part, index) =>
				typeof part === 'string' ? (
					<span key={`${part.slice(0, 18)}-${index}`}>{part}</span>
				) : (
					<Link key={part.key} href={part.href} className={styles.inlineLink}>
						{part.text}
					</Link>
				),
			)}
		</>
	);
}

function SectionIntro({ eyebrow, heading, subheading, align = 'left' }) {
	const alignmentClass = align === 'center' ? styles.sectionIntroCenter : '';

	return (
		<div className={`${styles.sectionIntro} ${alignmentClass}`.trim()}>
			<p className={styles.eyebrow}>{eyebrow}</p>
			<h2>{heading}</h2>
			<p>{subheading}</p>
		</div>
	);
}

function HeroVisual() {
	return (
		<div className={styles.heroVisual} aria-hidden='true'>
			<div className={styles.systemPanel}>
				<div className={styles.panelChrome}>
					<span />
					<span />
					<span />
				</div>
				<div className={styles.signalMap}>
					<span className={styles.signalLineOne} />
					<span className={styles.signalLineTwo} />
					<span className={styles.signalLineThree} />
					<span className={styles.signalNodeOne} />
					<span className={styles.signalNodeTwo} />
					<span className={styles.signalNodeThree} />
				</div>
				<div className={styles.panelGrid}>
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
			</div>
		</div>
	);
}

export default function DigitalMarketingSanAntonioPage() {
	const sections = pageContent.sections.map((section) => ({
		eyebrow: section.eyebrow,
		heading: section.heading,
		subheading: section.subheading,
		bodyParts: getLinkedBodyParts(section.body, section.links),
	}));
	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};

	return (
		<div className={styles.pageShell}>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<section className={styles.heroSection}>
				<div className={styles.container}>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>{pageContent.heroEyebrow}</p>
							<h1>{pageContent.heroHeadline}</h1>
							<p className={styles.heroLead}>{pageContent.heroSubheadline}</p>
							<div className={styles.heroActions}>
								{pageContent.heroLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={styles.primaryButton}
									>
										{link.text}
									</Link>
								))}
							</div>
						</div>
						<HeroVisual />
					</div>
				</div>
			</section>

			<div className={styles.contentWrap}>
				<div className={styles.container}>
					<section
						className={styles.problemSection}
						id={slugify(sections[0].heading)}
					>
						<div className={styles.problemLead}>
							<SectionIntro
								eyebrow={sections[0].eyebrow}
								heading={sections[0].heading}
								subheading={sections[0].subheading}
							/>
							<p className={styles.largeBody}>
								<RichText parts={sections[0].bodyParts} />
							</p>
						</div>
						<div className={styles.problemPoints}>
							{sections.slice(1, 3).map((section) => (
								<section
									key={section.heading}
									className={`${styles.problemPoint} ${
										section.eyebrow === 'The Market Has Changed'
											? styles.marketChangedPoint
											: ''
									}`.trim()}
								>
									<p className={styles.eyebrow}>{section.eyebrow}</p>
									<h3>{section.heading}</h3>
									<p className={styles.cardSubheading}>{section.subheading}</p>
									<p>
										<RichText parts={section.bodyParts} />
									</p>
								</section>
							))}
						</div>
					</section>

					<section
						className={styles.strategySection}
						id={slugify(sections[3].heading)}
					>
						<div className={styles.strategyPanel}>
							<SectionIntro
								eyebrow={sections[3].eyebrow}
								heading={sections[3].heading}
								subheading={sections[3].subheading}
							/>
							<p className={styles.largeBody}>
								<RichText parts={sections[3].bodyParts} />
							</p>
						</div>
						<article
							className={styles.positioningCard}
							id={slugify(sections[4].heading)}
						>
							<p className={styles.eyebrow}>{sections[4].eyebrow}</p>
							<h3>{sections[4].heading}</h3>
							<p className={styles.cardSubheading}>{sections[4].subheading}</p>
							<p>
								<RichText parts={sections[4].bodyParts} />
							</p>
						</article>
					</section>

					<section
						className={styles.systemSection}
						id={slugify(sections[5].heading)}
					>
						<SectionIntro
							eyebrow='The Growth System'
							heading='The Services Work Together as One System'
							subheading='Web design, SEO, local visibility, analytics, and conversion optimization are strongest when they reinforce each other.'
							align='center'
						/>
						<div className={styles.systemList}>
							{serviceSystemItems.map((item) => {
								const section = sections[item.sectionIndex];

								return (
									<article key={item.label} className={styles.systemRow}>
										<div className={styles.systemLabel}>{item.label}</div>
										<div className={styles.systemRowContent}>
											<h3>{section.heading}</h3>
											<p className={styles.cardSubheading}>
												{section.subheading}
											</p>
											<p>
												<RichText parts={section.bodyParts} />
											</p>
										</div>
									</article>
								);
							})}
						</div>
					</section>

					<section className={styles.outcomesSection}>
						<SectionIntro
							eyebrow='Business Outcomes'
							heading='What the System Is Designed to Improve'
							subheading='The goal is not more marketing activity. The goal is stronger visibility, clearer decisions, better lead quality, and measurable business growth.'
						/>
						<div className={styles.outcomesGrid}>
							{outcomeItems.map((item) => (
								<article key={item.title} className={styles.outcomeCard}>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</article>
							))}
						</div>
						<article
							className={styles.fitCard}
							id={slugify(sections[10].heading)}
						>
							<p className={styles.eyebrow}>{sections[10].eyebrow}</p>
							<h3>{sections[10].heading}</h3>
							<p className={styles.cardSubheading}>{sections[10].subheading}</p>
							<p>
								<RichText parts={sections[10].bodyParts} />
							</p>
						</article>
					</section>

					<section
						className={styles.marketSection}
						id={slugify(sections[11].heading)}
					>
						<div className={styles.marketVisual} aria-hidden='true'>
							<span />
							<span />
							<span />
							<span />
						</div>
						<div>
							<SectionIntro
								eyebrow={sections[11].eyebrow}
								heading={sections[11].heading}
								subheading={sections[11].subheading}
							/>
							<p className={styles.largeBody}>
								<RichText parts={sections[11].bodyParts} />
							</p>
						</div>
					</section>

					<section
						className={styles.ctaSection}
						id={slugify(sections[12].heading)}
					>
						<div>
							<p className={styles.eyebrow}>{sections[12].eyebrow}</p>
							<h2>{sections[12].heading}</h2>
							<p className={styles.ctaSubheading}>{sections[12].subheading}</p>
							<p>
								<RichText parts={sections[12].bodyParts} />
							</p>
						</div>
						<Link href='/website-audit' className={styles.primaryButton}>
							Request a Marketing Strategy Audit
						</Link>
					</section>

					<section className={styles.faqSection}>
						<SectionIntro
							eyebrow='FAQ'
							heading='Digital Marketing San Antonio FAQs'
							subheading='Common questions businesses ask before moving from disconnected marketing activity to a clearer growth system.'
							align='center'
						/>
						<div className={styles.faqGrid}>
							{faqItems.map((item) => (
								<details key={item.question} className={styles.faqItem}>
									<summary>{item.question}</summary>
									<p>{item.answer}</p>
								</details>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
