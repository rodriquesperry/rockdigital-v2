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
	// const id = params.id;

	useEffect(() => {
		const getPosts = async () => {
			await axios
				.get('https://rockdigital.agency/dashboard/api/posts?populate=*')
				.then((data) => setPosts(data.data.data.reverse()))
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
					if (!post.attributes.featured && i >= 2) {
						return (
							<Col md={6} lg={3} className={styles.post_col} key={i}>
								<Link href={`/blog/${post.attributes.slug}`}>
									<Card className={styles.card}>
										<div className={styles.BlogPost_image_container}>
											<Image
												// variant='top'
												src={`https://rockdigital.agency/dashboard${post.attributes.featured_image.data.attributes.url}`}
												fill
											/>
										</div>
										<Card.Body>
											<Card.Title>
												{post.attributes.title.length > 48
													? `${post.attributes.title.slice(0, 48)}...`
													: post.attributes.title}
											</Card.Title>
											<Card.Text>
												{post.attributes.short_description.length > 60
													? `${post.attributes.short_description.substring(
															0,
															60
													  )}...`
													: post.attributes.short_description}
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
