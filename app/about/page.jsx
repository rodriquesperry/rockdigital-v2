import Image from 'next/image';
import Link from 'next/link';

import heroImg from '@/assets/heroImg.webp';
import Precision from '@/assets/Organized Stationery Set.png';

import styles from './about.module.css';

export const metadata = {
	title: 'About',
	description:
		'Learn how Rock Digital builds strategy-first websites, conversion systems, and digital experiences designed to drive measurable business growth.',
};

const strategyPoints = [
	'Your market performance',
	'Your position in the market',
	'Your competitors',
	'Your conversion flow',
	'Your opportunities for growth',
];

const alternativePoints = [
	'Clarity over confusion',
	'Strategy over guesswork',
	'Performance over vanity metrics',
];

const disciplinePoints = [
	'Clear processes',
		'No guesswork',
	'No shortcuts',
	'No surprises',
];

const systemSteps = ['Traffic', 'Page', 'Action', 'Conversion', 'Follow-Up'];

const auditPoints = [
	'What’s working',
	'What’s not',
	'Where your design support fails',
	'And what it will take to fix it',
];

export default function AboutPage() {
	return (
		<div className={styles.page}>
			<section className={styles.heroSection}>
				<div className={styles.heroInner}>
					<div className={styles.heroContent}>
						<h1 className={`${styles.heroTitle} playfair`}>
							We Don&apos;t Build Websites.
							<br />
							We Build Systems That
							<br />
							Drive Growth.
						</h1>
						<p className={styles.heroLead}>
							Most websites fail for a simple reason: they&apos;re treated like
							digital brochures instead of what they should be:
							<span> conversion-focused sales tools built for growth.</span>
						</p>
						<p className={styles.heroCopy}>
							At Rock Digital Agency, we build for what lasts.
						</p>
						<p className={styles.heroCopy}>
							We partner with established businesses that are ready to scale,
							not by redesigning websites for appearance alone, but by building
							high-performing systems, stronger strategy, and digital assets
							that drive real results.
						</p>
						<p className={styles.heroCopy}>
							Because a website that &quot;looks good&quot; but doesn&apos;t
							perform? That&apos;s not a website. It&apos;s a liability.
						</p>
						<Link href='/website-audit' className={styles.primaryButton}>
							Request a Website Audit
						</Link>
					</div>

					<div className={styles.heroImageWrap}>
						<div className={styles.heroImageFrame}>
							<Image
								src={heroImg}
								alt='Laptop displaying marketing data on a desk'
								fill
								sizes='(max-width: 1023px) 100vw, 42vw'
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.strategySection}>
				<div className={styles.mobileHeroImageWrap}>
					<div className={styles.mobileHeroImageFrame}>
						<Image
							src={Precision}
							alt='Laptop displaying marketing data on a desk'
							fill
							sizes='(max-width: 767px) 88vw, 0px'
						/>
					</div>
				</div>

				<div className={styles.centeredBlock}>
					<h2 className={`${styles.sectionTitle} playfair`}>
						Built on <span>Strategy.</span> Driven by
						<br />
						<span>Performance.</span>
					</h2>
					<p className={styles.centeredCopy}>
						Every decision we make is rooted in one question:
					</p>
					<p className={`${styles.pullQuote} playfair`}>
						&quot;Will this drive measurable growth?&quot;
					</p>
					<p className={styles.centeredCopy}>
						Design is important. Development is critical.
						<br />
						But without strategy, it&apos;s all noise.
					</p>
					<p className={styles.centeredCopy}>
						That&apos;s why we approach every project differently.
					</p>
					<p className={styles.centeredCopy}>
						Before a single design is created, we analyze:
					</p>
					<ul className={styles.centeredList}>
						{strategyPoints.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<p className={styles.centeredCopy}>
						Only then, do we build.
					</p>
					<p className={styles.centeredCopy}>
						Because what you need isn&apos;t just a website.
						<br />
						You need a system engineered to attract, engage, and convert.
					</p>
				</div>
			</section>

			<section className={styles.splitWarmSection}>
				<div className={styles.splitInner}>
					<div className={styles.splitHeadline}>
						<h2 className={`${styles.splitTitle} playfair`}>
							Why Rock
							<br />
							Digital Exists
						</h2>
					</div>
					<div className={styles.splitDivider} />
					<div className={styles.splitContent}>
						<p>
							Too many businesses have been burned. Overpromised. Undersold.
							Left with websites that look modern, but do nothing for their
							bottom line.
						</p>
						<p>We&apos;ve seen it firsthand.</p>
						<p>And we built Rock Digital Agency to be the alternative.</p>
						<p>A partner that values:</p>
						<ul className={styles.inlineList}>
							{alternativePoints.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<p>
							We don&apos;t chase trends.
							<br />
							We build what works.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.graySection}>
				<div className={styles.centeredBlock}>
					<h2 className={`${styles.sectionTitle} playfair`}>
						Selective by Design.
					</h2>
					<p className={styles.centeredCopy}>
						We&apos;re not the right fit for everyone and that&apos;s
						intentional.
					</p>
					<p className={styles.centeredCopy}>
						Rock Digital works best with businesses that are already
						established, understand the value of strategy, and are ready to
						invest in long-term growth.
					</p>
					<p className={styles.centeredCopy}>
						If you&apos;re looking for the cheapest option, we&apos;re not it.
					</p>
					<p className={styles.centeredCopy}>
						If you&apos;re looking for a partner who treats your website like a
						growth engine, you&apos;re exactly who we built this for.
					</p>
				</div>
			</section>

			<section className={styles.precisionSection}>
				<div className={styles.precisionInner}>
					<div className={styles.precisionImageWrap}>
						<div className={styles.precisionImageFrame}>
							<Image
								src={Precision}
								alt='Design planning tools and interface mockup'
								fill
								sizes='(max-width: 1023px) 100vw, 38vw'
							/>
						</div>
					</div>

					<div className={styles.precisionContent}>
						<h2 className={`${styles.precisionTitle} playfair`}>
							Built on Discipline.
							<br />
							Executed with Precision.
						</h2>
						<p>
							Rock Digital Agency was built with a mindset to lead through
							discipline, structure, and execution.
						</p>
						<p>
							As a disabled veteran, our founder brings a level of precision
							and accountability that clients notice right away. That means:
						</p>
						<ul className={styles.inlineList}>
							{disciplinePoints.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<p>Just focused execution, designed to deliver results.</p>
					</div>
				</div>
			</section>

			<section className={styles.systemSection}>
				<div className={styles.centeredBlock}>
					<h2 className={`${styles.sectionTitle} playfair`}>
						Most agencies build pages.
						<br />
						We build systems.
					</h2>
					<p className={styles.centeredCopy}>
						Your website isn&apos;t just designed to exist, it&apos;s engineered
						to perform.
					</p>

					<div className={styles.systemFlow}>
						{systemSteps.map((step, index) => (
							<div key={step} className={styles.flowItem}>
								<span>{step}</span>
								{index < systemSteps.length - 1 ? (
									<span className={styles.flowArrow} aria-hidden='true'>
										&rarr;
									</span>
								) : null}
							</div>
						))}
					</div>

					<p className={`${styles.flowTagline} playfair`}>
						Everything has a purpose. Nothing is left to chance.
					</p>
				</div>
			</section>

			<section className={styles.auditSection}>
				<div className={styles.auditInner}>
					<div className={styles.auditCopy}>
						<h2 className={`${styles.auditTitle} playfair`}>
							Start With Clarity.
						</h2>
						<p>
							Before we ever talk about design, we start with understanding.
							That&apos;s why the first step is simple:
						</p>
						<p className={styles.auditLead}>Request a Website Audit.</p>
						<p>We&apos;ll break down:</p>
						<ul className={styles.inlineList}>
							{auditPoints.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<p>No pressure. Just clarity.</p>
					</div>

					<div className={styles.auditCard}>
						<p className={styles.cardEyebrow}>Free Audit</p>
						<h3 className={`${styles.cardTitle} playfair`}>
							Get a Clear Breakdown of Your Website&apos;s Performance
						</h3>
						<p className={styles.cardCopy}>
							No guesswork. No recycled advice. A focused review of what&apos;s
							working, what&apos;s not, and where growth is being left on the
							table.
						</p>
						<Link href='/website-audit' className={styles.cardButton}>
							Request a Website Audit
						</Link>
					</div>
				</div>
			</section>

			<section className={styles.finalSection}>
				<div className={styles.finalInner}>
					<h2 className={`${styles.finalTitle} playfair`}>
						If your website isn&apos;t driving
						<br />
						<span>growth</span>, it&apos;s holding you back.
					</h2>
					<p className={styles.finalCopy}>Let&apos;s fix that.</p>
					<Link href='/website-audit' className={styles.primaryButton}>
						Request a Website Audit
					</Link>
				</div>
			</section>
		</div>
	);
}
