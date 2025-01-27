'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import styles from './blogPosts.module.css';

const BlogPost = ({ params }) => {
	const [error, setError] = useState(null);
	const [posts, setPosts] = useState([]);
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

	useEffect(() => {
		const getPosts = async () => {
			await axios
				.get(
					`${baseURL}/api/posts?filters[publishedAt][$notNull]=true&populate=*`
				)
				.then((data) => {
          
          setPosts(data.data.data.reverse());
				})
				.catch((error) => setError(error));
		};
		getPosts();
	}, []);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	return (
		<section className={styles.posts}>
			{posts &&
				posts.map((post, i) => {
					if (!post.featured && i >= 2) {
						return (
							<Col md={6} lg={3} className={styles.post_col} key={i}>
								<Link href={`/blog/${post.slug}`}>
									<Card className={styles.card}>
										<div className={styles.blogPost_image_container}>
											<Image
												// variant='top'
												src={`${baseURL}${post.featured_image.url}`}
												alt={'Featured Image'}
												fill
											/>
										</div>
										<Card.Body className={styles.card_body}>
											<Card.Title>
												{post.title.length > 48
													? `${post.title.slice(0, 48)}...`
													: post.title}
											</Card.Title>
											<Card.Text>
												{post.short_description.length > 60
													? `${post.short_description.substring(0, 60)}...`
													: post.short_description}
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						);
					}
					return null;
				})}
		</section>
	);
};

export default BlogPost;
