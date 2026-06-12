'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import styles from './premiumWebsiteLaunchChecklist.module.css';

const checklistDownloadUrl =
	'https://nnuvcjkozpiborbkurhp.supabase.co/storage/v1/object/public/downloads/Premium%20Website%20Launch%20Checklist.pdf';

const schema = z.object({
	email: z.string().trim().email('Enter a valid email address.'),
});

export default function ChecklistLeadForm() {
	const pendingDownloadWindow = useRef(null);
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

	const openPendingDownloadWindow = () => {
		const downloadWindow = window.open('about:blank', '_blank');
		if (downloadWindow) {
			downloadWindow.opener = null;
			pendingDownloadWindow.current = downloadWindow;
		}
	};

	const closePendingDownloadWindow = () => {
		pendingDownloadWindow.current?.close();
		pendingDownloadWindow.current = null;
	};

	const onInvalidSubmit = () => {
		closePendingDownloadWindow();
	};

	const onSubmit = async (data) => {
		clearErrors('root');
		setIsSubmitSuccessful(false);

		const downloadWindow = pendingDownloadWindow.current;

		try {
			const response = await fetch('/api/checklist-lead', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...data,
					checklist: 'premium-website-launch-checklist',
				}),
			});
			const payload = await response.json().catch(() => null);

			if (!response.ok || payload?.error) {
				throw new Error(
					payload?.error || 'The checklist request could not be submitted.',
				);
			}

			if (downloadWindow) {
				downloadWindow.location.href = payload?.downloadUrl || checklistDownloadUrl;
				pendingDownloadWindow.current = null;
			} else {
				window.open(payload?.downloadUrl || checklistDownloadUrl, '_blank');
			}

			setIsSubmitSuccessful(true);
		} catch (error) {
			closePendingDownloadWindow();
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
			onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
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
					onClick={openPendingDownloadWindow}
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
					Your checklist is opening in a new window.
				</p>
			) : null}
			<p className={styles.checklistTrustBlurb}>
				No fluff. Just a practical pre-launch review you can use before your
				website goes live.
			</p>
		</form>
	);
}
