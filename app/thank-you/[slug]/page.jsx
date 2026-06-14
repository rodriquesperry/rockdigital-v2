import { notFound } from 'next/navigation';

import {
	getThankYouResource,
	thankYouResources,
} from '@/lib/thankYouResources';

import ThankYouTemplate from './ThankYouTemplate';

const pageDescription =
	'Download your resource and discover the next steps to improve your website, digital marketing, and business growth.';

export const dynamicParams = false;

export function generateStaticParams() {
	return Object.keys(thankYouResources).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const resource = getThankYouResource(slug);

	if (!resource) {
		return {
			title: {
				absolute: 'Thank You | Rock Digital',
			},
			robots: {
				index: false,
				follow: false,
			},
		};
	}

	return {
		title: {
			absolute: `Thank You | ${resource.title} | Rock Digital`,
		},
		description: pageDescription,
		robots: {
			index: false,
			follow: false,
		},
	};
}

export default async function ThankYouPage({ params }) {
	const { slug } = await params;
	const resource = getThankYouResource(slug);

	if (!resource) {
		notFound();
	}

	return <ThankYouTemplate resource={resource} />;
}
