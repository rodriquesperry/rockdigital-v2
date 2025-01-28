'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import axios from 'axios';

import styles from './homePortfolio.module.css';

const HomePortfolioItem = () => {
	const [error, setError] = useState(null);
	const [portfolioItems, setPortfolioItems] = useState([]);
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://127.0.0.1:1337';

	useEffect(() => {
		const getPortfolioItems = async () => {
			await axios
				.get(`${baseURL}/api/portfolio-items?populate=*`)
				.then((data) => {
					setPortfolioItems(data.data.data);
				})
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
							<div className={styles.portfolio_item} key={i}>
								<Link
									className={styles.portfolio_link}
									href={portfolioItem.url}
									target='_blank'
									rel='noreferrer'
								>
									<div className={styles.portfolio_image_container}>
										<Image
											src={`${baseURL}${portfolioItem.image.url}`}
											alt={portfolioItem.name}
											fill
											sizes='auto'
                      priority
										/>
									</div>
								</Link>
								<h4 className='text-center'>{portfolioItem.name}</h4>
							</div>
						);
					return null;
				})}
		</>
	);
};

export default HomePortfolioItem;
