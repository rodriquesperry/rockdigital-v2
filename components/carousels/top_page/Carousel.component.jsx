'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import WebDesign1359w from '@/assets/web-design-full_1359px.webp';
import DigitalMarketing1359w from '@/assets/digital-marketing_1359px.webp';
import SheratonHotel1359w from '@/assets/sheraton-houston-st-san-antonio-tx_1359px.webp';

import styles from './carousel.module.css';

const slides = [
	{
		image: WebDesign1359w,
		alt: 'Modern website mockup on desktop and mobile devices.',
		heading: 'Custom Websites That Turn Visitors Into Customers',
		description:
			'Strategically designed websites that showcase your brand and convert visitors into customers.',
		link: '/website-design-and-development',
		cta: 'Start Your Website Project',
	},
	{
		image: DigitalMarketing1359w,
		alt: 'Digital marketing workspace with analytics and campaign planning.',
		heading: 'Strategic Web Design Built for Growth',
		description:
			'Outperform competitors with strategy-driven design and proven digital processes.',
		link: '/website-improvement',
		cta: 'Start Growing Online',
	},
	{
		image: SheratonHotel1359w,
		alt: 'Hospitality website example highlighting a premium destination.',
		heading: 'Is Your Website Holding Your Business Back?',
		description:
			'We design high-performing websites that attract customers and turn visitors into revenue.',
		link: '/website-audit',
		cta: 'Get a Website Audit',
		eyebrow: 'Professional analysis delivered within 48 hours',
	},
];

const CarouselTopPage = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setActiveSlide((current) => (current + 1) % slides.length);
		}, 7300);

		return () => window.clearInterval(intervalId);
	}, []);

	return (
		<section className={styles.hero} aria-label='Featured Rock Digital services'>
			<div className={styles.carousel}>
				{slides.map((slide, index) => {
					const HeadingTag = index === 0 ? 'h1' : 'h2';

					return (
						<article
							key={slide.heading}
							className={`${styles.carousel_item} ${
								index === activeSlide ? styles.carousel_item_active : ''
							}`}
							aria-hidden={index !== activeSlide}
						>
							<Image
								className={styles.hero_image}
								src={slide.image}
								alt={slide.alt}
								fill
								priority={index === 0}
								fetchPriority={index === 0 ? 'high' : 'low'}
								loading={index === 0 ? 'eager' : 'lazy'}
								sizes='100vw'
							/>
							<div className={styles.carousel_caption}>
								<div className={styles.carousel_caption_block}>
									<div className={styles.carousel_heading}>
										<HeadingTag className='playfair'>{slide.heading}</HeadingTag>
									</div>
									<p className={styles.carousel_paragraph}>{slide.description}</p>
									<Link href={slide.link} className={`${styles.btn} lato`}>
										<span>{slide.cta}</span>
									</Link>
									{slide.eyebrow && (
										<span className={styles.carousel_span}>{slide.eyebrow}</span>
									)}
								</div>
							</div>
						</article>
					);
				})}
			</div>
			<div className={styles.carousel_controls} aria-label='Hero slide controls'>
				{slides.map((slide, index) => (
					<button
						key={slide.heading}
						type='button'
						className={`${styles.carousel_dot} ${
							index === activeSlide ? styles.carousel_dot_active : ''
						}`}
						onClick={() => setActiveSlide(index)}
						aria-label={`Show slide ${index + 1}: ${slide.heading}`}
						aria-pressed={index === activeSlide}
					/>
				))}
			</div>
		</section>
	);
};

export default CarouselTopPage;
