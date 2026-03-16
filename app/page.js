import Image from 'next/image';
import Link from 'next/link';

import CarouselTopPage from '@/components/carousels/top_page/Carousel.component';
import ContactForm from '@/components/contact-forms/ContactForm.component';
import HomePageAnimations from './HomePageAnimations.client';

import rec from '@/assets/rec.png';
import developmentImage from '@/assets/development.webp';
import discoveryImage from '@/assets/discovery.webp';
import designImage from '@/assets/design.webp';
import ongoingImage from '@/assets/ongoing.webp';
import launchImage from '@/assets/launch.webp';

import styles from './page.module.css';

export const metadata = {
	metadataBase: new URL('https://rockdigital.agency'),
	title: 'Web Design, SEO, and Digital Marketing Agency',
	description:
		'Rock Digital helps businesses grow online with custom web design, SEO, website optimization, and digital marketing services built to increase traffic and conversions.',
	openGraph: {
		title: 'Web Design, SEO, and Digital Marketing Agency | Rock Digital',
		description:
			'Rock Digital helps businesses grow online with custom web design, SEO, website optimization, and digital marketing services built to increase traffic and conversions.',
		url: 'https://rockdigital.agency',
		siteName: 'Rock Digital',
		type: 'website',
		images: [
			{
				url: '/opengraph-image',
				width: 1200,
				height: 630,
				alt: 'Rock Digital homepage preview with logo and marketing blurb',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Web Design, SEO, and Digital Marketing Agency | Rock Digital',
		description:
			'Custom websites, SEO, optimization, and marketing strategy that help businesses grow online.',
		images: ['/opengraph-image'],
	},
};

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

const Home = () => {
	return (
		<div className={styles.home_container}>
			<HomePageAnimations />
			<CarouselTopPage />

			<div className={`${styles.main_container} w-100`}>
				<div
					className={`${styles.full_service_container} w-100`}
					data-animate='fade-up'
				>
					<h2>
						A FULL SERVICE DIGITAL <span>&nbsp;AGENCY&nbsp; </span>
					</h2>
					<hr />
					<p>
						When you partner with Rock Digital for your online presence needs,
						you can breathe easy knowing that your business is under the care
						of skillful web design and development experts so you can be
						confident that you&apos;ll always get the perfect website that fits
						your style and budget. Let&apos;s create you a jaw-dropping
						designed, mobile ready, and easy to use website that your customers
						will love and converts like crazy. Click the area below you are
						interested in.
					</p>
				</div>

				<div className={styles.divs}>
					<div className={`${styles.div1} homepage-card-hover`} data-animate='card-reveal'>
						<Link href='/website-design-and-development'>
							<div className={styles.div_content}>
								<h3>Custom Website Design</h3>
							</div>
						</Link>
					</div>

					<div className={`${styles.div2} homepage-card-hover`} data-animate='card-reveal'>
						<Link href='/website-maintenance'>
							<div className={styles.div_content}>
								<h3>Website Optimization</h3>
							</div>
						</Link>
					</div>

					<div className={`${styles.div3} homepage-card-hover`} data-animate='card-reveal'>
						<Link href='/website-improvement'>
							<div className={styles.div_content}>
								<h3>Digital Growth Strategy</h3>
							</div>
						</Link>
					</div>
				</div>
				<div
					className={styles.build_relationships_container}
					data-animate='fade-up'
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
				</div>

				<div className={styles.skills}>
					<div
						className={`${styles.skill_set} homepage-skill-hover`}
						data-animate='skills-stagger-item'
					>
						<Image src={rec} alt='Skills bullet image' sizes='96px' />
						<h3>Custom Design</h3>
						<p>
							Get found in search engines and loved by customers with custom
							website design and development. A great looking, mobile-ready,
							and user friendly website unique to your brand and optimized for
							your users and search engines.
						</p>
					</div>
					<div
						className={`${styles.skill_set} homepage-skill-hover`}
						data-animate='skills-stagger-item'
					>
						<Image src={rec} alt='Skills bullet image' sizes='96px' />
						<h3>Responsive Layout</h3>
						<p>
							From desktop to mobile, have your customers interact with your
							business on their own terms. Our websites are mobile ready so
							your customers can browse on the go. They adjust to different
							screen sizes while still looking amazing.
						</p>
					</div>
					<div
						className={`${styles.skill_set} homepage-skill-hover`}
						data-animate='skills-stagger-item'
					>
						<Image src={rec} alt='Skills bullet image' sizes='96px' />
						<h3>Search Engine Optimized</h3>
						<p>
							Your website doing what it&apos;s designed to do. Our websites are
							built with SEO in mind and will get you greater visibility in
							search engine results pages. This means more visitors and more purchases.
						</p>
					</div>
				</div>
				<div className={styles.parallax1}>
					<div id={styles['parallax_1_text']} data-animate='fade-up'>
						<div className={styles.parallax_1_heading}>
							<h3 className='playfair'>
								Ready to turn your website into a growth engine?
							</h3>
							<div className={styles.parallax_btn_container}>
								<Link href='/contact' className={`${styles.parallax_btn} lato`}>
									Start Your Project
								</Link>
							</div>
						</div>
					</div>
				</div>

					{/* <div className={styles.reviews_container}>
            <h2 className={styles.reviewer}>REVIEWS</h2>
            <hr />
            <div className={styles.reviews}>
              <CarouselReview />
            </div>
          </div> */}

					{/* <div className={`${styles.parallax2} d-none d-lg-block d-xl-block`}></div> */}

				<section
					className={styles.process_container}
					data-animate='process-section'
				>
						<h2 data-animate='process-heading'>OUR PROCESS</h2>
						<hr data-animate='process-heading' />
						<p data-animate='process-heading'>
							A clear, collaborative path from your first conversation to
							long-term support.
						</p>
						<div className={styles.process_timeline}>
							{processSteps.map((step, index) => (
								<article
									key={step.title}
									className={styles.process_step}
									data-animate='process-step'
								>
									<div
										className={`${styles.process_content} homepage-process-content-hover`}
									>
										<span className={styles.process_number}>
											{String(index + 1).padStart(2, '0')}
										</span>
										<h3>{step.title}</h3>
										<p>{step.description}</p>
									</div>
									<div
										className={`${styles.process_image_wrap} homepage-process-image-hover`}
									>
										<Image
											src={step.image}
											alt={step.imageAlt}
											sizes='(max-width: 1023px) 100vw, 40vw'
										/>
									</div>
								</article>
							))}
						</div>
				</section>
				<div
					className={styles.ready_container}
					data-animate='fade-up'
				>
					<div className={styles.ready_header}>
						<h2>WE&apos;RE HERE TO HELP YOUR BUSINESS SUCCEED:</h2>
						<hr />
						<p>
							Ready to step your business&apos; web game up? <br /> It would be
							our pleasure to create a custom website design experience that
							represents your brand, communicates your brand message and
							<strong> converts more leads</strong> which increases your
							overall revenue. Fill out the form to get started.
						</p>
					</div>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Home;
