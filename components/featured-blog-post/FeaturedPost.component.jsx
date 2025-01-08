// 'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import config from '@/config';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import styles from './featured_post.module.css';

const FeaturedPost = () => {
	const [error, setError] = useState(null);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			await axios
				.get('http://127.0.0.1:1337/api/posts?populate=*')
				.then((data) => setPosts(data.data.data.reverse()))
				.catch((error) => setError(error));
		};
		getPosts();
	}, [posts]);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}  

	return (
		<section className={`${styles.feature_section} container`}>
			<Row>
				{posts &&
					posts.map((post, i) => {
						if (post.featured) {
							return (
								<Col
									className={styles.featured_container}
									md={(6, { order: 1 })}
									key={i}
								>
									<Link href={`/blog/${post.slug}`}>
										<Card
											key={i}
											className={`${styles.featured} ${styles.card}`}
										>
											<div className={styles.featured_image_container}>
												<Image
													src={`http://127.0.0.1:1337${post.featured_image.url}`}
													fill
												/>
											</div>
											<Card.Body>
												<Card.Title>
													{post.title.length > 60
														? `${post.title.slice(0, 60)}...`
														: post.title}
												</Card.Title>
												<Card.Text>
													{post.short_description.length > 150
														? `${post.short_description.substring(
																0,
																150
														  )}...`
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
				<Col
					md={(6, { order: 2 })}
					lg={3}
					className={styles.headline_posts_col}
				>
					{posts &&
						posts.map((post, i) => {
							if (!post.featured && i <= 1)
								return (
									<Link href={`/blog/${post.slug}`} key={i}>
										<Card
											key={i}
											className={`${styles.headline_posts} ${styles.card} order-2`}
										>
											<div className={styles.headline_posts_image_container}>
												<Image
													src={`http://localhost:1337${post.featured_image.url}`}
													className={styles.img_fluid}
                          fill
												/>
											</div>
											<Card.Body>
												<Card.Title>
													{post.title.length > 38
														? `${post.title.slice(0, 38)}...`
														: post.title}
												</Card.Title>
												<Card.Text>
													{post.short_description.length > 40
														? `${post.short_description.substring(
																0,
																40
														  )}...`
														: post.short_description}
												</Card.Text>
											</Card.Body>
										</Card>
									</Link>
								);
							return null;
						})}
				</Col>
			</Row>
		</section>
	);
};

export default FeaturedPost;
