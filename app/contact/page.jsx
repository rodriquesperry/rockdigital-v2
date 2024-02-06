import React from 'react';


import ContactPageForm from '@/components/contact-forms/contact-page-contact-form.compnent';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div>
      <div className={styles.contact_container}>
        <div className={styles.contact_img_container}>
          <div id={styles['contact_img_container_text']}>CONTACT US</div>
        </div>
        <ContactPageForm />
      </div>
    </div>
  );
};

export default Contact;
