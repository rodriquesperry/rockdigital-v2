import React from 'react';

import ContactPageForm from '@/components/contact-forms/ContactPageForm';

import styles from './websiteImprovement.module.css';

const WebsiteImprovement = () => {
  return (
    <>
      <div className={styles.improvement_container}>
        <div className={styles.website_improvement_img_container}>
          <div id={styles.website_improvement_img_container_text}>
            DIGITAL PRESENCE IMPROVEMENT
          </div>
        </div>
        <div className={styles.website_improvement_container}>
          <div className={styles.website_improvement_text}>
            <p>
              If you are serious about your business then you should know that
              in order to thrive in the business marketplace today, you must
              have a strong and consistent online presence. It's not enough to
              just build your website and hope that people will find it. It
              takes proven strategies to drive traffic to your website and then
              convert that traffic into paying customers.
            </p>
            <p>
              As a full service digital agency, we provide many services and
              strategies for your success. Whether it be local SEO,
              Pay-per-click marketing or content marketing we are here to help
              you reach your business goals. Drop us a line with what you are
              looking for and we'll get right back with you. We look forward to
              working with you.
            </p>
            <p></p>
          </div>
          <div className={styles.contact_form}>
						<ContactPageForm />
					</div>
        </div>
      </div>
    </>
  );
};

export default WebsiteImprovement;
