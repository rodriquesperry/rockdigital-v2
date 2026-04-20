import Image from 'next/image';
import Link from 'next/link';

import { caseStudies } from './caseStudies';
import styles from './caseStudies.module.css';

export const metadata = {
	title: 'Case Studies',
	description:
		'Explore Rock Digital case studies showing website strategy, web design, SEO foundations, and conversion-focused improvements for growing businesses.',
};

const CaseStudiesPage = () => {
	return (
		<div className={styles.page}>
			<section className={styles.hero}>
				<div className={styles.heroInner}>
					<p className={styles.eyebrow}>Case Studies</p>
					<h1>Real website work with clearer paths to growth.</h1>
					<p className={styles.heroCopy}>
						See how strategy, design, development, and search foundations come
						together to help businesses create stronger digital experiences.
					</p>
				</div>
			</section>

			<section className={styles.listingSection} aria-labelledby='case-study-list'>
				<div className={styles.sectionInner}>
					<div className={styles.sectionHeading}>
						<h2 id='case-study-list'>Selected Work</h2>
						<p>
							Each project starts with the same question: what does the website
							need to do next for the business?
						</p>
					</div>

					<div className={styles.caseGrid}>
						{caseStudies.map((caseStudy) => (
							<article className={styles.caseCard} key={caseStudy.slug}>
								<Link
									href={`/case-studies/${caseStudy.slug}`}
									className={styles.caseImageLink}
									aria-label={`Read the ${caseStudy.client} case study`}
								>
									<Image
										src={caseStudy.image}
										alt={caseStudy.imageAlt}
										fill
										sizes='(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 360px'
									/>
								</Link>

								<div className={styles.caseCardBody}>
									<div className={styles.caseMeta}>
										<span>{caseStudy.industry}</span>
										<span>{caseStudy.service}</span>
									</div>
									<h3>{caseStudy.client}</h3>
									<p>{caseStudy.summary}</p>
									<Link
										href={`/case-studies/${caseStudy.slug}`}
										className={styles.textLink}
									>
										Read Case Study
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.ctaSection}>
				<div className={styles.ctaInner}>
					<h2>Ready to find what your website can do better?</h2>
					<p>
						Start with a clear look at what is working, what is getting in the
						way, and where better performance can come from.
					</p>
					<Link href='/website-audit' className={styles.primaryButton}>
						Request a Website Audit
					</Link>
				</div>
			</section>
		</div>
	);
};

export default CaseStudiesPage;
