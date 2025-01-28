import React from 'react';
import ContactForm from '@/components/contact-forms/ContactForm.component';
import styles from './designAndDevelopment.module.css';

const DesignAndDevelopment = () => {
	return (
		<>
			<div className={styles.design_and_dev_container}>
				<div className={styles.design_and_development_img_container}>
					<h1 id={styles['design_text']}>WEBSITE DESIGN & DEVELOPMENT</h1>
				</div>
				<div className={styles.design_and_development_container}>
					<div className={styles.design_and_development_text}>
						<p>
							Did you know that the first interaction most customers have with a
							business is with their website? Couple that with the fact that a
							whopping 94% of first impressions of a website are based on its
							design and you can see why it’s important that you get it right
							when it comes to web design.
						</p>
						<p>
							We’ll ensure you have a great looking website that reflects your
							brand identity and keeps customers actively engaged from the
							start. Which means higher customer satisfaction and higher
							conversions. Save yourself precious time and keep yourself from
							unwanted headaches from trying to keep up with what your customers
							want.{' '}
						</p>
						<p>
							Our process is painless and produce the results you desire. It all
							starts with a conversation and ends with a custom made solution
							that fosters client and customer satisfaction. Fill in the
							required information below and then check your email for follow-up
							instructions. We look forward to working with you.
						</p>
					</div>
					<div className={styles.contact_form}>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	);
};

export default DesignAndDevelopment;
