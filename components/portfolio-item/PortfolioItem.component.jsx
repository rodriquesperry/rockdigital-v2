'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import config from '@/config';
import styles from './portfolioItem.module.css';

const PortfolioItem = () => {
	const [error, setError] = useState(null);
	const [portfolioItems, setPortfolioItems] = useState([]);

  const baseURL = config.api || '127.0.0.1:1337';

	useEffect(() => {
		const getPortfolioItems = async () => {
			await axios
				.get(
					`${baseURL}/api/portfolio-items?populate=*`
				)
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

  console.log(portfolioItems);

	return (
		<>
			{portfolioItems &&
				portfolioItems.map((portfolioItem, i) => {
					return (
						<div className={styles.portfolio_item} key={i}>
								<Link
									href={portfolioItem.url}
									target='_blank'
									rel='noreferrer'
								>
							<div className={styles.portfolio_item_img_container}>
									<Image
										src={`${baseURL}${portfolioItem.image.url}`}
										alt={portfolioItem.name}
										fill
                    priority
									/>
							</div>

								</Link>
							<h4>{portfolioItem.name}</h4>

						</div>
					);
				})}
		</>
	);
};

export default PortfolioItem;
