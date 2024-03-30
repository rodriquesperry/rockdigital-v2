import React from 'react';

import PortfolioItem from '@/components/portfolio-item/PortfolioItem.component';

import styles from './portfolioPage.module.css';

const PortfolioPage = () => {
	return (
		<div className={styles.portfolio_container}>
			<div className={styles.portfolio_img_container}>
				<h1 className={styles.portfolio_header_text}>PORTFOLIO</h1>
			</div>
			<div className={styles.portfolio_item_container}>
				<PortfolioItem />
			</div>
		</div>
	);
};

export default PortfolioPage;
