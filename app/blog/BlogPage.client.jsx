'use client';

import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config';
import { getStrapiMediaUrl } from '@/lib/getStrapiMediaUrl';
import { formatBlogDate, getOriginalPublishedDate } from '@/lib/formatBlogDate';

import styles from './blog.module.css';

const baseURL = config.api || 'http://127.0.0.1:1337';
const ALL_CATEGORY_KEY = 'all';

const getImageUrl = (post) => {
	const img = post?.featured_image;
	return getStrapiMediaUrl(img);
};

const slugifyCategory = (name) =>
	name
		.toLowerCase()
		.trim()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

const getCategoryValueItems = (value) => {
	if (!value) {
		return [];
	}
	if (Array.isArray(value)) {
		return value.flatMap(getCategoryValueItems);
	}
	if (Array.isArray(value?.data)) {
		return value.data.flatMap(getCategoryValueItems);
	}
	if (value?.data) {
		return getCategoryValueItems(value.data);
	}
	return [value];
};

const getCategoryName = (item) => {
	if (typeof item === 'string') {
		return item;
	}

	const attributes = item?.attributes;
	return (
		item?.name ||
		item?.title ||
		item?.label ||
		attributes?.name ||
		attributes?.title ||
		attributes?.label ||
		item?.slug ||
		attributes?.slug ||
		''
	);
};

const getCategoriesFromPost = (post) => {
	const values = [post?.category, post?.tags, post?.categories];

	return values
		.flatMap(getCategoryValueItems)
		.map(getCategoryName)
		.map((name) => name.trim())
		.filter(Boolean);
};

const getCategoryOptionsFromPost = (post) =>
	getCategoriesFromPost(post).map((label) => ({
		label,
		key: slugifyCategory(label),
	}));

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
	const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY_KEY);
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

	const filteredPosts = useMemo(() => {
		if (activeCategory === ALL_CATEGORY_KEY) {
			return posts;
		}

		return posts.filter((post) =>
			getCategoryOptionsFromPost(post).some(
				(category) => category.key === activeCategory
			)
		);
	}, [posts, activeCategory]);

	const categories = useMemo(() => {
		const map = new Map();
		posts.forEach((post) => {
			getCategoryOptionsFromPost(post).forEach((category) => {
				if (category.key && !map.has(category.key)) {
					map.set(category.key, category.label);
				}
			});
		});
		return [
			{ key: ALL_CATEGORY_KEY, label: 'All' },
			...Array.from(map, ([key, label]) => ({ key, label })),
		];
	}, [posts]);

	const featuredPost = useMemo(
		() => filteredPosts.find((post) => Boolean(post?.featured)) || filteredPosts[0],
		[filteredPosts]
	);

	const sidePosts = useMemo(() => {
		if (!featuredPost) {
			return [];
		}
		return filteredPosts
			.filter((post) => post.id !== featuredPost.id)
			.slice(0, 2);
	}, [filteredPosts, featuredPost]);

	const visiblePosts = useMemo(() => {
		if (!featuredPost) {
			return [];
		}
		const excludedIds = new Set([
			featuredPost.id,
			...sidePosts.map((post) => post.id),
		]);

		return filteredPosts.filter((post) => !excludedIds.has(post.id));
	}, [filteredPosts, featuredPost, sidePosts]);

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
								<p className={styles.cardDate}>
									{formatBlogDate(getOriginalPublishedDate(featuredPost))}
								</p>
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
									<p className={styles.cardDate}>
										{formatBlogDate(getOriginalPublishedDate(post))}
									</p>
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
							key={category.key}
							type='button'
							onClick={() => setActiveCategory(category.key)}
							className={`${styles.chip} ${
								activeCategory === category.key ? styles.chipActive : ''
							}`}
						>
							{category.label}
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
								<p className={styles.cardDate}>
									{formatBlogDate(getOriginalPublishedDate(post))}
								</p>
								<h3>{post.title}</h3>
								<p>{truncateWords(post.short_description, 30)}</p>
							</div>
						</Link>
					))}
				</div>
				{!filteredPosts.length && (
					<p className={styles.status}>No posts found in this category.</p>
				)}
			</section>
		</div>
	);
}
