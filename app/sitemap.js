import axios from 'axios';
import config from '@/config';

export default async function sitemap() {
	const baseURL = config.api || 'https://rockdigital.agency';

	let posts = [];

	try {
		const { data } = await axios.get(
			`${baseURL}/api/posts?filters[publishedAt][$notNull]=true&populate=*`
		);
		posts = data?.data || [];

	} catch (e) {
		console.error('Failed to fetch posts for sitemap: ', e.message);
	}

	const postEntries = posts.map((post) => ({
		url: `${baseURL}/blog/${post.slug}`,
		lastModified: post.updatedAt,
		changeFrequency: 'monthly',
		priority: 1,
	}));

	return [
		{
			url: `${baseURL}/blog`,
		},
		{
			url: `${baseURL}/services`,
		},
		{
			url: `${baseURL}/portfolio`,
		},
		{
			url: `${baseURL}/contact`,
		},
		...postEntries,
	];
}
