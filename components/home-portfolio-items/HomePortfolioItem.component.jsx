'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import axios from 'axios';

import styles from './home_portfolio.styles.module.css';

const HomePortfolioItem = () => {
	const [error, setError] = useState(null);
	const [portfolioItems, setPortfolioItems] = useState([]);

	useEffect(() => {
		const getPortfolioItems = async () => {
			await axios
				.get(
					'https://rockdigital.agency/dashboard/api/portfolio-items?populate=*'
				)
				.then((data) => setPortfolioItems(data.data.data))
				.catch((error) => setError(error));
		};
		getPortfolioItems();
	}, []);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	return (
		<>
			{portfolioItems &&
				portfolioItems.map((portfolioItem, i) => {
					if (i >= portfolioItems.length - 4)
						return (
							<>
								<div className={styles.portfolio_item} key={i}>
									<Link
										href={portfolioItem.attributes.url}
										target='_blank'
										rel='noreferrer'
									>
										<div className={styles.portfolio_image_container}>
											<Image
												src={`https://rockdigital.agency/dashboard${portfolioItem.attributes.image.data.attributes.url}`}
												alt={portfolioItem.attributes.name}
												fill
											/>
										</div>
									</Link>
									<h4>{portfolioItem.attributes.name}</h4>
								</div>
							</>
						);
					return null;
				})}
		</>
	);
};

export default HomePortfolioItem;
