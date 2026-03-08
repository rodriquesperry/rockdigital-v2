'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Carousel from 'react-bootstrap/Carousel';

import WebDesign1359w from '@/assets/web-design-full_1359px.webp';
import DigitalMarketing1359w from '@/assets/digital-marketing_1359px.webp';
import SheratonHotel1359w from '@/assets/sheraton-houston-st-san-antonio-tx_1359px.webp';

import styles from './carousel.module.css';

const CarouselTopPage = () => {
	return (
		<div className={styles.carousel_div}>
			<Carousel
				interval={7300}
				className={`container ${styles.carousel}`}
				indicators={false}
				controls={false}
				fade
			>
				<Carousel.Item className={styles.carousel_item}>
					<Image
						className={`d-block img-fluid ${styles.web_design}`}
						src={WebDesign1359w}
						alt='First slide'
						fill
						priority
						sizes='100%'
					/>
					<Carousel.Caption className={styles.carousel_caption}>
						<div className={styles.carousel_caption_block}>
							<div className={styles.carousel_heading}>
								<h3 className='playfair'>
									Custom Websites That Turn Visitors Into Customers
								</h3>
							</div>
							<p className={styles.carousel_paragraph}>
								Strategically designed websites that showcase your brand and
								convert visitors into customers.
							</p>
							<Link
								href='/website-design-and-development'
								className={`${styles.btn} lato`}
							>
								<span>Start Your Website Project</span>
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={styles.carousel_item}>
					<Image
						className='d-block img-fluid'
						src={DigitalMarketing1359w}
						alt='Second slide'
						fill
						priority
						sizes='100%'
					/>

					<Carousel.Caption className={styles.carousel_caption}>
						<div className={styles.carousel_caption_block}>
							<div className={styles.carousel_heading}>
								<h3 className='playfair'>
									Strategic Web Design Built for Growth
								</h3>
							</div>
							<p className={styles.carousel_paragraph}>
								Outperform competitors with strategy-driven design and proven
								digital processes.
							</p>
							<Link
								href='/website-improvement'
								className={`${styles.btn} lato`}
							>
								<span>Start Growing Online</span>
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={styles.carousel_item}>
					<Image
						className='d-block img-fluid'
						src={SheratonHotel1359w}
						alt='Third slide'
						fill
						priority
						sizes='100%'
					/>

					<Carousel.Caption className={styles.carousel_caption}>
						<div className={styles.carousel_caption_block}>
							<div className={styles.carousel_heading}>
								<h3 className='playfair'>
									Is Your Website Holding Your Business Back?
								</h3>
							</div>
							<p className={styles.carousel_paragraph}>
								Discover what’s working, what’s not, and how to turn your website into a powerful growth tool.{' '}
							</p>
							<Link
								href='/website-audit'
								className={`${styles.btn} lato`}
							>
								<span>Get a Website Audit</span>
							</Link>
              <span className={styles.carousel_span}>Professional analysis delivered within 48 hours</span>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselTopPage;
