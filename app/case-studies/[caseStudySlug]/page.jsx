import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

const SectionBody = ({ section }) => (
	<>
		{section.body?.map((paragraph) => (
			<p key={paragraph}>{paragraph}</p>
		))}

		{section.items?.length ? (
			<ul className={styles.resultList}>
				{section.items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		) : null}

		{section.quote ? <blockquote>{section.quote}</blockquote> : null}
	</>
);

const CaseStudyDetailPage = async ({ params }) => {
	const { caseStudySlug } = await params;
	const caseStudy = getCaseStudyBySlug(caseStudySlug);

	if (!caseStudy) {
		notFound();
	}

	return (
		<div className={styles.page}>
			<section className={styles.detailHero}>
				<div className={styles.detailHeroInner}>
					<div className={styles.detailHeroCopy}>
						<Link href='/case-studies' className={styles.backLink}>
							Back to Case Studies
						</Link>
						<p className={styles.eyebrow}>{caseStudy.service}</p>
						<h1>{caseStudy.title}</h1>
						{caseStudy.subtitle ? (
							<p className={styles.heroSubtitle}>{caseStudy.subtitle}</p>
						) : null}
						<p className={styles.heroCopy}>{caseStudy.summary}</p>
					</div>

					<div className={styles.heroImageFrame}>
						<Image
							src={caseStudy.image}
							alt={caseStudy.imageAlt}
							fill
							priority
							sizes='(max-width: 991px) 100vw, 520px'
						/>
					</div>
				</div>
			</section>

			<section className={styles.projectSnapshot} aria-label='Project snapshot'>
				<div className={styles.snapshotInner}>
					<div>
						<span>Client</span>
						<strong>{caseStudy.client}</strong>
					</div>
					<div>
						<span>Industry</span>
						<strong>{caseStudy.industry}</strong>
					</div>
					<div>
						<span>Timeline</span>
						<strong>{caseStudy.timeline}</strong>
					</div>
				</div>
			</section>

			<section className={styles.metricsSection} aria-label='Project outcomes'>
				<div className={styles.metricsInner}>
					{caseStudy.metrics.map((metric) => (
						<div className={styles.metric} key={metric.label}>
							<strong>{metric.value}</strong>
							<span>{metric.label}</span>
						</div>
					))}
				</div>
			</section>

			{caseStudy.sections.map((section, index) => (
				<section
					className={`${styles.narrativeSection} ${
						index % 2 === 1 ? styles.narrativeSectionAlt : ''
					}`.trim()}
					key={section.heading}
				>
					<div className={styles.narrativeInner}>
						<article className={styles.narrativeBlock}>
							<p className={styles.darkEyebrow}>{section.eyebrow}</p>
							<h2>{section.heading}</h2>
							<SectionBody section={section} />
						</article>
					</div>
				</section>
			))}

			<section className={styles.ctaSection}>
				<div className={styles.ctaInner}>
					<h2>Your website can work with more purpose.</h2>
					<p>
						Get a practical view of what is helping, what is slowing visitors
						down, and what to improve first.
					</p>
					<Link href='/website-audit' className={styles.primaryButton}>
						Request a Website Audit
					</Link>
				</div>
			</section>
		</div>
	);
};

export default CaseStudyDetailPage;
