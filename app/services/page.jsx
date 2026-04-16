import Image from 'next/image';
import Link from 'next/link';

import WebDesignService from '@/assets/web-design-service.webp';
import SeoService from '@/assets/seo-service.webp';
import WebsiteImprovement from '@/assets/website-improvement-maintenance.webp';

import SolutionsSection from './SolutionsSection';
import styles from './services.module.css';

export const metadata = {
	title: 'Web Design Services',
	description:
		'Explore Rock Digital services including web design and development, SEO, PPC, and website maintenance to grow traffic, improve rankings, and convert more customers online.',
};

const serviceCards = [
	{
		title: "We'll build what you need...",
		description:
			"Effortlessly dominate your competition with our web design and development service. You can expect to get ranked in search engines and reach customers on any platform with a lightning fast, mobile friendly, and search engine optimized website design. Your users will enjoy interacting with your business' website.",
		image: WebDesignService,
		imageAlt: 'Illustration representing website design and development.',
		href: '/website-design-and-development',
		variant: 'accent',
	},
	{
		title: "We'll help you grow...",
		description:
			'Know what your customers are searching for and attract the right customers to your website. The truth is that generating traffic is a never ending task, which is why we offer custom made solutions to handle your website traffic. From PPC (Pay-Per-Click) to organic traffic, we have the right solutions to quickly get you laser targeted traffic while ranking you higher in Google.',
		image: SeoService,
		imageAlt: 'Photo representing traffic, SEO, and audience growth.',
		href: '/website-improvement',
		variant: 'default',
		reversed: true,
	},
	{
		title: "We'll care for your investment...",
		description:
			'Stay ahead of your competition and make sure your website continues to deliver positive returns on your investment. Every website requires upkeep and continual improvement to operate properly. We take these stresses away from you with custom website improvement packages tailored to fit your business vision.',
		image: WebsiteImprovement,
		imageAlt: 'Website maintenance and optimization interface preview.',
		href: '/website-maintenance',
		variant: 'accent',
	},
];

const solutions = [
	{
		label: 'Web Design',
		href: '/web-design',
		paragraph1:
			'Custom web design built with purpose—not just to look impressive, but to perform. We create visually refined, conversion-focused experiences that guide your visitors, build trust, and support your business goals. Every detail is intentional—turning your website into a strategic asset for growth, not just a digital presence.',
		paragraph2:
			'That means clear positioning, intentional design decisions, and user-focused layouts that drive action and support long-term performance—not surface-level aesthetics.',
	},
	{
		label: 'Web Development',
		href: '/website-design-and-development',
		paragraph1:
			'Custom web development built for performance—not just to function, but to scale. We build fast, reliable, and maintainable websites that deliver seamless user experiences across every device. Every line of code is intentional—ensuring your website runs efficiently, adapts to growth, and supports your business long after launch.',
		paragraph2:
			'That means clean architecture, optimized performance, and scalable systems that work behind the scenes—so your website stays fast, stable, and ready to grow with you.',
	},
	{
		label: 'Traffic & SEO Growth',
		href: '/website-improvement',
		paragraph1:
			'Traffic & SEO growth built with strategy—not just to increase visibility, but to attract the right audience. We help your business get found through search by improving your site’s structure, content, and authority. Every move is intentional—focused on bringing in qualified traffic that supports real, measurable growth.',
		paragraph2:
			'That means targeted keyword strategy, on-page optimization, and continuous refinement that drives visibility, builds trust, and turns search traffic into meaningful results.',
	},
	{
		label: 'Ongoing Optimization & Growth',
		href: '/website-maintenance',
		paragraph1:
			'Ongoing optimization and growth built for momentum—not just to maintain your website, but to continuously improve it. We monitor performance, identify opportunities, and refine key areas to keep your site aligned with your goals. Every adjustment is intentional—focused on strengthening results over time, not just maintaining the status quo.',
		paragraph2:
			'That means continuous improvements, data-informed decisions, and strategic updates that keep your website performing, adapting, and growing alongside your business.',
	},
];

const Services = () => {
	return (
		<div className={styles.page}>
			<section className={styles.heroSection}>
				<div className={styles.heroInner}>
					<h1 className={styles.heroTitle}>
						Services Built to Strengthen Your Online Presence
					</h1>

					<div className={styles.heroDivider} aria-hidden='true' />

					<div className={styles.heroContent}>
						<p className={styles.heroCopy}>
							From conversion-focused websites to ongoing growth support, we
							help businesses build, refine, and scale their digital presence
							with intention, transforming websites into strategic assets
							designed to attract, convert, and drive long-term growth.
						</p>
						<br />
						<p className={styles.heroCopy}>
							It all starts with finding out where you currently stand.
						</p>

						<Link href='/website-audit' className={styles.primaryButton}>
							Request a Website Audit
						</Link>
					</div>
				</div>
			</section>

			<section className={styles.helpSection}>
				<div className={styles.sectionInner}>
					<h2 className={styles.sectionTitle}>How We Help</h2>
				</div>
			</section>

			<section className={styles.servicesSection}>
				<div className={styles.servicesInner}>
					{serviceCards.map((card) => (
						<article
							key={card.title}
							className={`${styles.serviceCard} ${
								card.variant === 'accent' ? styles.serviceCardAccent : ''
							} ${card.reversed ? styles.serviceCardReversed : ''}`.trim()}
						>
							<div className={styles.serviceCopy}>
								<h3 className={styles.serviceTitle}>{card.title}</h3>
								<p className={styles.serviceText}>{card.description}</p>
							</div>

							<Link href={card.href} className={styles.serviceImageLink}>
								<div className={styles.serviceImageFrame}>
									<Image
										src={card.image}
										alt={card.imageAlt}
										fill
										sizes='(max-width: 767px) 100vw, (max-width: 1023px) 42vw, 550px'
									/>
								</div>
							</Link>
						</article>
					))}
				</div>
			</section>

			<section className={styles.solutionsSection}>
				<div className={styles.solutionsInner}>
					<div className={styles.solutionsIntro}>
						<h2 className={styles.sectionTitle}>Solutions</h2>
						<p className={styles.solutionsLead}>
							Everything we do is built around one goal, turning your website
							into a high-performing asset that attracts, converts, and scales
							your business.
						</p>
					</div>
					<SolutionsSection solutions={solutions} />
				</div>
			</section>

			<section className={styles.auditSection}>
				<div className={styles.auditInner}>
					<h2 className={styles.auditTitle}>Not sure what you need yet?</h2>
					<p className={styles.auditCopy}>
						We&apos;ll walk you through exactly what&apos;s holding your website
						back, and what to do about it.
					</p>
					<Link href='/website-audit' className={styles.primaryButton}>
						Request a Website Audit
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Services;
