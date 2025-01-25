'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import styles from './blogPost.module.css';

console.log('blogSlug: ', params.blogSlug); // Debugging

const BlogPost = ({ params }) => {
	const [error, setError] = useState(null);
	const [post, setPost] = useState({});
	const [authorImage, setAuthorImage] = useState('');
	const [featImage, setFeatImage] = useState('');
	const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

	useEffect(() => {
		const getPost = async () => {
			try {
				const response = await axios.get(
					`${baseURL}/api/posts?filters[slug][$eq]=${params.blogSlug}&filters[publishedAt][$notNull]=true&populate=*`
				);

				console.log('API Response:', response.data); // Debugging        
        const postData = response.data.data[0];

				if (!postData) {
					throw new Error('Post not found.');
				}

				setPost(postData);

				// Safely extract image URLs
				setAuthorImage(postData.author_image?.url || '');
				setFeatImage(postData.featured_image?.url || '');
			} catch (error) {
				setError(error);
			}
		};
		getPost();
	}, [params.blogSlug]);

	const { publishedAt, author, title, body, read_time, short_description } =
		post;

	let date = new Date(publishedAt); // Fallback for date

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	if (!post) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className={styles.blog_post_container}>
				{post && (
					<div className={styles.blog_post_container}>
						<div className={styles.blog_post_header}>
							<div className={styles.blog_post_header_background}></div>
							<div className={styles.header_content_container}>
								<div className={`col ${styles.blog_image_container}`}>
									<Image
										src={`${baseURL}${featImage}`}
										alt={title + ' image.' || 'Featured Image'}
										fill
									/>
								</div>
								<div className={`col ${styles.header_text}`}>
									<h2 className={styles.header_text_h2}>{title}</h2>
									<p
										className={`${styles.short_description} d-none d-md-block`}
									>
										{short_description}
									</p>
									<p className={styles.read_time}>READ TIME: {read_time}mins</p>
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
				)}
			</div>
		</>
	);
};

export default BlogPost;
