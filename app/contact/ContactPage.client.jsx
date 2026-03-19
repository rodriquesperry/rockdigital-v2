'use client';

import { useState } from 'react';
import Image from 'next/image';

import ContactForm from '@/components/contact-forms/ContactForm.component';

import styles from './contact.module.css';



export default function ContactPageClient() {


	return (
		<div>
			<div className={styles.contact_container}>
      <ContactForm />
				
			</div>
		</div>
	);
}
