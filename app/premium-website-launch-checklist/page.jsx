import Image from 'next/image';
import Link from 'next/link';

import checklistPreview from '@/assets/Premium Website Launch Checklist.png';
import JsonLd from '@/components/seo/JsonLd';

import ChecklistLeadForm from './ChecklistLeadForm.client';
import styles from './premiumWebsiteLaunchChecklist.module.css';

const pageTitle = 'Premium Website Launch Checklist';
const pageDescription =
	'Download the Premium Website Launch Checklist from Rock Digital and review the strategy, design, content, SEO, performance, and conversion details that matter before going live.';
const pageUrl = 'https://rockdigital.agency/premium-website-launch-checklist';

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
		type: 'website',
		images: [
			{
				url: '/opengraph-image',
				width: 1200,
				height: 630,
				alt: 'Rock Digital',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: pageTitle,
		description: pageDescription,
	},
};

const checklistHighlights = [
	'Strategy, purpose, and business goals',
	'User experience, mobile layout, and navigation',
	'Messaging, calls-to-action, SEO, speed, and tracking',
];

const reviewPillars = [
	{
		title: 'Catch Launch Gaps',
		description:
			'Review the details that are easy to miss when everyone is focused on publishing.',
	},
	{
		title: 'Clarify Priorities',
		description:
			'Know what to fix before launch, what can wait, and what affects trust right away.',
	},
	{
		title: 'Launch With Confidence',
		description:
			'Give your site one final business-focused pass before traffic starts arriving.',
	},
];

export default function PremiumWebsiteLaunchChecklistPage() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: pageTitle,
		description: pageDescription,
		url: pageUrl,
		publisher: {
			'@type': 'Organization',
			name: 'Rock Digital Agency',
			url: 'https://rockdigital.agency',
		},
		mainEntity: {
			'@type': 'DigitalDocument',
			name: 'Premium Website Launch Checklist',
			description:
				'A four-page website launch checklist for reviewing strategy, design, messaging, performance, SEO, and conversion readiness before a website goes live.',
			fileFormat: 'application/pdf',
		},
	};

	return (
		<div className={styles.pageShell}>
			<JsonLd data={jsonLd} />
			<section className={styles.heroSection}>
				<div className={styles.cornerRingsTop} aria-hidden='true' />
				<div className={styles.cornerRingsBottom} aria-hidden='true' />
				<div className={styles.container}>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>Free 4-page PDF checklist</p>
							<h1>Review your website before it goes live.</h1>
							<p className={styles.heroLead}>
								A polished website can still hide broken forms, unclear
								messaging, weak calls-to-action, slow mobile pages, missing SEO
								basics, or tracking gaps. Use this checklist to review the
								details that protect your launch and make the next step clearer
								for your visitors.
							</p>

							<ul className={styles.highlightList}>
								{checklistHighlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>

							<ChecklistLeadForm />
						</div>

						<div className={styles.previewWrap}>
							<div className={styles.previewGlow} aria-hidden='true' />
							<Image
								src={checklistPreview}
								alt='Premium Website Launch Checklist PDF preview'
								className={styles.checklistPreview}
								priority
								sizes='(max-width: 900px) 82vw, 42vw'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.supportSection}>
				<div className={styles.container}>
					<div className={styles.supportGrid}>
						<div className={styles.supportIntro}>
							<p className={styles.eyebrow}>Why it helps</p>
							<h2>Turn launch day into a controlled review, not a guess.</h2>
						</div>
						<div className={styles.pillarGrid}>
							{reviewPillars.map((pillar) => (
								<article className={styles.pillarCard} key={pillar.title}>
									<h3>{pillar.title}</h3>
									<p>{pillar.description}</p>
								</article>
							))}
						</div>
					</div>
					<p className={styles.contextLine}>
						Need the bigger strategy behind the checklist? Read the{' '}
						<Link href='/web-design-guide'>Web Design Guide</Link> or request a{' '}
						<Link href='/website-audit'>Website Audit</Link>.
					</p>
				</div>
			</section>
		</div>
	);
}
