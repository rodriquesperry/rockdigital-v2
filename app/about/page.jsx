import Image from 'next/image';
import Link from 'next/link';

import heroImg from '@/assets/heroImg.webp';
import precisionImg from '@/assets/Organized Stationery Set.png';

import styles from './about.module.css';

export const metadata = {
	title: 'About',
	description:
		'Learn how Rock Digital builds strategy-first websites, conversion systems, and digital experiences designed to drive measurable business growth.',
};

const strategyPoints = [
	'Your current performance',
	'Your positioning in the market',
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
	'No wasted time',
	'No guesswork',
	'No shortcuts',
];

const systemBenefitsLeft = [
	'Guide users with intent',
	'Remove friction',
	'Increase conversions',
];

const systemBenefitsRight = [
	'Support your sales process',
	'Scale with your business',
];

const systemSteps = ['Traffic', 'Page', 'Action', 'Conversion', 'Follow-Up'];

const auditPoints = [
	'What’s working',
	'What’s not',
	'Where you’re losing opportunities',
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
							Most websites fail for a simple reason, they&apos;re treated like
							digital brochures instead of what they should be:
							<span> conversion-focused sales tools</span> built with intent.
						</p>
						<p className={styles.heroCopy}>
							At Rock Digital Agency, we exist to fix that.
						</p>
						<p className={styles.heroCopy}>
							We partner with established businesses that are ready to
							<span> scale</span>, but are being held back by underperforming
							websites, unclear strategy, or agencies that prioritize
							aesthetics over results.
						</p>
						<p className={styles.heroCopy}>
							Because a website that &quot;looks good&quot; but doesn&apos;t
							perform?
							<br />
							That&apos;s not an <span>asset</span>. It&apos;s a liability.
						</p>

						<Link href='/website-audit' className={styles.primaryButton}>
							Request a Website Audit
						</Link>
					</div>

					<div className={styles.heroImageWrap}>
						<div className={styles.heroImagePlate} aria-hidden='true' />
						<div className={styles.heroImageFrame}>
							<div className={styles.heroImageOverlay} aria-hidden='true' />
							<Image
								src={heroImg}
								alt='Laptop displaying website analytics on a desk'
								fill
								priority
								sizes='(max-width: 1023px) 0px, (max-width: 1439px) 42vw, 588px'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.strategySection}>
				<div className={styles.mobileHeroImageWrap}>
					<div className={styles.mobileHeroImageFrame}>
						<Image
							src={heroImg}
							alt='Laptop displaying website analytics on a desk'
							fill
							sizes='(max-width: 1023px) 88vw, 0px'
						/>
					</div>
				</div>

				<div className={styles.centeredBlock}>
					<h2 className={`${styles.sectionTitle} playfair`}>
						Built on <span>Strategy.</span> Driven by
						<br />
						<span>Performance.</span>
					</h2>
					<div className={styles.sectionDivider} />
					<p className={styles.centeredCopy}>
						Every decision we make is rooted in one question:
					</p>
					<p className={`${styles.pullQuote} playfair`}>
						&quot;Will this drive measurable growth?&quot;
					</p>
					<p className={styles.centeredCopy}>
						Design is important. Development is critical.
						<br />
						But without strategy, both fall apart.
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
					<p className={styles.centeredCopy}>Only then do we build.</p>
					<p className={styles.centeredCopy}>
						Because what you need isn&apos;t “just a website.”
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
						<p>Too many businesses have been burned.</p>
						<p>Overpromised. Underdelivered.</p>
						<p>
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
					<div className={styles.sectionDivider} />
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
								src={precisionImg}
								alt='Organized stationery and design tools arranged on a desk'
								fill
								sizes='(max-width: 1023px) 100vw, 444px'
							/>
						</div>
					</div>

					<div className={styles.precisionDivider} />

					<div className={styles.precisionContent}>
						<h2 className={`${styles.precisionTitle} playfair`}>
							Built on Discipline.
							<br />
							Executed with Precision.
						</h2>
						<p>
							Rock Digital Agency was built with a mindset forged through
							discipline, structure, and execution.
						</p>
						<p>
							As a disabled veteran, our founder brings a level of precision
							and accountability that carries into every project we take on.
						</p>
						<p>That means:</p>
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
						Your website isn&apos;t just designed to exist, it&apos;s
						engineered to perform.
					</p>

					<div className={styles.systemBenefitGrid}>
						<ul className={styles.systemBenefitList}>
							{systemBenefitsLeft.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<ul className={styles.systemBenefitList}>
							{systemBenefitsRight.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>

					<div className={styles.systemFlow} aria-label='Website growth system'>
						{systemSteps.map((step, index) => (
							<div key={step} className={styles.flowItem}>
								<span
									className={
										step === 'Conversion' ? styles.flowHighlight : undefined
									}
								>
									{step}
								</span>
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
						<ul className={styles.auditList}>
							{auditPoints.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<p>No pressure. Just clarity.</p>
					</div>

					<div className={styles.auditCard}>
						<p className={styles.cardEyebrow}>Website Audit</p>
						<div className={styles.cardRule} />
						<h3 className={`${styles.cardTitle} playfair`}>
							Get a Clear Breakdown of Your Website&apos;s Performance
						</h3>
						<div className={styles.cardRule} />
						<p className={styles.cardCopy}>
							No pressure. No guesswork. Just clarity on what&apos;s working
							and what needs to improve.
						</p>
						<div className={styles.cardRule} />
						<Link href='/website-audit' className={styles.cardButton}>
							Request a Website Audit
						</Link>
					</div>
				</div>
			</section>

			<section className={styles.finalSection}>
				<div className={styles.finalInner}>
					<h2 className={`${styles.finalTitle} playfair`}>
						If your website isn&apos;t driving <span>growth</span>, it&apos;s
						holding you back.
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
