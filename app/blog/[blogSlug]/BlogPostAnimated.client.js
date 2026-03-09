'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import styles from './blogPost.module.css';

const premiumEase = [0.16, 1, 0.3, 1];
const viewport = { once: true, amount: 0.25 };

const imageReveal = {
	hidden: { opacity: 0, x: -72 },
	show: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.2, ease: premiumEase },
	},
};

const backgroundReveal = {
	hidden: { opacity: 0, x: 72 },
	show: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.2, ease: premiumEase },
	},
};

const articleFade = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2, ease: premiumEase, delay: 0.08 },
	},
};

export default function BlogPostAnimated({
	baseURL,
	featImage,
	title,
	shortDescription,
	readTime,
	author,
	dateString,
	body,
}) {
	return (
		<div className={styles.blog_post_container}>
			<div className={styles.blog_post_header}>
				<motion.div
					className={styles.blog_post_header_background}
					variants={backgroundReveal}
					initial='hidden'
					whileInView='show'
					viewport={viewport}
				/>
				<div className={styles.header_content_container}>
					<motion.div
						className={`col ${styles.blog_image_container}`}
						variants={imageReveal}
						initial='hidden'
						whileInView='show'
						viewport={viewport}
					>
						<Image
							src={`${baseURL}${featImage}`}
							alt={title || 'Featured Image'}
							fill
							sizes='auto'
						/>
					</motion.div>
					<div className={`col ${styles.header_text}`}>
						<h2 className={styles.header_text_h2}>{title}</h2>
						<p className={`${styles.short_description} d-none d-md-block`}>
							{shortDescription}
						</p>
						<p className={styles.read_time}>READ TIME: {readTime} mins</p>
					</div>
				</div>

				<div className={styles.author_info}>
					<div className={`col-3 ${styles.info_pic}`}>
						<div className={styles.info_text}>
							<h5 className={styles.author}>{author}</h5>
							<h6 className={styles.date}>{dateString}</h6>
							<small className={styles.category}>Tags, categories, hashtags</small>
						</div>
					</div>
				</div>
			</div>
			<motion.div
				className={styles.blog_post}
				variants={articleFade}
				initial='hidden'
				whileInView='show'
				viewport={viewport}
			>
				<p>{body}</p>
			</motion.div>
		</div>
	);
}
