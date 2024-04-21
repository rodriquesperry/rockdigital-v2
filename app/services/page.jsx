import Image from 'next/image';

import WebDesignService from '@/assets/web-design-service.webp';
import SeoService from '@/assets/seo-service.webp';
import WebsiteImprovement from '@/assets/website-improvement-maintenance.webp';

import styles from './services.styles.module.css';

const Services = () => {
	return (
		<>
			<div className={`${styles.services_container} conatiner`}>
				<div className={styles.services_img_container}>
					<h1 className={styles.services_header_text}>SERVICES</h1>
				</div>

				<div className={styles.services}>
					<div className={`${styles.services_img}  ${styles.small_screens}`}>
						<Image src={WebDesignService} alt='website Design image' fill />
					</div>
					<div id={styles['first_service']} className={styles.service}>
						<div className={styles.service_text_container}>
							<h2 className={styles.service_text_header}>
								We&apos;ll build what you need...
							</h2>
							<div className={styles.services_text}>
								Effortlessly dominate your competition with our web design and
								development service. You can expect to get ranked in search
								engines and reach customers on any platform with a lightning
								fast, mobile friendly, and search engine optimized website
								design. Your users will enjoy interacting with your
								business&rsquo; website.
							</div>
						</div>
						<div className={`${styles.services_img} ${styles.floating_right_image} ${styles.large_screens}`}>
							<Image src={WebDesignService} alt='website Design image' fill />
						</div>
					</div>
					<div id={styles['second_service']} className={styles.service}>
						<div className={`${styles.services_img} ${styles.second_image}`}>
							<Image src={SeoService} alt='SEO Services image' fill />
						</div>
						<div className={styles.service_text_container}>
							<h2 className={styles.service_text_header}>
								We&apos;ll help you grow...
							</h2>
							<div className={styles.services_text}>
								Know what your customers are searching for and attract the right
								customers to your website. The truth is that generating traffic
								is a never ending task, which is why we offer custom made
								solutions to handle your website traffic. From PPC
								(Pay-Per-Click) to organic traffic, we have the right solutions
								to quickly get you laser targeted traffic while ranking you
								higher in Google.
							</div>
						</div>
					</div>
					<div id={styles['third_service']} className={styles.service}>
						<div className={styles.service_text_container}>
							<h2 className={styles.service_text_header}>
								We&apos;ll care for your investment...
							</h2>
							<div className={styles.services_text}>
								Stay ahead of your competition and make sure your website
								continues to deliver positive returns on your investment. Every
								website requires upkeep and continual improvement to operate
								properly. We take these stresses away form you with custom
								website improvement packages tailored to fit your business
								vision.
							</div>
						</div>
						<div className={`${styles.services_img} ${styles.floating_right_image}`}>
							<Image
								src={WebsiteImprovement}
								alt='Website Improvement image'
								fill
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
