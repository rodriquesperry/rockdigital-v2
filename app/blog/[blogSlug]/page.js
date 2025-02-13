import axios from 'axios';
import Image from 'next/image';
import styles from './blogPost.module.css';
import config from '@/config';

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
			author_image,
		} = post;

		const featImage = featured_image?.url || '';
		const authorImg = author_image?.url || '';
		const date = new Date(publishedAt);

		return (
			<div className={styles.blog_post_container}>
				<div className={styles.blog_post_header}>
					<div className={styles.blog_post_header_background}></div>
					<div className={styles.header_content_container}>
						<div className={`col ${styles.blog_image_container}`}>
							<Image
								src={`${baseURL}${featImage}`}
								alt={title || 'Featured Image'}
								fill
								sizes='auto'
							/>
						</div>
						<div className={`col ${styles.header_text}`}>
							<h2 className={styles.header_text_h2}>{title}</h2>
							<p className={`${styles.short_description} d-none d-md-block`}>
								{short_description}
							</p>
							<p className={styles.read_time}>READ TIME: {read_time} mins</p>
						</div>
					</div>

					<div className={styles.author_info}>
						<div className={`col-3 ${styles.info_pic}`}>
							<div className={styles.info_text}>
								<h5 className={styles.author}>{author}</h5>
								<h6 className={styles.date}>{date.toDateString()}</h6>
								<small className={styles.category}>
									Tags, categories, hashtags
								</small>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.blog_post}>
					<p>{body}</p>
				</div>
			</div>
		);
	} catch (error) {
		return (
			<div className={styles.error_container}>
				<p>An error occurred: {error.message}</p>
			</div>
		);
	}
}
