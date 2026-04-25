import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import rocketIcon from '@/assets/rocket.svg';
import growthIcon from '@/assets/arrow-up-graph-increase-svgrepo-com.svg';
import targetIcon from '@/assets/target-svgrepo-com.svg';
import speedIcon from '@/assets/speedometer-svgrepo-com.svg';
import webIcon from '@/assets/web-page-website-svgrepo-com.svg';
import iPhoneIcon from '@/assets/iphone-svgrepo-com.svg';
import checklistIcon from '@/assets/checklist-svgrepo-com.svg';

import { caseStudies, getCaseStudyBySlug } from '../caseStudies';
import styles from '../caseStudies.module.css';

export const generateStaticParams = () =>
	caseStudies.map((caseStudy) => ({
		caseStudySlug: caseStudy.slug,
	}));

export const generateMetadata = async ({ params }) => {
	const { caseStudySlug } = await params;
	const caseStudy = getCaseStudyBySlug(caseStudySlug);

	if (!caseStudy) {
		return {
			title: 'Case Study',
			description:
				'Explore Rock Digital website strategy, design, development, and growth case studies.',
		};
	}

	return {
		title: `${caseStudy.client} Case Study`,
		description: caseStudy.subtitle || caseStudy.summary,
	};
};

const iconSprites = {
	
	
	content: (
		<>
			<path d='M6 5h10l3 3v11H6Z' />
			<path d='M16 5v4h4' />
			<path d='M9 12h6' />
			<path d='M9 16h4' />
		</>
	),
	check: (
		<>
			<circle cx='12' cy='12' r='8.5' />
			<path d='m8.5 12 2.3 2.3 4.8-4.8' />
		</>
	),
	lightning: (
		<>
			<path d='M13.5 3 7 13h4l-1 8 6.5-10h-4L13.5 3Z' />
		</>
	),
	users: (
		<>
			<circle cx='9' cy='10' r='2.5' />
			<circle cx='16' cy='9' r='2' />
			<path d='M4.5 18a4.5 4.5 0 0 1 9 0' />
			<path d='M14 18a3.5 3.5 0 0 1 6 0' />
		</>
	),
	star: (
		<>
			<path d='m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.5-4.8-2.6-4.8 2.6.9-5.5L4.2 9.7l5.4-.8L12 4Z' />
		</>
	),
};

const maskedIcons = {
  rocket: rocketIcon,
	growth: growthIcon,
	target: targetIcon,
  performance: speedIcon,
  design: webIcon,
  mobile: iPhoneIcon,
  content: checklistIcon,
};

const Icon = ({ name, className }) => {
	const maskedIcon = maskedIcons[name];

	return (
		<span className={`${styles.iconWrap} ${className || ''}`.trim()} aria-hidden='true'>
			{maskedIcon ? (
				<span
					className={styles.maskIcon}
					style={{
						maskImage: `url(${maskedIcon.src})`,
						WebkitMaskImage: `url(${maskedIcon.src})`,
					}}
				/>
			) : (
				<svg
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					{iconSprites[name]}
				</svg>
			)}
		</span>
	);
};

const MetaStat = ({ label, value }) => (
	<div className={styles.metaItem}>
		<dt>{label}</dt>
		<dd>{value}</dd>
	</div>
);

const MetricCard = ({ metric }) => (
	<article className={styles.metricCard}>
		<div className={styles.metricIconRow}>
			<Icon name={metric.icon} className={styles.metricIcon} />
			<div>
				<strong>{metric.value}</strong>
				<h2>{metric.title}</h2>
		    <p>{metric.description}</p>
			</div>
		</div>
	</article>
);

const Checklist = ({ items, compact = false }) => (
	<ul className={`${styles.checkList} ${compact ? styles.checkListCompact : ''}`.trim()}>
		{items.map((item) => (
			<li key={item}>
				<Icon name='check' className={styles.checkIcon} />
				<span>{item}</span>
			</li>
		))}
	</ul>
);

const FeatureCard = ({ feature }) => (
	<article className={styles.featureCard}>
		<Icon name={feature.icon} className={styles.featureIcon} />
		<div>
			<h3>{feature.title}</h3>
			<p>{feature.description}</p>
		</div>
	</article>
);

const ProcessStep = ({ step, index, isLast }) => (
	<article className={styles.processStep}>
		<div className={styles.processMarker}>
			<span>{String(index + 1).padStart(2, '0')}</span>
			{!isLast ? <div className={styles.processLine} aria-hidden='true' /> : null}
		</div>
		<div className={styles.processCopy}>
			<h3>{step.title}</h3>
			<p>{step.description}</p>
		</div>
	</article>
);

const ResultCard = ({ card }) => (
	<article className={styles.resultCard}>
		<Icon name={card.icon} className={styles.resultIcon} />
		<h3>{card.title}</h3>
		<p>{card.description}</p>
	</article>
);

const CaseStudyDetailPage = async ({ params }) => {
	const { caseStudySlug } = await params;
	const caseStudy = getCaseStudyBySlug(caseStudySlug);

	if (!caseStudy) {
		notFound();
	}

	const {
		categoryLabel,
		title,
		subtitle,
		summary,
		hero,
		snapshot,
		metrics,
		challenge,
		strategy,
		process,
		results,
		nextPhase,
		finalCta,
	} = caseStudy;

	return (
		<div className={styles.page}>
			<section className={styles.detailShell}>
				<div className={styles.detailInner}>
					<Link href='/case-studies' className={styles.backLink}>
						Back to Case Studies
					</Link>

					<div className={styles.heroGrid}>
						<div className={styles.detailHeroCopy}>
							<p className={styles.sectionLabel}>{categoryLabel || 'Case Study'}</p>
							<h1>{title}</h1>
							<div className={styles.heroDivider} aria-hidden='true' />
							<p className={styles.heroKicker}>{subtitle || hero?.kicker}</p>
							<p className={styles.heroDescription}>{summary}</p>
							<Link href={hero?.buttonHref || '/website-audit'} className={styles.primaryButton}>
								{hero?.buttonLabel || 'Request a Website Audit'}
							</Link>
						</div>

						<div className={styles.heroVisual}>
							<Image
								src={hero?.image || caseStudy.image}
								alt={hero?.imageAlt || caseStudy.imageAlt}
								priority
								sizes='(max-width: 767px) 56vw, (max-width: 1100px) 42vw, 48vw'
							/>
						</div>
					</div>

					<div className={styles.snapshotGrid}>
						<dl className={styles.snapshotRow}>
							{snapshot.map((item) => (
								<MetaStat key={item.label} label={item.label} value={item.value} />
							))}
						</dl>
					</div>

					<div className={styles.metricsPanel}>
						<div className={styles.metricsGrid}>
							{metrics.map((metric) => (
								<MetricCard key={metric.title} metric={metric} />
							))}
						</div>
					</div>

					<section className={styles.contentPanel}>
						<div className={styles.challengeGrid}>
							<div className={styles.challengeCopy}>
								<p className={styles.sectionLabel}>{challenge.label}</p>
								<h2>{challenge.title}</h2>
								<p>{challenge.description}</p>
								<Checklist items={challenge.bullets} />
							</div>

							<div className={styles.challengeImageWrap}>
								<Image
									src={challenge.image}
									alt={challenge.imageAlt}
									sizes='(max-width: 767px) 100vw, (max-width: 1100px) 78vw, 42vw'
								/>
							</div>
						</div>

						<div className={styles.strategySection}>
							<div className={styles.strategyImageWrap}>
								<Image
									src={strategy.image}
									alt={strategy.imageAlt}
									sizes='(max-width: 767px) 100vw, (max-width: 1100px) 58vw, 34vw'
								/>
							</div>

							<div className={styles.strategyCopy}>
								<p className={styles.sectionLabel}>{strategy.label}</p>
								<h2>{strategy.title}</h2>
								<p>{strategy.description}</p>
								<div className={styles.featureGrid}>
									{strategy.pillars.map((pillar) => (
										<FeatureCard key={pillar.title} feature={pillar} />
									))}
								</div>
							</div>
						</div>

						<div className={styles.processSection}>
							<p className={styles.sectionLabel}>{process.label}</p>
							<h2>{process.title}</h2>
							<div className={styles.processGrid}>
								{process.steps.map((step, index) => (
									<ProcessStep
										key={step.title}
										step={step}
										index={index}
										isLast={index === process.steps.length - 1}
									/>
								))}
							</div>
						</div>
					</section>

					<section className={styles.resultsPanel}>
						<p className={styles.sectionLabel}>{results.label}</p>
						<h2>{results.title}</h2>

						<div className={styles.resultsGrid}>
							{results.cards.map((card) => (
								<ResultCard key={card.title} card={card} />
							))}
						</div>

						<blockquote className={styles.testimonialCard}>
							<span className={styles.quoteMark} aria-hidden='true'>
								"
							</span>
							<p>{results.testimonial.quote}</p>
							<footer>{results.testimonial.attribution}</footer>
						</blockquote>
					</section>

					<section className={styles.nextPanel}>
						<div className={styles.nextCopy}>
							<p className={styles.sectionLabel}>{nextPhase.label}</p>
							<h2>{nextPhase.title}</h2>
							<p>{nextPhase.description}</p>
						</div>

						<div className={styles.nextChecklistWrap}>
							<Checklist items={nextPhase.bullets} compact />
						</div>
					</section>

					<section className={styles.ctaPanel}>
						<div className={styles.ctaPanelInner}>
							<h2>{finalCta.title}</h2>
							<p>{finalCta.description}</p>
							<Link href={finalCta.buttonHref} className={styles.primaryButton}>
								{finalCta.buttonLabel}
							</Link>
						</div>
					</section>
				</div>
			</section>
		</div>
	);
};

export default CaseStudyDetailPage;
