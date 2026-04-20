import { readdir } from 'node:fs/promises';
import path from 'node:path';

import axios from 'axios';

import config from '@/config';
import { caseStudies } from '@/app/case-studies/caseStudies';

const APP_DIRECTORY = path.join(process.cwd(), 'app');
const PAGE_FILE_PATTERN = /^page\.(js|jsx|ts|tsx)$/;
const EXCLUDED_SEGMENTS = new Set(['api']);

const normalizeRoute = (segments) => {
	const filteredSegments = segments.filter(
		(segment) =>
			segment &&
			!EXCLUDED_SEGMENTS.has(segment) &&
			!segment.startsWith('(') &&
			!segment.startsWith('[')
	);

	if (filteredSegments.length === 0) {
		return '/';
	}

	return `/${filteredSegments.join('/')}`;
};

const collectStaticRoutes = async (directory, segments = []) => {
	const entries = await readdir(directory, { withFileTypes: true });
	const routes = [];

	for (const entry of entries) {
		const entryPath = path.join(directory, entry.name);

		if (entry.isDirectory()) {
			const childRoutes = await collectStaticRoutes(entryPath, [...segments, entry.name]);
			routes.push(...childRoutes);
			continue;
		}

		if (entry.isFile() && PAGE_FILE_PATTERN.test(entry.name)) {
			routes.push(normalizeRoute(segments));
		}
	}

	return routes;
};

export default async function sitemap() {
	const baseURL = config.api || 'https://rockdigital.agency';

	let staticRoutes = [];
	let posts = [];

	try {
		staticRoutes = await collectStaticRoutes(APP_DIRECTORY);
	} catch (error) {
		console.error('Failed to collect static routes for sitemap:', error.message);
	}

	try {
		const { data } = await axios.get(
			`${baseURL}/api/posts?filters[publishedAt][$notNull]=true&populate=*`
		);
		posts = data?.data || [];
	} catch (error) {
		console.error('Failed to fetch posts for sitemap:', error.message);
	}

	const pageEntries = [...new Set(staticRoutes)].sort().map((route) => ({
		url: `${baseURL}${route}`,
		changeFrequency: route === '/' ? 'weekly' : 'monthly',
		priority: route === '/' ? 1 : 0.8,
	}));

	const postEntries = posts.map((post) => ({
		url: `${baseURL}/blog/${post.slug}`,
		lastModified: post.updatedAt,
		changeFrequency: 'monthly',
		priority: 1,
	}));

	const caseStudyEntries = caseStudies.map((caseStudy) => ({
		url: `${baseURL}/case-studies/${caseStudy.slug}`,
		changeFrequency: 'monthly',
		priority: 0.8,
	}));

	return [...pageEntries, ...caseStudyEntries, ...postEntries];
}
