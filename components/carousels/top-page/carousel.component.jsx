'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Carousel from 'react-bootstrap/Carousel';

import WebDesign2479w from '@/assets/web-design-full_2479px.webp';
import DigitalMarketing2479w from '@/assets/digital-marketing_2479px.webp';
import SheratonHotel2479w from '@/assets/sheraton-houston-st-san-antonio-tx_2479px.webp';

import styles from './carousel.module.css';

const CarouselTopPage = () => {
	let rando = Math.floor(Math.random() * 2);

	let routes = ['/website-improvement', '/website-design-and-development'];

	return (
		<div>
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
						src={WebDesign2479w}
						alt='First slide'
            fill
            priority
					/>
					<Carousel.Caption className={styles.carousel_caption}>
						<div className={styles.carousel_caption_block}>
							<div className={styles.carousel_heading}>
								<h3 className='playfair'>
									STYLISH &<br />
									<span>ORIGINAL</span>
								</h3>
							</div>
							<p className={styles.carousel_paragraph}>
								Custom websites designed with your customers in mind.
							</p>
							<Link
								href='/website-design-and-development'
								className={`${styles.btn} ${styles.min_btn_width} lato`}
							>
								<p>Website Design</p>
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={styles.carousel_item}>
					<Image
						className='d-block img-fluid'
						src={DigitalMarketing2479w}
						alt='Second slide'
            fill
					/>

					<Carousel.Caption className={styles.carousel_caption}>
						<div className={styles.carousel_caption_block}>
							<div className={styles.carousel_heading}>
								<h3 className='playfair'>
									STABILITY &<br />
									<span>SUPERIORITY</span>
								</h3>
							</div>
							<p className={styles.carousel_paragraph}>
								Outperform your competitors with proven processes.
							</p>
							<Link
								href='/website-improvement'
								className={`${styles.btn} lato`}
							>
								<p>Online Presence Improvement</p>
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={styles.carousel_item}>
					<Image
						className='d-block img-fluid'
						src={SheratonHotel2479w}
						alt='Third slide'
            fill
					/>

					<Carousel.Caption className={styles.carousel_caption}>
						<div className={styles.carousel_caption_block}>
							<div className={styles.carousel_heading}>
								<h3 className='playfair'>
									EFFECTIVE &<br />
									<span>CONSISTENT</span>
								</h3>
							</div>
							<p className={styles.carousel_paragraph}>
								Customers will love to interact with your business online
							</p>
							<Link
								href={routes[rando]}
								className={`${styles.btn} ${styles.min_btn_width} lato`}
							>
								<p>Get Started Now</p>
							</Link>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselTopPage;
