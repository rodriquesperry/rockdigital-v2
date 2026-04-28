import Link from 'next/link';

import JsonLd from '@/components/seo/JsonLd';

import styles from './webDesignGuide.module.css';

const pageTitle =
	'Web Design Guide: Build a High-Converting Website That Drives Results';
const pageDescription =
	'Learn how web design impacts conversions, SEO, and business growth. Discover proven strategies to build a high-performing website that turns visitors into customers.';
const pageUrl = 'https://www.rockdigital.agency/web-design-guide';
const organizationName = 'Rock Digital Agency';
const organizationUrl = 'https://www.rockdigital.agency';

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
		description: pageDescription,
		url: pageUrl,
		type: 'article',
	},
	twitter: {
		card: 'summary_large_image',
		title: pageTitle,
		description: pageDescription,
	},
};

const auditHref = '/website-audit';
const webDesignHref = '/web-design';
const digitalGrowthHref = '/website-improvement';
const sanAntonioHref = '/web-design';

const tocItems = [
	{ id: 'why-most-websites-fail', label: 'Why Most Websites Fail' },
	{ id: 'website-performing', label: 'When Your Website Isn’t Performing' },
	{ id: 'what-is-web-design', label: 'What Is Web Design' },
	{ id: 'why-web-design-critical', label: 'Why Web Design Is Critical' },
	{ id: 'core-principles', label: 'Core Principles' },
	{ id: 'website-should-perform', label: 'A Website Should Perform' },
	{
		id: 'web-design-digital-marketing',
		label: 'Web Design + Digital Marketing',
	},
	{ id: 'types-of-websites', label: 'Types of Websites' },
	{
		id: 'why-web-design-alone-isnt-enough',
		label: 'Why Web Design Alone Isn’t Enough',
	},
	{ id: 'web-design-process', label: 'Web Design Process' },
	{ id: 'what-makes-convert', label: 'What Makes a Website Convert' },
	{ id: 'custom-vs-templates', label: 'Custom vs Templates' },
	{ id: 'common-mistakes', label: 'Common Mistakes' },
	{ id: 'investment', label: 'Investment' },
	{ id: 'choose-agency', label: 'Choose the Right Agency' },
	{ id: 'web-design-san-antonio', label: 'Web Design in San Antonio' },
	{ id: 'trends', label: 'Web Design Trends' },
	{ id: 'conclusion', label: 'Conclusion' },
	{ id: 'ready-next-step', label: 'Ready to Take the Next Step?' },
	{ id: 'faq', label: 'FAQ' },
];

const principleCards = [
	{
		title: 'User Experience (UX)',
		description:
			'Your website should be easy to navigate, intuitive, and structured to help users quickly find what they are looking for.',
	},
	{
		title: 'Mobile Responsiveness',
		description:
			'Responsive web design is no longer optional. Your website must adapt seamlessly across desktop, tablet, and mobile screens.',
	},
	{
		title: 'Page Speed and Performance',
		description:
			'Optimized design improves load times, which supports both user experience and search visibility.',
	},
	{
		title: 'Visual Hierarchy',
		description:
			'Strategic use of headings, spacing, and contrast ensures that key messages stand out and feel easier to follow.',
	},
	{
		title: 'Clear Calls to Action (CTAs)',
		description:
			'Every page should have a purpose, with the next step made obvious and easy to take.',
	},
];

const performanceChecklist = [
	'Clearer messaging',
	'Faster load times',
	'Stronger CTAs',
	'Improved user flow',
	'Better conversion paths',
];

const ecosystemCards = [
	{
		title: 'SEO drives long-term traffic',
		description:
			'Search engine optimization creates durable visibility and attracts users who are already looking for what you offer.',
	},
	{
		title: 'Paid advertising generates immediate visibility',
		description:
			'Paid campaigns help put your business in front of high-intent users faster when timing matters.',
	},
	{
		title: 'Content builds trust and authority',
		description:
			'Helpful content supports credibility, answers questions, and strengthens the case for choosing your business.',
	},
	{
		title: 'Web design converts the opportunity',
		description:
			'Once users arrive, your website determines how clearly value is communicated and how easily visitors take action.',
	},
];

const websiteTypeCards = [
	{
		title: 'Standard business websites',
		description:
			'Designed to communicate services, establish credibility, and generate leads with core pages like home, services, about, and contact.',
		bestFor: 'Best for service-based businesses',
	},
	{
		title: 'Landing pages',
		description:
			'Built around a singular goal, removing distractions so users are guided toward one specific action.',
		bestFor: 'Best for targeted campaigns',
	},
	{
		title: 'Sales funnels',
		description:
			'Create a multi-step journey that builds interest over a sequence of interactions instead of showing everything at once.',
		bestFor: 'Best for guided offers',
	},
	{
		title: 'E-commerce websites',
		description:
			'Need to balance product presentation, navigation, checkout, and performance while still staying easy to use.',
		bestFor: 'Best for product sales',
	},
	{
		title: 'Membership platforms',
		description:
			'Require thoughtful restricted-access experiences that help users quickly find value and stay engaged over time.',
		bestFor: 'Best for ongoing access models',
	},
];

const growthCards = [
	{
		title: 'Attracting the right audience',
		description:
			'Visibility matters first. The right strategy helps the right users discover your business in the first place.',
	},
	{
		title: 'Engaging visitors with clear messaging',
		description:
			'Once people arrive, your messaging has to make the value clear and keep momentum moving forward.',
	},
	{
		title: 'Converting interest into action',
		description:
			'Strong structure, clear calls to action, and thoughtful user flow help turn attention into meaningful next steps.',
	},
];

const processSteps = [
	{
		number: '01',
		title: 'Discovery and Strategy',
		description: 'Understanding your business, audience, and objectives.',
	},
	{
		number: '02',
		title: 'Wireframing and Planning',
		description: 'Mapping out structure and user flow.',
	},
	{
		number: '03',
		title: 'Design',
		description: 'Creating the visual layout and brand alignment.',
	},
	{
		number: '04',
		title: 'Development',
		description:
			'Building the website with performance and functionality in mind.',
	},
	{
		number: '05',
		title: 'Optimization and Launch',
		description: 'Testing, refining, and preparing for real-world use.',
	},
];

const conversionPillars = [
	{
		title: 'Clear value proposition',
		description:
			'Users should immediately understand what you offer, why it matters, and why they should care.',
	},
	{
		title: 'Calls-to-action',
		description:
			'Clear direction removes hesitation and makes it easy for users to take the next step.',
	},
	{
		title: 'Trust signals',
		description:
			'Testimonials, case studies, and consistent branding help reassure visitors that your business is credible.',
	},
	{
		title: 'Guided user flow',
		description:
			'Each section should lead naturally into the next so the experience feels intentional rather than fragmented.',
	},
];

const templatePoints = [
	'Faster and lower upfront cost',
	'Limited flexibility',
	'Often generic and less optimized',
];

const customPoints = [
	'Built specifically for your business',
	'Fully optimized for performance and conversions',
	'Scalable as your business grows',
];

const mistakeCards = [
	'Slow loading speeds',
	'Poor mobile experience',
	'Cluttered layouts',
	'Weak or unclear calls to action',
	'Lack of strategic structure',
];

const agencyChecklist = [
	'Focus on strategy, not just visuals',
	'Understand conversion and user behavior',
	'Offer long-term support and optimization',
];

const auditBenefitCards = [
	{
		title: 'What’s working',
		description:
			'Identify the parts of your website that are already supporting visibility, trust, and conversions.',
	},
	{
		title: 'What’s underperforming',
		description:
			'Surface the friction points, missed opportunities, and structural gaps holding results back.',
	},
	{
		title: 'What changes will have the greatest impact',
		description:
			'Prioritize the improvements most likely to create meaningful gains in performance.',
	},
];

const faqItems = [
	{
		question: 'What does a web design agency do?',
		answer:
			'A web design agency plans, designs, and builds websites that are optimized for user experience, performance, and conversions.',
	},
	{
		question: 'How much does web design cost?',
		answer:
			'Costs vary depending on complexity, features, and customization. Professional web design services typically reflect the level of strategy and performance included.',
	},
	{
		question: 'How long does it take to build a website?',
		answer:
			'Most websites take anywhere from a few weeks to several months, depending on scope and requirements.',
	},
	{
		question: 'What is the difference between web design and web development?',
		answer:
			'Web design focuses on layout and user experience, while web development handles the technical build and functionality.',
	},
	{
		question: 'Why is web design important for SEO?',
		answer:
			'Web design impacts site structure, speed, and usability, all of which influence search engine rankings.',
	},
];

const articleSchema = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: 'Web Design: The Complete Guide to Building a High-Converting Website',
	description: pageDescription,
	mainEntityOfPage: pageUrl,
	author: {
		'@type': 'Organization',
		name: organizationName,
		url: organizationUrl,
	},
	publisher: {
		'@type': 'Organization',
		name: organizationName,
		url: organizationUrl,
	},
};

const faqSchema = {
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

function SectionHeader({ eyebrow, title, description, centered = false }) {
	return (
		<header
			className={`${styles.sectionHeader} ${centered ? styles.sectionHeaderCentered : ''}`.trim()}
		>
			{eyebrow ? <p className={styles.sectionEyebrow}>{eyebrow}</p> : null}
			<h2>{title}</h2>
			{description ? <p>{description}</p> : null}
		</header>
	);
}

function TableOfContents() {
	return (
		<nav className={styles.tocCard} aria-label='In this guide'>
			<p className={styles.tocTitle}>In this guide</p>
			<ul>
				{tocItems.map((item) => (
					<li key={item.id}>
						<a href={`#${item.id}`}>{item.label}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

function StrategicCtaBlock({
	id,
	title,
	body,
	secondaryBody,
	primaryHref,
	primaryLabel,
	secondaryHref,
	secondaryLabel,
	dark = false,
	children,
}) {
	return (
		<section
			id={id}
			className={`${styles.strategicBlock} ${dark ? styles.strategicBlockDark : styles.strategicBlockLight}`.trim()}
		>
			<div className={styles.strategicContent}>
				<h2>{title}</h2>
				{body ? <p>{body}</p> : null}
				{secondaryBody ? <p>{secondaryBody}</p> : null}
				{children}
				<div className={styles.blockActions}>
					<Link
						href={primaryHref}
						className={dark ? styles.goldButton : styles.blueButton}
					>
						{primaryLabel}
					</Link>
					{secondaryHref && secondaryLabel ? (
						<Link
							href={secondaryHref}
							className={dark ? styles.darkTextLink : styles.inlineActionLink}
						>
							{secondaryLabel}
						</Link>
					) : null}
				</div>
			</div>
		</section>
	);
}

function FaqAccordion() {
	return (
		<div className={styles.faqList}>
			{faqItems.map((item) => (
				<details key={item.question} className={styles.faqItem}>
					<summary>{item.question}</summary>
					<p>{item.answer}</p>
				</details>
			))}
		</div>
	);
}

export default function WebDesignGuidePage() {
	return (
		<div className={styles.pageShell}>
			<JsonLd data={articleSchema} />
			<JsonLd data={faqSchema} />
			<section className={styles.heroSection}>
				<div className={styles.container}>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.heroEyebrow}>Web Design Guide</p>
							<h1>
								Web Design: The Complete Guide to Building a High-Converting
								Website
							</h1>
							<p className={styles.heroLead}>
								Your website is often the first interaction potential customers
								have with your business. In many cases, it determines whether
								they stay, explore, and take action, or leave and never come
								back.
							</p>
							<p className={styles.heroLead}>
								That’s why web design isn’t just about appearance. It is about
								performance, strategy, and results. A well-executed web design
								builds trust, improves user experience, and drives conversions.
								Digital marketing drives traffic, visibility, and opportunity.
								Together they function as a powerful system. Your website
								determines what happens next. Whether you’re a local business or
								scaling nationally, your website should support growth, not
								simply exist online.
							</p>
							<div className={styles.heroActions}>
								<Link href={auditHref} className={styles.blueButton}>
									Request a Website Audit
								</Link>
								<Link href={webDesignHref} className={styles.secondaryButton}>
									Explore Web Design Services
								</Link>
							</div>
							<p className={styles.heroTrustLine}>
								Strategic design. Better performance. Clearer growth.
							</p>
						</div>

						<div className={styles.heroVisual} aria-hidden='true'>
							<div className={styles.heroBrowser}>
								<div className={styles.heroBrowserTop}>
									<span />
									<span />
									<span />
								</div>
								<div className={styles.heroStage}>
									<div className={styles.metricTagTraffic}>Traffic</div>
									<div className={styles.metricTagTrust}>Trust</div>
									<div className={styles.metricTagConversion}>Conversion</div>
									<div className={styles.metricTagGrowth}>Growth</div>
									<div className={styles.pathLine} />
									<div className={styles.pathNodeOne} />
									<div className={styles.pathNodeTwo} />
									<div className={styles.pathNodeThree} />
									<div className={styles.pathNodeFour} />
								</div>
								<div className={styles.heroMetricGrid}>
									<div className={styles.metricCard}>
										<span>Clarity</span>
										<strong>Message-first structure</strong>
									</div>
									<div className={styles.metricCard}>
										<span>Flow</span>
										<strong>Guided user decisions</strong>
									</div>
									<div className={styles.metricCard}>
										<span>Trust</span>
										<strong>Credibility built in</strong>
									</div>
									<div className={styles.metricCard}>
										<span>Performance</span>
										<strong>Built to convert</strong>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className={styles.mainSection}>
				<div className={styles.container}>
					<div className={styles.articleLayout}>
						<div className={styles.sidebarContainer}>
							<aside className={styles.sidebar}>
								<TableOfContents />
							</aside>
						</div>

						<article className={styles.articleBody}>
							<section
								id='why-most-websites-fail'
								className={styles.articleSection}
							>
								<SectionHeader title='Introduction: Why Most Websites Fail (And Why Yours Doesn’t Have To)' />
								<div className={styles.pullQuote}>
									<p>Most websites don’t fail because they lack effort.</p>
									<p>They fail because they lack intention.</p>
								</div>
								<p>
									On the surface, many business websites appear polished. They
									have modern layouts, attractive color schemes, and
									professionally written copy. Yet despite all of that, they
									quietly underperform. They fail to generate consistent leads.
									They struggle to convert visitors into customers. And over
									time, they become little more than a digital placeholder,
									something that exists, but does not contribute meaningfully to
									business growth.
								</p>
								<p>
									The problem is not design alone. The problem is that most
									websites are built with the wrong objective. Web design isn’t
									just about how your website looks. It directly impacts how
									your business performs online.
								</p>
								<p className={styles.highlightStatement}>
									They are treated as digital brochures instead of strategic
									tools.
								</p>
								<p>
									Today’s buyer behavior has fundamentally changed. People no
									longer rely on chance encounters or casual referrals alone.
									Instead, they actively search, compare, and evaluate
									businesses online before making a decision. Your website is
									often the first, and sometimes the only, opportunity you have
									to make an impression.
								</p>
								<p>
									In that moment, your website must do more than look good. It
									must communicate value, establish trust, and guide action.
								</p>
								<p>
									This is where web design becomes something far more powerful
									than aesthetics. Done correctly, it becomes a system that
									supports your business at every stage of the customer journey.
								</p>
							</section>

							<StrategicCtaBlock
								id='website-performing'
								title='When Your Website Isn’t Performing, There’s a Reason'
								body='Most websites don’t fail because of effort. They fail because of structure.'
								secondaryBody='On the surface, everything may look right. The design is clean. The messaging seems clear. The site functions as expected. But underneath, there are gaps, missed opportunities that prevent your website from generating consistent results.'
								primaryHref={auditHref}
								primaryLabel='Request a Website Audit'
								secondaryHref={webDesignHref}
								secondaryLabel='Learn how we approach web design'
								dark
							>
								<p>
									If your website isn’t producing leads, driving engagement, or
									supporting your business goals, it is not random. It is a
									performance issue, and performance can be improved.
								</p>
								<p>
									The key is identifying where your website is falling short and
									what changes will actually move the needle.
								</p>
								<p>
									At Rock Digital, we approach web design from a different
									perspective. We don’t see websites as standalone assets. We
									see them as integrated growth systems, designed with purpose,
									built with intention, and optimized for performance.
								</p>
								<p>
									This guide will walk you through exactly what that means, and
									how to apply it.
								</p>
							</StrategicCtaBlock>

							<section
								id='what-is-web-design'
								className={styles.articleSection}
							>
								<SectionHeader title='What Is Web Design (and Why It Matters for Your Business)' />
								<p>
									Most businesses misunderstand web design, and it costs them
									revenue every day.
								</p>
								<p>
									Many business owners associate it primarily with visuals,
									colors, layouts, fonts, and imagery. While those elements are
									important, they represent only a fraction of what web design
									truly encompasses.
								</p>
								<p>
									Web design is the process of planning, structuring, and
									creating a website that delivers both visual appeal and
									functional usability. A professional web design ensures that
									your site is easy to navigate, aligned with your brand, and
									optimized to guide users toward taking action.
								</p>
								<p>
									It anticipates user questions, removes friction, and creates a
									clear path from curiosity to action. It balances clarity with
									persuasion, structure with flexibility, and aesthetics with
									functionality.
								</p>
								<p>
									For businesses, web design plays a direct role in how
									customers perceive credibility. A poorly designed website can
									instantly reduce trust, while a clean, modern, and strategic
									design can position your business as established and reliable.
								</p>
								<p>
									Web design for business goes beyond aesthetics. It includes
									layout, user flow, responsiveness, speed, and conversion
									strategy, all working together to create a seamless experience
									for your visitors.
								</p>
								<p>
									For a practical look at how these principles are implemented
									in real projects, see how our{' '}
									<Link href={webDesignHref} className={styles.textLink}>
										professional web design process
									</Link>{' '}
									is structured to support long-term business growth.
								</p>
							</section>

							<section
								id='why-web-design-critical'
								className={styles.articleSection}
							>
								<SectionHeader title='Why Web Design Is Critical for Online Success' />
								<p>
									There was a time when having a website alone was enough to
									establish credibility. That is no longer the case.
								</p>
								<p>
									In today’s digital landscape, your website is your foundation.
									Every marketing effort, whether it’s SEO, paid ads, or social
									media, leads users back to your website. If your web design is
									not optimized, those efforts lose effectiveness.
								</p>
								<p>A strong web design impacts:</p>
								<ul className={styles.editorialList}>
									<li>
										<strong>First impressions</strong> — Users form opinions
										about your site within seconds
									</li>
									<li>
										<strong>User engagement</strong> — Clean layouts and
										intuitive navigation keep users on your site longer
									</li>
									<li>
										<strong>Conversion rates</strong> — Strategic design guides
										users toward taking action
									</li>
									<li>
										<strong>Search visibility</strong> — Search engines
										prioritize well-structured, fast-loading websites
									</li>
								</ul>
								<p>
									This is why businesses investing in{' '}
									<Link href={webDesignHref} className={styles.textLink}>
										conversion-focused web design
									</Link>{' '}
									consistently outperform those relying on outdated or
									template-based websites.
								</p>
								<p>
									A professional web design agency understands that your website
									is not just a digital brochure. It’s a tool designed to
									generate leads, sales, and long-term growth.
								</p>
							</section>

							<section id='core-principles' className={styles.articleSection}>
								<SectionHeader title='Core Principles of Effective Web Design' />
								<p>
									High-performing websites are not created by chance. They are
									built on a set of principles that prioritize clarity,
									usability, and strategic intent.
								</p>
								<p>
									A successful web design is built on a foundation of proven
									principles that balance aesthetics with functionality.
								</p>
								<div className={styles.principlesGrid}>
									{principleCards.map((card) => (
										<article key={card.title} className={styles.principleCard}>
											<div className={styles.cardAccent} aria-hidden='true' />
											<h3>{card.title}</h3>
											<p>{card.description}</p>
										</article>
									))}
								</div>
							</section>

							<section
								id='website-should-perform'
								className={styles.articleSection}
							>
								<div className={styles.performanceSplit}>
									<div>
										<SectionHeader title='A Website Should Do More Than Exist—It Should Perform' />
										<p>
											Many businesses invest in a website once, launch it, and
											move on.
										</p>
										<p>
											But high-performing websites are not static. They are
											built, tested, refined, and continuously improved.
										</p>
										<p>
											Every element, from layout and messaging to page speed and
											user flow, plays a role in how effectively your website
											performs.
										</p>
										<p>
											Small improvements compound over time. Clearer messaging
											increases engagement. Faster load times reduce drop-off.
											Stronger calls to action improve conversion rates.
										</p>
										<p>
											The difference between a website that exists and one that
											performs is intention.
										</p>
										<div className={styles.inlineActionWrap}>
											<Link href={auditHref} className={styles.blueButton}>
												Request a Website Audit
											</Link>
										</div>
									</div>
									<div className={styles.performanceCard}>
										<p className={styles.performanceCardTitle}>
											Performance checklist
										</p>
										<ul className={styles.checkList}>
											{performanceChecklist.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>
									</div>
								</div>
							</section>

							<section
								id='web-design-digital-marketing'
								className={styles.articleSection}
							>
								<SectionHeader title='Web Design and Digital Marketing: How They Work Together' />
								<p>A well-designed website without traffic is invisible.</p>
								<p>
									A strong marketing campaign without a high-performing website
									is inefficient.
								</p>
								<p>Real growth happens when both work together.</p>
								<p>
									Digital marketing is responsible for bringing users to your
									website, through search engines, paid ads, content, and other
									channels. But once those users arrive, your website determines
									what happens next.
								</p>
								<p>This is where web design plays a critical role.</p>
								<p>
									Search engine optimization (SEO) drives long-term, organic
									traffic. Paid advertising generates immediate visibility.
									Content marketing builds trust and authority over time. But
									none of these efforts reach their full potential without a
									website designed to convert.
								</p>
								<p>Your web design influences:</p>
								<ul className={styles.editorialList}>
									<li>How users navigate your site</li>
									<li>How clearly your value is communicated</li>
									<li>How easily visitors can take action</li>
								</ul>
								<p>
									When web design and digital marketing are aligned, your
									website becomes more than a destination. It becomes a
									conversion engine.
								</p>
								<p>
									Traffic is no longer just traffic. It becomes opportunity.
								</p>
								<div className={styles.ecosystemGrid}>
									{ecosystemCards.map((card) => (
										<article key={card.title} className={styles.ecosystemCard}>
											<h3>{card.title}</h3>
											<p>{card.description}</p>
										</article>
									))}
								</div>
								<p>
									If you want to understand how traffic is generated in the
									first place, explore our guide on digital marketing strategy
									and how it connects directly to website performance.
								</p>
							</section>

							<section id='types-of-websites' className={styles.articleSection}>
								<SectionHeader title='Understanding the Different Types of Websites' />
								<p>
									Not every business requires the same type of website. The
									structure and functionality of your site should be determined
									by your specific goals, audience, and business model.
								</p>
								<p>
									For many service-based businesses, a standard business website
									serves as the foundation. This type of website is designed to
									communicate services, establish credibility, and generate
									leads. It typically includes key pages such as a homepage,
									service pages, an about section, and contact information.
								</p>
								<p>
									However, in situations where a business is running targeted
									marketing campaigns, landing pages become more relevant. These
									pages are designed with a singular focus, guiding users toward
									one specific action. They remove distractions and streamline
									the experience, making them highly effective for advertising
									and promotional efforts.
								</p>
								<p>
									Sales funnels take this concept further by creating a
									multi-step journey. Instead of presenting all information at
									once, funnels guide users through a sequence of interactions,
									each designed to build interest and move them closer to a
									decision.
								</p>
								<p>
									For businesses that sell products, e-commerce websites
									introduce additional complexity. These sites must balance
									product presentation, navigation, and checkout processes while
									maintaining performance and usability.
								</p>
								<p>
									Membership platforms, on the other hand, are built around
									restricted access and ongoing engagement. They require
									thoughtful design to ensure that users can easily navigate
									content and find value within the experience.
								</p>
								<p>
									The key is not choosing the most advanced or visually
									impressive option. It is choosing the structure that aligns
									with your business objectives.
								</p>
								<div className={styles.websiteTypesGrid}>
									{websiteTypeCards.map((card) => (
										<article
											key={card.title}
											className={styles.websiteTypeCard}
										>
											<span>{card.bestFor}</span>
											<h3>{card.title}</h3>
											<p>{card.description}</p>
										</article>
									))}
								</div>
							</section>

							<section
								id='why-web-design-alone-isnt-enough'
								className={`${styles.articleSection} ${styles.darkInsightSection}`}
							>
								<SectionHeader title='Why Web Design Alone Isn’t Enough' />
								<p>
									A high-quality website is essential, but it does not operate
									in isolation.
								</p>
								<p>
									Even the most well-designed website cannot generate results
									without visibility. And traffic alone is not enough if the
									website is not structured to convert.
								</p>
								<p>
									This is why web design must be part of a broader digital
									strategy.
								</p>
								<p>
									Your website acts as the central hub of your online presence.
									Every marketing effort, whether it’s SEO, paid advertising, or
									content, leads users back to it. If the foundation is not
									strong, those efforts lose effectiveness.
								</p>
								<p>
									When web design is aligned with a clear strategy, it supports
									every stage of the customer journey:
								</p>
								<div className={styles.darkInsightGrid}>
									{growthCards.map((card) => (
										<article
											key={card.title}
											className={styles.darkInsightCard}
										>
											<h3>{card.title}</h3>
											<p>{card.description}</p>
										</article>
									))}
								</div>
								<p>
									This is where web design shifts from being a standalone asset
									to becoming part of a growth system.
								</p>
								<div className={styles.blockActions}>
									<Link href={digitalGrowthHref} className={styles.goldButton}>
										Explore Digital Growth Strategy
									</Link>
									<Link href={auditHref} className={styles.darkTextLink}>
										Request a Website Audit
									</Link>
								</div>
							</section>

							<section
								id='web-design-process'
								className={styles.articleSection}
							>
								<SectionHeader title='The Web Design Process' />
								<p>
									A professional web design process follows a structured
									approach to ensure your website aligns with your business
									goals.
								</p>
								<div className={styles.timeline}>
									{processSteps.map((step, index) => (
										<article
											key={step.number}
											className={`${styles.timelineStep} ${
												index % 2 === 0
													? styles.timelineStepLeft
													: styles.timelineStepRight
											}`.trim()}
										>
											<div className={styles.timelineBadge}>{step.number}</div>
											<div className={styles.timelineCard}>
												<h3>{step.title}</h3>
												<p>{step.description}</p>
											</div>
										</article>
									))}
								</div>
								<p>
									A strategic web design process ensures your website is built
									with purpose, not guesswork.
								</p>
							</section>

							<section
								id='what-makes-convert'
								className={styles.articleSection}
							>
								<SectionHeader title='What Makes a Website Convert' />
								<p>
									A visually appealing website is not enough. Conversion
									requires intention.
								</p>
								<p>
									At the heart of every high-converting website is a clear value
									proposition. Users must immediately understand what you offer
									and why it matters to them. This clarity removes hesitation
									and creates momentum.
								</p>
								<p>
									Calls-to-action play a critical role in guiding behavior.
									Without clear direction, users are left to navigate the
									website on their own. Effective CTAs provide that direction,
									making it easy for users to take the next step.
								</p>
								<p>
									Trust is another essential component. People are naturally
									cautious when engaging with a business online. They look for
									signals that indicate credibility and reliability.
									Testimonials, case studies, and consistent branding all
									contribute to building that trust.
								</p>
								<p>
									Equally important is the flow of the user experience. A
									website should feel like a guided journey rather than a
									collection of disconnected pages. Each section should lead
									naturally into the next, creating a sense of progression.
								</p>
								<p>
									When these elements come together, the result is a website
									that not only attracts visitors, but converts them.
								</p>
								<div className={styles.conversionGrid}>
									{conversionPillars.map((pillar) => (
										<article
											key={pillar.title}
											className={styles.conversionCard}
										>
											<h3>{pillar.title}</h3>
											<p>{pillar.description}</p>
										</article>
									))}
								</div>
							</section>

							<section
								id='custom-vs-templates'
								className={styles.articleSection}
							>
								<SectionHeader title='Custom Web Design vs Templates' />
								<p>
									When building a website, businesses often choose between
									custom web design and pre-built templates.
								</p>
								<div className={styles.comparisonGrid}>
									<article className={styles.comparisonCard}>
										<h3>Template-Based Design</h3>
										<ul className={styles.cardList}>
											{templatePoints.map((point) => (
												<li key={point}>{point}</li>
											))}
										</ul>
									</article>
									<article
										className={`${styles.comparisonCard} ${styles.comparisonCardFeatured}`}
									>
										<span className={styles.comparisonBadge}>
											Better long-term foundation
										</span>
										<h3>Custom Web Design</h3>
										<ul className={styles.cardList}>
											{customPoints.map((point) => (
												<li key={point}>{point}</li>
											))}
										</ul>
									</article>
								</div>
								<p>
									Many businesses start with templates, but eventually
									transition to{' '}
									<Link href={webDesignHref} className={styles.textLink}>
										custom web design solutions
									</Link>{' '}
									when they begin focusing on performance and scalability.
								</p>
								<p>
									For businesses focused on long-term growth, custom web design
									provides a stronger foundation and better results over time.
								</p>
							</section>

							<section id='common-mistakes' className={styles.articleSection}>
								<SectionHeader title='Common Web Design Mistakes to Avoid' />
								<p>
									Even small mistakes in web design can impact performance and
									conversions.
								</p>
								<p>Some of the most common issues include:</p>
								<div className={styles.warningGrid}>
									{mistakeCards.map((mistake) => (
										<article key={mistake} className={styles.warningCard}>
											<h3>{mistake}</h3>
										</article>
									))}
								</div>
								<p>
									Avoiding these mistakes ensures your website supports your
									business instead of holding it back.
								</p>
							</section>

							<section id='investment' className={styles.articleSection}>
								<SectionHeader title='Understanding the Investment in Web Design' />
								<p>
									The cost of web design varies widely, and understanding why
									can help you make better decisions.
								</p>
								<p>
									At a basic level, lower-cost websites often rely on templates
									and minimal customization. They may be suitable for simple
									needs, but they rarely provide the level of performance
									required for growth.
								</p>
								<p>
									Higher-end websites involve a deeper level of strategy,
									customization, and optimization. They are built with specific
									goals in mind and designed to deliver measurable results.
								</p>
								<div className={styles.inlineQuote}>
									<p>
										The difference between the two is not just price—it’s value.
									</p>
								</div>
								<p>
									A well-designed website can generate leads, increase
									conversions, and support long-term growth. In this sense, it
									should be viewed as an investment rather than an expense.
								</p>
							</section>

							<section id='choose-agency' className={styles.articleSection}>
								<SectionHeader title='How to Choose the Right Web Design Agency' />
								<p>
									Choosing the right web design agency is one of the most
									important decisions for your business.
								</p>
								<div className={styles.checklistCard}>
									<p className={styles.checklistTitle}>
										A strong web design company should:
									</p>
									<ul className={styles.checkListLight}>
										{agencyChecklist.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
								<p>
									Not all web design services are the same. The right partner
									will approach your website as a growth system, not just a
									design project.
								</p>
								<div className={styles.inlineActionWrap}>
									<Link
										href={webDesignHref}
										className={styles.inlineActionLink}
									>
										Learn more about our Web Design Services
									</Link>
								</div>
							</section>

							<section
								id='web-design-san-antonio'
								className={styles.articleSection}
							>
								<SectionHeader title='Web Design in San Antonio' />
								<div className={styles.localAccent} aria-hidden='true'>
									<span className={styles.mapPin} />
									<span className={styles.localDivider} />
								</div>
								<p>
									Businesses in San Antonio are facing increasing competition
									online. Having a professionally designed website is essential
									for standing out in a crowded market.
								</p>
								<p>
									Web design in San Antonio requires an understanding of both
									local audiences and broader digital trends. A well-optimized
									website helps local businesses improve visibility, attract
									qualified traffic, and convert visitors into customers.
								</p>
								<div className={styles.inlineActionWrap}>
									<Link
										href={sanAntonioHref}
										className={styles.inlineActionLink}
									>
										Explore Web Design in San Antonio
									</Link>
								</div>
							</section>

							<section id='trends' className={styles.articleSection}>
								<div className={styles.trendsSplit}>
									<div>
										<SectionHeader title='Web Design Trends to Watch' />
										<p>A website should never be considered complete.</p>
										<p>
											As user behavior evolves, market conditions change, and
											new opportunities emerge, your website must adapt.
										</p>
										<p>
											Ongoing optimization involves continuously analyzing
											performance, identifying areas for improvement, and making
											adjustments that enhance effectiveness.
										</p>
										<p>
											This may include refining messaging, improving user flow,
											or testing different design elements.
										</p>
										<p>
											Over time, these incremental improvements can lead to
											significant gains in performance.
										</p>
									</div>
									<div className={styles.loopCard} aria-hidden='true'>
										<div>Analyze</div>
										<div>Improve</div>
										<div>Test</div>
										<div>Refine</div>
									</div>
								</div>
							</section>

							<section id='conclusion' className={styles.articleSection}>
								<SectionHeader title='Conclusion: Your Website Should Drive Results' />
								<p>
									Your website should do more than exist—it should work for your
									business. A strategic, professional web design helps you
									attract the right audience, build trust, and convert visitors
									into customers. When combined with digital marketing, your
									website becomes a powerful system for growth.
								</p>
								<p>
									If your website isn’t converting leads consistently, it’s not
									a traffic problem. It’s a performance problem.
								</p>
								<p>And performance can be fixed.</p>
								<p>
									A strategic, well-executed web design does more than make your
									business look good. It creates clarity, builds trust, and
									guides users toward meaningful action. When combined with the
									right strategy, your website becomes a system that supports
									long-term growth.
								</p>
								<p>
									The first step is understanding where your current website
									stands, and where the real opportunities are.
								</p>
							</section>
						</article>
					</div>
				</div>
			</main>

			<section id='ready-next-step' className={styles.finalCtaSection}>
				<div className={styles.container}>
					<div className={styles.finalCtaShell}>
						<div className={styles.finalCtaCopy}>
							<p className={styles.finalEyebrow}>
								Ready to Take the Next Step?
							</p>
							<h2>
								The first step is understanding where your current website
								stands—and where the real opportunities are.
							</h2>
							<p>
								Request a Website Audit to get a clear breakdown of your site’s
								performance, or explore our{' '}
								<Link href={webDesignHref} className={styles.textLink}>
									web design services
								</Link>{' '}
								to see how we build high-performing websites from the ground
								up.
							</p>
							<p>
								With that insight, you can make informed decisions and move
								forward with confidence.
							</p>
						</div>
						<div className={styles.auditBenefitsGrid}>
							{auditBenefitCards.map((card) => (
								<article key={card.title} className={styles.auditBenefitCard}>
									<h3>{card.title}</h3>
									<p>{card.description}</p>
								</article>
							))}
						</div>
						<div className={styles.finalActions}>
							<Link href={auditHref} className={styles.goldButton}>
								Request a Website Audit
							</Link>
							<Link href={webDesignHref} className={styles.darkTextLink}>
								View Web Design Services
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section id='faq' className={styles.faqSection}>
				<div className={styles.container}>
					<div className={styles.faqShell}>
						<SectionHeader eyebrow='FAQ' title='FAQ Section' />
						<FaqAccordion />
					</div>
				</div>
			</section>
		</div>
	);
}
