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
				.get('https://rockdigital.agency/dashboard/api/posts?populate=*')
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
						if (post.attributes.featured) {
							return (
								<Col
									className={styles.featured_container}
									md={(6, { order: 1 })}
									key={i}
								>
									<Link href={`/blog/${post.attributes.slug}`}>
										<Card
											key={i}
											className={`${styles.featured} ${styles.card}`}
										>
											<div className={styles.featured_image_container}>
												<Image
													src={`https://rockdigital.agency/dashboard${post.attributes.featured_image.data.attributes.url}`}
													fill
												/>
											</div>
											<Card.Body>
												<Card.Title>
													{post.attributes.title.length > 60
														? `${post.attributes.title.slice(0, 60)}...`
														: post.attributes.title}
												</Card.Title>
												<Card.Text>
													{post.attributes.short_description.length > 150
														? `${post.attributes.short_description.substring(
																0,
																150
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
				<Col
					md={(6, { order: 2 })}
					lg={3}
					className={styles.headline_posts_col}
				>
					{posts &&
						posts.map((post, i) => {
							if (!post.attributes.featured && i <= 1)
								return (
									<a href={`/blog/${post.attributes.slug}`} key={i}>
										<Card
											key={i}
											className={`${styles.headline_posts} ${styles.card} order-2`}
										>
											<div className={styles.headline_posts_image_container}>
												<Image
													src={`https://rockdigital.agency/dashboard${post.attributes.featured_image.data.attributes.url}`}
													className={styles.img_fluid}
                          fill
												/>
											</div>
											<Card.Body>
												<Card.Title>
													{post.attributes.title.length > 38
														? `${post.attributes.title.slice(0, 38)}...`
														: post.attributes.title}
												</Card.Title>
												<Card.Text>
													{post.attributes.short_description.length > 40
														? `${post.attributes.short_description.substring(
																0,
																40
														  )}...`
														: post.attributes.short_description}
												</Card.Text>
											</Card.Body>
										</Card>
									</a>
								);
							return null;
						})}
				</Col>
			</Row>
		</section>
	);
};

export default FeaturedPost;
