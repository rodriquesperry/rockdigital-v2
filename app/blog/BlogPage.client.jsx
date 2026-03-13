'use client';

import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config';

import styles from './blog.module.css';

const baseURL = config.api || 'http://127.0.0.1:1337';

const getImageUrl = (post) => {
	const img = post?.featured_image;
	const url = img?.url || img?.data?.attributes?.url || '';
	if (!url) {
		return '';
	}
	return url.startsWith('http') ? url : `${baseURL}${url}`;
};

const getCategoriesFromPost = (post) => {
	const fromCategory = post?.category ? [post.category] : [];
	const fromTags = Array.isArray(post?.tags) ? post.tags : [];
	const fromCategories = Array.isArray(post?.categories) ? post.categories : [];

	return [...fromCategory, ...fromTags, ...fromCategories]
		.map((item) => {
			if (typeof item === 'string') {
				return item;
			}
			return item?.name || item?.title || item?.slug || '';
		})
		.map((name) => name.trim())
		.filter(Boolean);
};

const formatDate = (dateValue) => {
	if (!dateValue) {
		return '';
	}
	const date = new Date(dateValue);
	if (Number.isNaN(date.getTime())) {
		return '';
	}
	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
};

const truncateWords = (text, maxWords = 30) => {
	if (!text || typeof text !== 'string') {
		return '';
	}
	const words = text.trim().split(/\s+/);
	if (words.length <= maxWords) {
		return text.trim();
	}
	return `${words.slice(0, maxWords).join(' ')}...`;
};

export default function BlogPageClient() {
	const [posts, setPosts] = useState([]);
	const [activeCategory, setActiveCategory] = useState('All');
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const { data } = await axios.get(
					`${baseURL}/api/posts?filters[publishedAt][$notNull]=true&populate=*`
				);
				const incoming = Array.isArray(data?.data) ? data.data : [];
				setPosts(incoming.reverse());
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPosts();
	}, []);

	const featuredPost = useMemo(
		() => posts.find((post) => Boolean(post?.featured)) || posts[0],
		[posts]
	);

	const sidePosts = useMemo(() => {
		if (!featuredPost) {
			return [];
		}
		return posts.filter((post) => post.id !== featuredPost.id).slice(0, 2);
	}, [posts, featuredPost]);

	const categories = useMemo(() => {
		const set = new Set();
		posts.forEach((post) => {
			getCategoriesFromPost(post).forEach((category) => set.add(category));
		});
		return ['All', ...Array.from(set)];
	}, [posts]);

	const visiblePosts = useMemo(() => {
		if (!featuredPost) {
			return [];
		}
		const excludedIds = new Set([
			featuredPost.id,
			...sidePosts.map((post) => post.id),
		]);

		const remaining = posts.filter((post) => !excludedIds.has(post.id));
		if (activeCategory === 'All') {
			return remaining;
		}

		return remaining.filter((post) =>
			getCategoriesFromPost(post).includes(activeCategory)
		);
	}, [posts, featuredPost, sidePosts, activeCategory]);

	if (error) {
		return (
			<div className={styles.page}>
				<p className={styles.error}>An error occurred: {error.message}</p>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className={styles.page}>
				<p className={styles.status}>Loading blog posts...</p>
			</div>
		);
	}

	if (!posts.length) {
		return (
			<div className={styles.page}>
				<p className={styles.status}>No posts available right now.</p>
			</div>
		);
	}

	return (
		<div className={styles.page}>
			<section className={styles.heroSection}>
				<h1 className={styles.heading}>Insights From The Rock Digital Team</h1>

				<div className={styles.heroGrid}>
					{featuredPost && (
						<Link href={`/blog/${featuredPost.slug}`} className={styles.mainFeatureCard}>
							<div className={styles.mainFeatureMedia}>
								{getImageUrl(featuredPost) && (
									<Image
										src={getImageUrl(featuredPost)}
										alt={featuredPost.title || 'Blog feature image'}
										fill
										sizes='(max-width: 1024px) 100vw, 70vw'
										priority
									/>
								)}
							</div>
							<div className={styles.mainFeatureContent}>
								<p className={styles.cardDate}>{formatDate(featuredPost.publishedAt)}</p>
								<h2>{featuredPost.title}</h2>
								<p>{truncateWords(featuredPost.short_description, 30)}</p>
							</div>
						</Link>
					)}

					<div className={styles.sideFeatureStack}>
						{sidePosts.map((post) => (
							<Link href={`/blog/${post.slug}`} key={post.id} className={styles.sideFeatureCard}>
								<div className={styles.sideFeatureMedia}>
									{getImageUrl(post) && (
										<Image
											src={getImageUrl(post)}
											alt={post.title || 'Blog post image'}
											fill
											sizes='(max-width: 1024px) 100vw, 30vw'
										/>
									)}
								</div>
								<div className={styles.sideFeatureContent}>
									<p className={styles.cardDate}>{formatDate(post.publishedAt)}</p>
									<h3>{post.title}</h3>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className={styles.filtersSection}>
				<div className={styles.chipsWrap}>
					{categories.map((category) => (
						<button
							key={category}
							type='button'
							onClick={() => setActiveCategory(category)}
							className={`${styles.chip} ${
								activeCategory === category ? styles.chipActive : ''
							}`}
						>
							{category}
						</button>
					))}
				</div>
			</section>

			<section className={styles.postsSection}>
				<div className={styles.postsGrid}>
					{visiblePosts.map((post) => (
						<Link href={`/blog/${post.slug}`} key={post.id} className={styles.postCard}>
							<div className={styles.postMedia}>
								{getImageUrl(post) && (
									<Image
										src={getImageUrl(post)}
										alt={post.title || 'Blog post image'}
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
								)}
							</div>
							<div className={styles.postBody}>
								<p className={styles.cardDate}>{formatDate(post.publishedAt)}</p>
								<h3>{post.title}</h3>
								<p>{truncateWords(post.short_description, 30)}</p>
							</div>
						</Link>
					))}
				</div>
				{!visiblePosts.length && (
					<p className={styles.status}>No posts found in this category.</p>
				)}
			</section>
		</div>
	);
}
