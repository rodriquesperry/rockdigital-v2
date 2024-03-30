'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import styles from './portfolioItem.module.css';

const PortfolioItem = () => {
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
					return (
						<div className={styles.portfolio_item} key={i}>
							<div className={styles.portfolio_item_img_container}>
								<a
									href={portfolioItem.attributes.url}
									target='_blank'
									rel='noreferrer'
								>
									<Image
										src={`https://rockdigital.agency/dashboard${portfolioItem.attributes.image.data.attributes.url}`}
										alt={portfolioItem.attributes.name}
										fill
									/>

								</a>
							</div>
							<h4>{portfolioItem.attributes.name}</h4>

						</div>
					);
				})}
		</>
	);
};

export default PortfolioItem;
