'use client';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(
	() => import('@/components/contact-forms/ContactForm.component'),
	{
		loading: () => null,
		ssr: false,
	}
);

export default function HomepageContactForm() {
	return <ContactForm />;
}
