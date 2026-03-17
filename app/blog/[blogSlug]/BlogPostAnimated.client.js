'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './blogPost.module.css';

const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function BlogPostAnimated({
	baseURL,
	featImage,
	title,
	shortDescription,
	readTime,
	author,
  authorImage,
	dateString,
	children,
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
					}
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
					}
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
					}
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
							src={`${baseURL}${featImage}`}
							alt={title || 'Featured Image'}
							fill
							sizes='auto'
						/>
					</div>
					<div className={`col ${styles.header_text}`}>
						<h2 className={styles.header_text_h2}>{title}</h2>
						<p className={`${styles.short_description} d-none d-md-block`}>
							{shortDescription}
						</p>
						<p className={styles.read_time}>READ TIME: {readTime} mins</p>
					</div>
				</div>

				<div className={styles.author_info}>
        {/* <Image
							src={`${baseURL}${authorImage}`}
							alt={title || 'Featured Image'}
							fill
							sizes='auto'
						/> */}
					<div className={`col-3 ${styles.info_pic}`}>
          
						<div className={styles.info_text}>
							<h5 className={styles.author}>{author}</h5>
							<h6 className={styles.date}>{dateString}</h6>
							<small className={styles.category}>Tags, categories, hashtags</small>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.blog_post} data-animate='blog-article'>
				{children}
			</div>
		</div>
	);
}
