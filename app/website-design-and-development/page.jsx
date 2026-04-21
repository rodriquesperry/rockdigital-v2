import React from 'react';
import ContactForm from '@/components/contact-forms/ContactForm.component';
import styles from './designAndDevelopment.module.css';

export const metadata = {
	title: 'Website Design and Development Services',
	description:
		'Rock Digital provides custom website design and development services built to reflect your brand, improve user experience, and turn more visitors into customers.',
};

const DesignAndDevelopment = () => {
	return (
		<div className={styles.design_and_dev_container}>
			<div className={styles.design_and_development_img_container}>
				<h1 id={styles['design_text']}>WEBSITE DESIGN & DEVELOPMENT</h1>
			</div>
			<div className={styles.design_and_development_container}>
				<div className={styles.design_and_development_text}>
					<h2>Make The Right First Impression</h2>
					<p>
						Did you know that the first interaction most customers have with
						your business is your website? With 94% of first impressions being
						design-related, your website isn’t just a digital asset—it’s your
						first opportunity to build trust, credibility, and interest.
						<br />
						<br />
						We make sure that opportunity works in your favor.
						<br />
						<br />
						Your website will not only look exceptional, but it will reflect
						your brand, communicate your value clearly, and keep visitors
						engaged from the very first moment. The result? Stronger trust,
						better user experiences, and higher conversions.
					</p>

					<h2>More Than Just a Good-Looking Website</h2>
					<p>
						A visually appealing site is only part of the equation. True
						performance comes from how design and development work together.
					</p>
					<p>We build websites that:</p>
					<ul>
						<li>Guide visitors with clear, intentional structure</li>
						<li>Communicate your message with precision</li>
						<li>Encourage action through strategic placement and flow</li>
						<li>Perform seamlessly across all devices</li>
					</ul>
					<p>
						This means your website doesn’t just exist—it works as a system that
						supports your business goals.{' '}
					</p>

					<h2>Our Approach: Strategy First, Always</h2>
					<p>
						Every project begins with understanding your business, your
						audience, and what success actually looks like for you.{' '}
					</p>

					<p>From there, we move through a refined process:</p>
					<ol>
						<li className={styles.olLi}>
							<span className={styles.processStepTitle}>
								Discovery & Strategy
							</span>
							<span className={styles.sub}>
								We identify your goals, audience behavior, and competitive
								positioning to create a clear direction.
							</span>
						</li>
						<li className={styles.olLi}>
							<span className={styles.processStepTitle}>
								Design & User Experience
							</span>
							<span className={styles.sub}>
								We design clean, modern interfaces that are easy to navigate and
								built to convert.
							</span>
						</li>
						<li className={styles.olLi}>
							<span className={styles.processStepTitle}>
								Development & Performance
							</span>
							<span className={styles.sub}>
								We bring the design to life with fast, secure, and scalable
								development practices.
							</span>
						</li>
						<li className={styles.olLi}>
							<span className={styles.processStepTitle}>
								Launch & Optimization
							</span>
							<span className={styles.sub}>
								We don’t just launch—we ensure everything is optimized for
								performance, usability, and growth.
							</span>
						</li>
					</ol>

					<h2>Built for Performance, Not Just Presence</h2>
					<p>
						Most websites fail because they’re treated like static brochures.
						Ours are built to perform.
					</p>
					<p>Every site we create is:</p>
					<ul>
						<li>Speed optimized for fast load times</li>
						<li>SEO-ready to support search visibility</li>
						<li>Mobile-first to ensure a seamless experience on any device</li>
						<li>Secure and scalable to grow with your business</li>
					</ul>
					<p>
						Because a website that looks good but doesn’t perform is a missed
						opportunity.
					</p>

					<h2>Save Time. Avoid the Guesswork.</h2>
					<p>
						Trying to manage design trends, development standards, and user
						expectations on your own can quickly become overwhelming.
					</p>
					<p>
						We remove that burden so you can focus on what matters—running and
						growing your business—while knowing your website is working exactly
						as it should.
					</p>

					<h2>A Process That Delivers Results</h2>
					<p>
						Our process is straightforward, collaborative, and built around
						outcomes.
					</p>

					<p>
						It starts with a conversation and ends with a custom-built solution
						that supports both your business goals and your customers’ needs.
					</p>

					<h2>Ready to Build Something That Works?</h2>
					<p>
						If you’re ready for a website that does more than just look good—one
						that actively supports your growth—let’s get started.
					</p>

					<p>
						Fill out the form below and check your email for the next steps.
						We’re excited to learn more about your business and help you build
						something that lasts.
					</p>
				</div>
				<div className={styles.contact_form}>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default DesignAndDevelopment;
