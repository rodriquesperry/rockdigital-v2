import axios from 'axios';
import config from '@/config';
import { notFound } from 'next/navigation';
import BlogPostAnimated from './BlogPostAnimated.client';

const baseURL = config.api || 'http://127.0.0.1:1337';

// Generates paths at build time (optional, for static generation)
export async function generateStaticParams() {
	const { data } = await axios.get(`${baseURL}/api/posts`);

	// Return an array of slugs that will be used so that the page can be built stacically instead of dynamic/ good for seo (page speed)
	return data.data.map((post) => ({
		blogSlug: post.slug,
	}));
}

export async function generateMetadata({ params, searchParams }, parent) {
	// Read route params
	const blogSlug = (await params).blogSlug;

	// Fetch data
	const { data } = await axios.get(`${baseURL}/api/posts/${blogSlug}`);
	const post = data.data;

	return {
		title: `Rock Digital | ${post.title}`,
		description: post.short_description,
	};
}

export default async function BlogPostPage({ params, searchParams }) {
	const { blogSlug } = await params;

	try {
		const { data } = await axios.get(
			`${baseURL}/api/posts?filters[slug][$eq]=${blogSlug}&populate=*`
		);

		const post = data.data[0];

		if (!post) {
			return notFound(); // Triggers Next.js 404 page
		}

		const {
			publishedAt,
			author,
			title,
			body,
			read_time,
			short_description,
			featured_image,
		} = post;

		const featImage = featured_image?.url || '';
		const date = new Date(publishedAt);

		return (
			<BlogPostAnimated
				baseURL={baseURL}
				featImage={featImage}
				title={title}
				shortDescription={short_description}
				readTime={read_time}
				author={author}
				dateString={date.toDateString()}
				body={body}
			/>
		);
	} catch (error) {
		return (
			<div>
				<p>An error occurred: {error.message}</p>
			</div>
		);
	}
}
