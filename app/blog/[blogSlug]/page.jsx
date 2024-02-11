'use client';

import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styles from './blogPost.module.css';

const BlogPost = ({ params }) => {
	const [error, setError] = useState(null);
	const [post, setPost] = useState({});
	const [authorImage, setAuthorImage] = useState({});
	const [featImage, setFeatImage] = useState({});

	console.log(params);

	useEffect(() => {
		const getPost = async () => {
			await axios
				.get(
					`https://rockdigital.agency/dashboard/api/posts/${params.blogSlug}?populate=*`
				)
				.then((data) => {
					console.log(data);
					setPost(data.data.data.attributes);
					setAuthorImage(
						data.data.data.attributes.author_image.data.attributes.url
					);
					setFeatImage(
						data.data.data.attributes.featured_image.data.attributes.url
					);
				})
				.catch((error) => setError(error));
		};
		getPost();
	}, [params.blogSlug]);

	const { publishedAt, author, title, body, read_time, short_description } =
		post;

	let date = new Date(publishedAt);

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
									<img
										src={`https://rockdigital.agency/dashboard${featImage}`}
										alt=''
										fluid
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
