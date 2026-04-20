import Link from 'next/link';

import styles from './webDesign.module.css';

export const metadata = {
	title: 'Web Design That Drives Growth',
	description:
		'Strategic web design services built to improve user experience, increase conversions, and help your business grow online.',
};

const features = [
	{
		title: 'Strategy-Driven',
		description:
			'We start with your business goals and user behavior to build the right solution.',
		icon: '/web-design/icon-target.svg',
	},
	{
		title: 'User-Focused',
		description:
			'We design intuitive experiences that engage visitors and guide them to take action.',
		icon: '/web-design/icon-users.svg',
	},
	{
		title: 'Conversion-Minded',
		description:
			'Every layout, section, and interaction is designed to turn visitors into customers.',
		icon: '/web-design/icon-growth.svg',
	},
	{
		title: 'Performance Built-in',
		description:
			'Fast loading, mobile-ready, and built with clean code for long-term performance.',
		icon: '/web-design/icon-speed.svg',
	},
];

const processSteps = [
	{
		title: 'Discover',
		description:
			'We learn about your business, audience, and goals to define the right strategy.',
	},
	{
		title: 'Plan & Strategize',
		description:
			'We map out the structure, user flow, and key elements that will drive results.',
	},
	{
		title: 'Design',
		description:
			'We create a custom design that’s on-brand, user-friendly, and built to convert.',
	},
	{
		title: 'Develop',
		description:
			'We build a fast, secure, and scalable website with clean, efficient code.',
	},
	{
		title: 'Launch & Optimize',
		description:
			'We launch your site and continuously refine for better performance.',
	},
];

const approachPoints = [
	'Custom design tailored to your brand',
	'Built for speed, SEO, and mobile performance',
	'Clear messaging that builds trust',
	'Designed to convert and scale with your business',
];

const caseStudyPoints = [
	'Clean, modern design that builds trust',
	'Streamlined user journey and clear calls-to-action',
	'Mobile-optimized for better conversions on the go',
];

const faqs = [
	{
		question: 'How long does it take to design a website?',
		answer:
			'Most custom website projects take 4 to 8 weeks, depending on the number of pages, content needs, features, and feedback rounds. After the discovery phase, we’ll give you a clear timeline so you know exactly what to expect before design begins.',
	},
	{
		question: 'Do you provide copywriting?',
		answer:
			'Yes. We can help shape your messaging, write conversion-focused page copy, and organize your content so visitors understand what you offer and know what action to take next.',
	},
	{
		question: 'Will my website be mobile-friendly?',
		answer:
			'Yes. Every website we design is built to work across desktop, tablet, and mobile devices. We prioritize responsive layouts, fast-loading assets, readable typography, and clear calls-to-action on every screen size.',
	},
	{
		question: 'What platform do you build on?',
		answer:
			'We choose the platform based on your goals, content needs, and long-term growth plans. For many custom builds, we use modern web frameworks like Next.js, and we can also recommend CMS options when your team needs easy content management.',
	},
	{
		question: 'Can you redesign my existing website?',
		answer:
			'Absolutely. We can audit your current website, identify what is holding it back, and redesign the experience around clearer messaging, stronger user flow, better performance, and improved conversion opportunities.',
	},
	{
		question: 'Do you offer ongoing support?',
		answer:
			'Yes. After launch, we can support updates, improvements, performance monitoring, optimization, and ongoing growth needs so your website continues to work for your business over time.',
	},
];

const ctaPoints = [
	'Custom strategy for your business',
	'Designed to convert and grow',
	'Built for performance and scalability',
	'Ongoing support when you need it',
];

const CheckList = ({ items, light = false }) => (
	<ul className={`${styles.checkList} ${light ? styles.checkListLight : ''}`}>
		{items.map((item) => (
			<li key={item}>{item}</li>
		))}
	</ul>
);

const WebDesignPage = () => {
	return (
		<div className={styles.page}>
			<section className={styles.hero}>
				<div className={styles.heroInner}>
					<div className={styles.heroCopy}>
						<p className={styles.eyebrow}>Web Design That Drives Growth</p>
						<h1>
							<span>Strategic Websites.</span>
							<span>Built to Perform.</span>
						</h1>
						<p className={styles.heroDescription}>
							We design high-converting websites that combine strategy, user
							experience (UX), and performance to turn visitors into customers.
						</p>
						<div className={styles.heroActions}>
							<Link href='/website-audit' className={styles.primaryButton}>
								Request a Website Audit
							</Link>
							<a href='#process' className={styles.secondaryButton}>
								See Our Process
							</a>
						</div>
					</div>
					<div className={styles.heroImageWrap} aria-hidden='true'>
						<img src='/web-design/hero-devices.png' alt='' />
					</div>
				</div>
			</section>

			<section className={styles.purposeSection}>
				<div className={styles.sectionInner}>
					<div className={styles.purposeIntro}>
						<div>
							<p className={styles.darkEyebrow}>More than a pretty website</p>
							<h2>
								<span>We design with purpose.</span>
								<span>Every detail has a reason.</span>
							</h2>
						</div>
						<p className={styles.purposeLead}>
							Great Design isn’t just how a website looks... <br /> It’s how it works
							for your business and your customers.
						</p>
					</div>

					<div className={styles.featureGrid}>
						{features.map((feature) => (
							<article className={styles.featureCard} key={feature.title}>
								<img src={feature.icon} alt='' aria-hidden='true' />
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.processSection} id='process'>
				<div className={styles.sectionInner}>
					<p className={styles.eyebrow}>Our Design Process</p>
					<h2>
						<span>A clear process.</span>
						<span>Real results.</span>
					</h2>
					<div className={styles.timeline}>
						{processSteps.map((step, index) => (
							<article className={styles.step} key={step.title}>
								<div className={styles.stepNumber}>{index + 1}</div>
								<h3>{step.title}</h3>
								<p>{step.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.approachSection}>
				<div className={styles.approachInner}>
					<div className={styles.approachCopy}>
						<p className={styles.darkEyebrow}>Our Approach</p>
						<h2>
							<span>Good design is obvious.</span>
							<span>Great design is invisible.</span>
						</h2>
						<p className={styles.bodyCopy}>
							We combine strategy, design, and technology to create websites
							that not only look incredible... but drive real business growth.
						</p>
						<CheckList items={approachPoints} />
					</div>
					<div className={styles.approachImage} aria-hidden='true'>
						<img src='/web-design/approach-preview.png' alt='' />
					</div>
				</div>
			</section>

			<section className={styles.caseStudySection}>
				<div className={styles.caseStudyInner}>
					<div className={styles.caseStudyCopy}>
						<p className={`${styles.eyebrow} ${styles.caseStudyLabel}`}>
							Real Project. Real Impact
						</p>
						<h2>
							<span>A website that reflects</span>
							<span>the brand and drives results.</span>
						</h2>
						<p className={styles.caseStudyText}>
							For a local townhome association, we redesigned their website to
							improve user experience, communicate their value clearly, and turn
							more visitors into booked appointments.
						</p>
						<CheckList items={caseStudyPoints} light />
						<Link href='/case-studies/chateau-dijon-townhomes-web-design' className={styles.primaryButton}>
							View Project Details
						</Link>
					</div>
					<div className={styles.caseStudyImage} aria-hidden='true'>
						<img src='/web-design/case-study-preview.png' alt='' />
					</div>
				</div>
			</section>

			<section className={styles.faqSection}>
				<div className={styles.faqInner}>
					<div className={styles.faqHeading}>
						<p className={styles.darkEyebrow}>FAQ</p>
						<h2>
							<span>Frequently Asked</span>
							<span>Questions</span>
						</h2>
					</div>
					<div className={styles.faqGrid}>
						{faqs.map((faq) => (
							<details className={styles.faqItem} key={faq.question}>
								<summary>
									<span>{faq.question}</span>
									<span className={styles.faqIcon} aria-hidden='true'>
										+
									</span>
								</summary>
								<p className={styles.faqAnswer}>{faq.answer}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<section className={styles.ctaSection}>
				<div className={styles.ctaInner}>
					<div className={styles.ctaHeading}>
						<p className={styles.eyebrow}>Ready to Build a Website</p>
						<h2>Let’s build a website that works as hard as you do.</h2>
					</div>
					<CheckList items={ctaPoints} light />
					<div className={styles.ctaAction}>
						<Link href='/website-audit' className={styles.primaryButton}>
							Request a Website Audit
						</Link>
						<p>
							No pressure. Just expert insights. Let’s see how we can help.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default WebDesignPage;
