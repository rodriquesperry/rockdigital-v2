'use client';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';

import styles from './carousel_review.module.css';

const CarouselReview = () => {
	const [error, setError] = useState(null);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const getReviews = async () => {
			await axios
				.get('https://rockdigital.agency/dashboard/api/reviews?populate=*')
				.then((data) => setReviews(data.data.data))
				.catch((error) => setError(error));
		};
		getReviews();
	}, []);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	return (
		<div className={styles.review_carousel_container}>
			<Carousel interval={5000} variant='dark' indicators={false} controls={false} fade>
				<Carousel.Item className={styles.carousel}>
					<div className={`${styles.review} row`}>
						{reviews &&
							reviews.map((review, i) => {
								return (
									<div key={i}>
										<div className={`col ${styles.review_container}`}>
											<p>
												<span className={styles.quote}>&quot;</span>
												{review.attributes.review_quote}
												<span className={styles.quote}>&quot;</span>
											</p>
										</div>
										<div className={styles.reviewer_container}>
											<p>~</p>
											<h4 className={styles.reviewer}>
												{review.attributes.reviewer_name}
											</h4>
										</div>
									</div>
								);
							})}
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselReview;
