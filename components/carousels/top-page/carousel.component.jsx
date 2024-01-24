'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Carousel from 'react-bootstrap/Carousel';

import WebDesign239w from '@/assets/web-design-full_239px.jpeg';
import WebDesign344w from '@/assets/web-design-full_344px.jpeg';
import WebDesign687w from '@/assets/web-design-full_687px.jpeg';
import WebDesign1359w from '@/assets/web-design-full_1359px.jpeg';
import WebDesign2479w from '@/assets/web-design-full_2479px.jpeg';

import DigitalMarketing344w from '@/assets/digital-marketing_344px.jpeg';
import DigitalMarketing687w from '@/assets/digital-marketing_687px.jpeg';
import DigitalMarketing1359w from '@/assets/digital-marketing_1359px.jpeg';
import DigitalMarketing2479w from '@/assets/digital-marketing_2479px.jpeg';

import SheratonHotel344w from '@/assets/sheraton-houston-st-san-antonio-tx_344px.jpeg';
import SheratonHotel687w from '@/assets/sheraton-houston-st-san-antonio-tx_687px.jpeg';
import SheratonHotel1359w from '@/assets/sheraton-houston-st-san-antonio-tx_1359px.jpeg';
import SheratonHotel2479w from '@/assets/sheraton-houston-st-san-antonio-tx_2479px.jpeg';

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
				fade
			>
				<Carousel.Item className={styles.carousel_item}>
					<Image
						className={`d-block img-fluid ${styles.web_design}`}
						fetchpriority='high'
						src={WebDesign2479w}
						// srcSet={`${WebDesign239w} 239w, ${WebDesign344w} 344w, ${WebDesign687w} 687w, ${WebDesign1359w} 1359w, ${WebDesign2479w} 2479w `}
						// sizes='(min-width:320) 239px, (min-width: 375px) 344px, (min-width: 768px) 687px, (min-width: 1024px) 1359px, (min-width: 2560px) 2479px'
						alt='First slide'
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
						src={SheratonHotel1359w}
						alt='Third slide'
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
