'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMediaUrl } from '@/lib/getStrapiMediaUrl';
import { formatBlogDate, getOriginalPublishedDate } from '@/lib/formatBlogDate';
import styles from './blogPost.module.css';
import BlogShareMenu from './BlogShareMenu.client';

const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const truncateWords = (text, maxWords = 22) => {
	if (!text || typeof text !== 'string') {
		return '';
	}

	const words = text.trim().split(/\s+/);
	if (words.length <= maxWords) {
		return text.trim();
	}

	return `${words.slice(0, maxWords).join(' ')}...`;
};

export default function BlogPostAnimated({
	featImage,
	title,
	shortDescription,
	readTime,
	author,
	publishedDateString,
	updatedDateString,
	children,
	category,
	slug,
	relatedPosts = [],
}) {
	const containerRef = useRef(null);

	useEffect(() => {
		let ctx;

		const run = async () => {
			if (prefersReducedMotion() || !containerRef.current) {
				return;
			}

			const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
				import('gsap'),
				import('gsap/ScrollTrigger'),
			]);

			gsap.registerPlugin(ScrollTrigger);

			ctx = gsap.context(() => {
				gsap.fromTo(
					'[data-animate="blog-background"]',
					{ opacity: 0, x: 72 },
					{
						opacity: 1,
						x: 0,
						duration: 1.2,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: '[data-animate="blog-header"]',
							start: 'top 78%',
							once: true,
						},
					},
				);

				gsap.fromTo(
					'[data-animate="blog-image"]',
					{ opacity: 0, x: -72 },
					{
						opacity: 1,
						x: 0,
						duration: 1.2,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: '[data-animate="blog-header"]',
							start: 'top 78%',
							once: true,
						},
					},
				);

				gsap.fromTo(
					'[data-animate="blog-article"]',
					{ opacity: 0, y: 14 },
					{
						opacity: 1,
						y: 0,
						duration: 1.2,
						delay: 0.08,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: '[data-animate="blog-article"]',
							start: 'top 82%',
							once: true,
						},
					},
				);
			}, containerRef);
		};

		run();

		return () => {
			ctx?.revert();
		};
	}, []);

	return (
		<div ref={containerRef} className={styles.blog_post_container}>
			<div className={styles.blog_post_header} data-animate='blog-header'>
				<div
					className={styles.blog_post_header_background}
					data-animate='blog-background'
				/>
				<div className={styles.header_content_container}>
					<div
						className={`col ${styles.blog_image_container}`}
						data-animate='blog-image'
					>
						<Image
							src={featImage}
							alt={title || 'Featured Image'}
							fill
							sizes='(max-width: 767px) 100vw, (max-width: 1023px) calc(100vw - 2rem), 50vw'
						/>
					</div>
					<div className={`col ${styles.header_text}`}>
						<h1 className={styles.header_text_h1}>{title}</h1>
						<p className={`${styles.short_description} d-none d-md-block`}>
							{shortDescription}
						</p>
						<div className={styles.post_actions}>
							<p className={styles.read_time}>READ TIME: {readTime} mins</p>
						</div>
						<div className={styles.share_menu_container}>
							Share <BlogShareMenu slug={slug} title={title} />
						</div>
					</div>
				</div>

				<div className={styles.author_info}>
					{/* <Image
							src={featImage}
							alt={title || 'Featured Image'}
							fill
							sizes='auto'
						/> */}
					{/* <div className={`col-3 ${styles.info_pic}`}> */}
					<div className={styles.info_text}>
						{/* <h5 className={styles.author}>{author}</h5> */}
						<div className={styles.postDates}>
							{publishedDateString ? (
								<h6 className={styles.date}>Published {publishedDateString}</h6>
							) : null}
							{updatedDateString ? (
								<h6 className={styles.date}>
									Last updated {updatedDateString}
								</h6>
							) : null}
						</div>
						<small className={styles.category}>{category.toUpperCase()}</small>
					</div>
					{/* </div> */}
				</div>
			</div>
			<div className={styles.blog_post} data-animate='blog-article'>
				{children}
				<div className={styles.share_menu_container2}>
					Share <BlogShareMenu slug={slug} title={title} />
				</div>
			</div>
			{relatedPosts.length > 0 ? (
				<section
					className={styles.relatedSection}
					aria-labelledby='related-posts'
				>
					<div className={styles.relatedHeader}>
						<p>Keep Reading</p>
						<h2 id='related-posts'>Related Articles</h2>
					</div>
					<div className={styles.relatedGrid}>
						{relatedPosts.map((post) => {
							const imageUrl = getStrapiMediaUrl(post.featured_image);

							return (
								<Link
									href={`/blog/${post.slug}`}
									key={post.id || post.slug}
									className={styles.relatedCard}
								>
									<div className={styles.relatedMedia}>
										{imageUrl ? (
											<Image
												src={imageUrl}
												alt={post.title || 'Related blog post image'}
												fill
												sizes='(max-width: 767px) 100vw, (max-width: 1200px) 33vw, 280px'
											/>
										) : null}
									</div>
									<div className={styles.relatedBody}>
										<p className={styles.relatedDate}>
											{formatBlogDate(getOriginalPublishedDate(post))}
										</p>
										<h3>{post.title}</h3>
										<p>{truncateWords(post.short_description)}</p>
									</div>
								</Link>
							);
						})}
					</div>
				</section>
			) : null}
		</div>
	);
}
