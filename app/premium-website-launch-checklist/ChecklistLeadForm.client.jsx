'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import styles from './premiumWebsiteLaunchChecklist.module.css';

const checklistKey = 'premium-website-launch-checklist';

const schema = z.object({
	email: z.string().trim().email('Enter a valid email address.'),
});

export default function ChecklistLeadForm() {
	const router = useRouter();
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			email: '',
		},
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data) => {
		clearErrors('root');
		setIsSubmitSuccessful(false);

		try {
			const response = await fetch('/api/checklist-lead', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...data,
					checklistKey,
				}),
			});
			const payload = await response.json().catch(() => null);

			if (!response.ok || payload?.error) {
				throw new Error(
					payload?.error || 'The checklist request could not be submitted.',
				);
			}

			setIsSubmitSuccessful(true);
			router.push(`/thank-you/${payload?.checklistKey || checklistKey}`);
		} catch (error) {
			setIsSubmitSuccessful(false);
			setError('root', {
				message:
					error?.message ||
					'Something went wrong. Please try again in a moment.',
			});
		}
	};

	return (
		<form
			className={styles.checklistLeadForm}
			onSubmit={handleSubmit(onSubmit)}
		>
			<label htmlFor='premium-checklist-email'>Email address</label>
			<div className={styles.checklistInputRow}>
				<input
					id='premium-checklist-email'
					type='email'
					autoComplete='email'
					placeholder='you@example.com'
					aria-invalid={errors.email ? 'true' : 'false'}
					{...register('email')}
				/>
				<button
					type='submit'
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Opening...' : 'Download the Checklist'}
				</button>
			</div>
			{errors.email ? (
				<p className={styles.formError}>{errors.email.message}</p>
			) : null}
			{errors.root ? (
				<p className={styles.formError}>{errors.root.message}</p>
			) : null}
			{isSubmitSuccessful ? (
				<p className={styles.formSuccess}>
					Your checklist is ready. Taking you to the download page.
				</p>
			) : null}
			<p className={styles.checklistTrustBlurb}>
				No fluff. Just a practical pre-launch review you can use before your
				website goes live.
			</p>
		</form>
	);
}
