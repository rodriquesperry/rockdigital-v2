// 'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import styles from './featured_post.module.css';

const FeaturedPost = () => {
	const [error, setError] = useState(null);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const { data } = await axios.get(
					'http://127.0.0.1:1337/api/posts?populate=*'
				);
				setPosts(data.data.reverse());
			} catch (err) {
				setError(err);
			}
		};
		fetchPosts();
	}, []);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	const renderCard = (post, isFeatured, index) => (
		<Link href={`/blog/${post.slug}`}>
			<Card
				className={`${isFeatured ? styles.featured : styles.headline_posts} ${
					styles.card
				}`}
				key={post.id}
			>
				<div
					className={
						isFeatured
							? styles.featured_image_container
							: styles.headline_posts_image_container
					}
				>
					<Image
						src={`http://127.0.0.1:1337${post.featured_image.url}`}
						alt='Featured Image'
						fill
						priority={isFeatured && index === 0}
						loading={isFeatured && index === 0 ? undefined : 'lazy'}
					/>
				</div>
				<Card.Body>
					<Card.Title>
						{post.title.length > (isFeatured ? 60 : 38)
							? `${post.title.slice(0, isFeatured ? 60 : 38)}...`
							: post.title}
					</Card.Title>
					<Card.Text>
						{post.short_description.length > (isFeatured ? 150 : 40)
							? `${post.short_description.slice(0, isFeatured ? 150 : 40)}...`
							: post.short_description}
					</Card.Text>
				</Card.Body>
			</Card>
		</Link>
	);

	return (
		<section className={`${styles.feature_section} container`}>
			<Row className={styles.feature_row}>
				{posts.map((post, index) =>
					post.featured ? (
						<Col
							key={post.id}
							md={(6, { order: 1 })}
							lg={9}
							className={styles.featured_container}
						>
							{renderCard(post, true, index)}
						</Col>
					) : null
				)}
				<Col
					md={(6, { order: 2 })}
					lg={3}
					className={styles.headline_posts_col}
				>
					{posts
						.filter((post, index) => !post.featured && index < 2)
						.map((post, index) => renderCard(post, false, index))}
				</Col>
			</Row>
		</section>
	);
};

export default FeaturedPost;
