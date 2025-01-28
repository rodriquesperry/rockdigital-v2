import axios from 'axios';

export default async function sitemap() {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

	const { data } = await axios.get(
		`${baseURL}/api/posts?filters[publishedAt][$notNull]=true&populate=*`
	);
	const posts = data.data;

	console.log('baseURL: ', baseURL);

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
