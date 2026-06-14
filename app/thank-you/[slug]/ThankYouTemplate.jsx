import Image from 'next/image';
import Link from 'next/link';

import styles from './thankYou.module.css';

const nextStepCards = [
	{
		title: 'I Need a Better Website',
		description:
			'Build a website designed to generate leads and support long-term growth.',
		cta: 'Explore Web Design',
		href: '/web-design',
	},
	{
		title: 'I Need More Traffic',
		description:
			'Increase visibility through SEO, content, and digital growth strategies.',
		cta: 'Explore Digital Marketing',
		href: '/digital-marketing',
	},
	{
		title: "I'm Not Sure What's Holding Me Back",
		description:
			'Get clarity on what is helping and hurting your online performance.',
		cta: 'Request a Website Audit',
		href: '/contact',
	},
];

const auditFindings = [
	'Conversion bottlenecks',
	'UX issues',
	'Technical SEO problems',
	'Missed lead opportunities',
];

function SuccessIcon() {
	return (
		<div className={styles.successIcon} aria-hidden='true'>
			<svg viewBox='0 0 24 24' role='img'>
				<path d='M9.4 16.6 4.9 12l1.5-1.5 3 3 8.2-8.1L19.1 7z' />
			</svg>
		</div>
	);
}

function SectionIntro({ eyebrow, title, body, centered = false }) {
	return (
		<header className={`${styles.sectionIntro} ${centered ? styles.centeredIntro : ''}`.trim()}>
			{eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
			<h2>{title}</h2>
			{body ? <p>{body}</p> : null}
		</header>
	);
}

export default function ThankYouTemplate({ resource }) {
	return (
		<div className={styles.pageShell}>
			<aside className={styles.stickyHelp} aria-label='Need help?'>
				<p>Need Help?</p>
				<Link href='/website-audit'>Request a Website Audit</Link>
			</aside>

			<section className={styles.heroSection}>
				<div className={styles.heroGlow} aria-hidden='true' />
				<div className={styles.container}>
					<div className={styles.heroContent}>
						<SuccessIcon />
						<p className={styles.heroEyebrow}>RESOURCE READY</p>
						<h1>Your Guide Is Ready</h1>
						<p className={styles.resourceLabel}>
							Thanks for requesting: <strong>{resource.title}</strong>
						</p>
						<p className={styles.heroBody}>
							Your download is ready below. We&apos;ve also sent a copy to your
							email for easy access later.
						</p>

						<div className={styles.downloadCard}>
							<div>
								<p className={styles.downloadLabel}>Download Resource</p>
								<h2>{resource.title}</h2>
								<p>{resource.description}</p>
							</div>
							<div className={styles.heroActions}>
								<a
									href={resource.downloadUrl}
									className={styles.primaryButton}
									target='_blank'
									rel='noreferrer'
								>
									Download Resource
								</a>
								<Link href='/' className={styles.secondaryButton}>
									Return to Homepage
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.nextSection}>
				<div className={styles.container}>
					<SectionIntro
						centered
						title="What's Next?"
						body='Choose the path that best matches your goals.'
					/>
					<div className={styles.nextGrid}>
						{nextStepCards.map((card) => (
							<article className={styles.nextCard} key={card.title}>
								<h3>{card.title}</h3>
								<p>{card.description}</p>
								<Link href={card.href}>{card.cta}</Link>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.darkSection}>
				<div className={styles.container}>
					<div className={styles.darkCta}>
						<div className={styles.darkGlow} aria-hidden='true' />
						<div className={styles.darkCopy}>
							<h2>Most Businesses Don&apos;t Have a Traffic Problem</h2>
							<p className={styles.darkLead}>They have a conversion problem.</p>
							<p>
								Many websites receive visitors but fail to generate meaningful
								results.
							</p>
							<p>A strategic Website Audit identifies:</p>
							<ul>
								{auditFindings.map((finding) => (
									<li key={finding}>{finding}</li>
								))}
							</ul>
						</div>
						<div className={styles.darkActions}>
							<Link href='/website-audit' className={styles.goldButton}>
								Request a Website Audit
							</Link>
							<Link href='/about' className={styles.darkTextLink}>
								Learn About Our Process
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.relatedSection}>
				<div className={styles.container}>
					<SectionIntro
						centered
						title='Continue Learning'
						body='If you found this resource valuable, these guides may help you take the next step.'
					/>
					<div className={styles.relatedGrid}>
						{resource.relatedArticles.slice(0, 3).map((article) => (
							<article className={styles.articleCard} key={article.href}>
								{article.image ? (
									<div className={styles.articleImage}>
										<Image
											src={article.image}
											alt=''
											fill
											sizes='(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw'
										/>
									</div>
								) : null}
								<div className={styles.articleContent}>
									<h3>{article.title}</h3>
									<p>{article.description}</p>
									<Link href={article.href}>Read Article</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.finalSection}>
				<div className={styles.container}>
					<div className={styles.finalContent}>
						<h2>Every Great Website Starts With Clarity</h2>
						<p>
							The businesses that achieve the best results online aren&apos;t
							necessarily the ones spending the most money.
						</p>
						<p>They&apos;re the ones making better decisions.</p>
						<p>
							Whether you&apos;re planning a redesign, improving your marketing,
							or simply trying to understand why your website isn&apos;t
							performing, clarity is the first step.
						</p>
						<div className={styles.finalActions}>
							<Link href='/website-audit' className={styles.primaryButton}>
								Request a Website Audit
							</Link>
							<Link href='/services' className={styles.secondaryButton}>
								Explore Services
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
