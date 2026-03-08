'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

import CarouselTopPage from '@/components/carousels/top_page/Carousel.component';
import ContactForm from '@/components/contact-forms/ContactForm.component';

import rec from '@/assets/rec.png';
import developmentImage from '@/assets/development.webp';
import discoveryImage from '@/assets/discovery.webp';
import designImage from '@/assets/design.webp';
import ongoingImage from '@/assets/ongoing.webp';
import launchImage from '@/assets/launch.webp';

import styles from './page.module.css';

const processSteps = [
	{
		title: 'Get to Know You',
		description:
			'We start with discovery calls to understand your business goals, audience, offers, and what success should look like for your website.',
		image: discoveryImage,
		imageAlt: 'Team planning a website strategy.',
	},
	{
		title: 'Design and User Experience',
		description:
			'We map the structure and craft a clean visual direction focused on trust, clarity, and conversion-ready user journeys.',
		image: designImage,
		imageAlt: 'Website design mockup on a laptop.',
	},
	{
		title: 'Development',
		description:
			'Once approved, we build responsive pages, optimize performance, and integrate your key tools so everything works reliably.',
		image: developmentImage,
		imageAlt: 'Developer building a modern website.',
	},
	{
		title: 'Launch and Optimization',
		description:
			'We run final QA, connect forms and analytics, and deploy with a checklist to make sure your new site is ready on day one.',
		image: launchImage,
		imageAlt: 'Website launch and optimization workflow.',
	},
	{
		title: 'Ongoing Growth Care and Support',
		description:
			'After launch, we help with updates, performance tuning, and strategic improvements so your site keeps driving results.',
		image: ongoingImage,
		imageAlt: 'Ongoing website maintenance and support.',
	},
];

const premiumEase = [0.16, 1, 0.3, 1];
const viewport = { once: true, amount: 0.3 };

const fadeUp = {
	hidden: { opacity: 0, y: 22 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.9, ease: premiumEase },
	},
};

const cardReveal = {
	hidden: { opacity: 0, y: 18, scale: 0.985 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.8, ease: premiumEase },
	},
};

const staggerParent = {
	hidden: {},
	show: {
		transition: {
			delayChildren: 0.12,
			staggerChildren: 0.18,
		},
	},
};

const Home = () => {
	return (
		<>
			<div className={styles.home_container}>
				<CarouselTopPage />

				<div className={`${styles.main_container} w-100`}>
					<motion.div
						className={`${styles.full_service_container} w-100`}
						variants={fadeUp}
						initial='hidden'
						whileInView='show'
						viewport={viewport}
					>
						<h2>
							A FULL SERVICE DIGITAL <span>&nbsp;AGENCY&nbsp; </span>
						</h2>
						<hr />
						<p>
							When you partner with Rock Digital for your online presence needs,
							you can breathe easy knowing that your business is under the care
							of skillful web design and marketing experts so you can be
							confident that you&apos;ll always get the perfect website that
							fits your style and budget. Let&apos;s create you a jaw-dropping
							designed, mobile ready, and easy to use website that your
							customers will love and converts like crazy. Click the area below
							you are interested in.
						</p>
					</motion.div>

					<motion.div
						className={styles.divs}
						variants={staggerParent}
						initial='hidden'
						whileInView='show'
						viewport={viewport}
					>
						<motion.div
							className={styles.div1}
							variants={cardReveal}
							whileHover={{ y: -3, scale: 1.004, transition: { duration: 0.35, ease: premiumEase } }}
						>
							<Link href='/website-design-and-development'>
								<div className={styles.div_content}>
									<h1>Custom Website Design</h1>
									{/* <h3 id={styles['development']}>& DEVELOPMENT</h3> */}
								</div>
							</Link>
						</motion.div>

						<motion.div
							className={styles.div2}
							variants={cardReveal}
							whileHover={{ y: -3, scale: 1.004, transition: { duration: 0.35, ease: premiumEase } }}
						>
							<Link href='/website-maintenance'>
								<div className={styles.div_content}>
									<h3>Website Optimization</h3>
								</div>
							</Link>
						</motion.div>

						<motion.div
							className={styles.div3}
							variants={cardReveal}
							whileHover={{ y: -3, scale: 1.004, transition: { duration: 0.35, ease: premiumEase } }}
						>
							<Link href='/website-improvement'>
								<div className={styles.div_content}>
									<h3>Digital Growth Strategy</h3>
								</div>
							</Link>
						</motion.div>
					</motion.div>
					<motion.div
						className={styles.build_relationships_container}
						variants={fadeUp}
						initial='hidden'
						whileInView='show'
						viewport={viewport}
					>
						<h2>
							WE CREATE DIGITAL SOLUTIONS <br /> THAT BUILD RELATIONSHIPS
						</h2>
						<hr />
						<p>
							We exist to help your business succeed online. Our web specialists
							can help you design and develop a custom website or app, plan your
							digital marketing strategy to drive traffic and provide you with
							killer content. Let&apos;s reshape the way your customers interact
							with your business online.
						</p>
					</motion.div>

					<motion.div
						className={styles.skills}
						variants={staggerParent}
						initial='hidden'
						whileInView='show'
						viewport={viewport}
					>
						<motion.div
							className={styles.skill_set}
							variants={cardReveal}
							whileHover={{ y: -2, scale: 1.003, transition: { duration: 0.35, ease: premiumEase } }}
						>
							<Image src={rec} alt='Skills bullet image' />
							<h4>Custom Design</h4>
							<p>
								Get found in search engines and loved by customers with custom
								website design and development. A great looking, mobile-ready,
								and user friendly website unique to your brand and optimized for
								your users and search engines.
							</p>
						</motion.div>
						<motion.div
							className={styles.skill_set}
							variants={cardReveal}
							whileHover={{ y: -2, scale: 1.003, transition: { duration: 0.35, ease: premiumEase } }}
						>
							<Image src={rec} alt='Skills bullet image' />
							<h4>Responsive Layout</h4>
							<p>
								From desktop to mobile, have your customers interact with your
								business on their own terms. Our websites are mobile ready so
								your customers can browse on the go. They adjust to different
								screen sizes while still looking amazing.
							</p>
						</motion.div>
						<motion.div
							className={styles.skill_set}
							variants={cardReveal}
							whileHover={{ y: -2, scale: 1.003, transition: { duration: 0.35, ease: premiumEase } }}
						>
							<Image src={rec} alt='Skills bullet image' />
							<h4>Search Engine Optimized</h4>
							<p>
								Your website doing what it&apos;s designed to do. Our websites
								are built with SEO in mind and will get you greater visibility
								in search engine results pages. This means more visitors to your
								site and more purchases from your business.
							</p>
						</motion.div>
					</motion.div>
					<div className={styles.parallax1}>
						<motion.div
							id={styles['parallax_1_text']}
							initial={{ opacity: 0, y: 14, scale: 0.985 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={viewport}
							transition={{ duration: 0.95, ease: premiumEase }}
						>
							<div className={styles.parallax_1_heading}>
								<h3 className='playfair'>
									Ready to turn your website into a growth engine?
								</h3>
								<div className={styles.parallax_btn_container}>
									<Link
										href='/contact'
										className={`${styles.parallax_btn} lato`}
									>
										Start Your Project
									</Link>
								</div>
							</div>
						</motion.div>
					</div>

					{/* <div className={styles.reviews_container}>
            <h2 className={styles.reviewer}>REVIEWS</h2>
            <hr />
            <div className={styles.reviews}>
              <CarouselReview />
            </div>
          </div> */}

					{/* <div className={`${styles.parallax2} d-none d-lg-block d-xl-block`}></div> */}

					<motion.section
						className={styles.process_container}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
						variants={staggerParent}
					>
						<motion.h2 variants={fadeUp}>OUR PROCESS</motion.h2>
						<motion.hr variants={fadeUp} />
						<motion.p variants={fadeUp}>
							A clear, collaborative path from your first conversation to
							long-term support.
						</motion.p>
						<div className={styles.process_timeline}>
							{processSteps.map((step, index) => (
								<motion.article
									key={step.title}
									className={styles.process_step}
									initial={{ opacity: 0, y: 22, x: index % 2 === 0 ? -28 : 28 }}
									whileInView={{ opacity: 1, y: 0, x: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{
										duration: 1.02,
										delay: index * 0.1,
										ease: premiumEase,
									}}
								>
									<motion.div
										className={styles.process_content}
										whileHover={{ y: -2, scale: 1.004 }}
										transition={{ duration: 0.35, ease: premiumEase }}
									>
										<span className={styles.process_number}>
											{String(index + 1).padStart(2, '0')}
										</span>
										<h3>{step.title}</h3>
										<p>{step.description}</p>
									</motion.div>
									<motion.div
										className={styles.process_image_wrap}
										whileHover={{ y: -2, scale: 1.004 }}
										transition={{ duration: 0.35, ease: premiumEase }}
									>
										<Image src={step.image} alt={step.imageAlt} />
									</motion.div>
								</motion.article>
							))}
						</div>
					</motion.section>
					<motion.div
						className={styles.ready_container}
						variants={fadeUp}
						initial='hidden'
						whileInView='show'
						viewport={viewport}
					>
						<div className={styles.ready_header}>
							<h2>WE&apos;RE HERE TO HELP YOUR BUSINESS SUCCEED:</h2>
							<hr />
							<p>
								Ready to step your business&apos; web game up? <br /> It would
								be our pleasure to create a custom website design experience
								that represents your brand, communicates your brand message and
								<strong> converts more leads</strong> which increases your
								overall revenue. Fill out the form to get started.
							</p>
						</div>
						<ContactForm />
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Home;
