'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import styles from './auditForm.module.css';

const schema = z.object({
	uuid: z.string().uuid('Invalid UUID.'),
	name: z.string().trim().min(1, 'Name is required.'),
	business_name: z.string().trim().min(1, 'Business name is required.'),
	website_url: z
		.string()
		.trim()
		.min(1, 'Website URL is required.')
		.url('Enter a valid website URL.'),
	unique_visitors: z
		.string()
		.trim()
		.min(1, 'Unique visitors is required.'),
	conversion_rate: z
		.string()
		.trim()
		.min(1, 'Conversion rate is required.'),
	email: z.string().trim().email('Invalid email address.'),
});

const AuditForm = () => {
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
	const auditIdRef = useRef(uuidv4());

	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		reset,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			uuid: auditIdRef.current,
			name: '',
			business_name: '',
			website_url: '',
			unique_visitors: '',
			conversion_rate: '',
			email: '',
		},
		resolver: zodResolver(schema),
	});

	useEffect(() => {
		setValue('uuid', auditIdRef.current);
	}, [setValue]);

	const submitAudit = async (data) => {
		try {
			const response = await axios.post('/api/submit-audit', data);
			const responseError = response?.data?.error;

			if (responseError) {
				if (responseError === 'Email already in use.') {
					setError('email', { message: 'Email is already registered.' });
				} else {
					setError('root', { message: responseError });
				}
				throw new Error(responseError || 'Unknown error');
			}

			return response;
		} catch (error) {
			const errorMessage =
				error.response?.data?.error || 'An unknown error occurred';
			setError('root', {
				message: errorMessage,
			});
			throw error;
		}
	};

	const onSubmit = async (data) => {
		try {
			clearErrors('root');
			const response = await submitAudit(data);

			if (response?.status === 201) {
				const nextAuditId = uuidv4();
				auditIdRef.current = nextAuditId;
				setIsSubmitSuccessful(true);
				reset({
					uuid: nextAuditId,
					name: '',
					business_name: '',
					website_url: '',
					unique_visitors: '',
					conversion_rate: '',
					email: '',
				});

				if (response.data?.emailWarning) {
					setError('root', { message: response.data.emailWarning });
				}

				setTimeout(() => setIsSubmitSuccessful(false), 2000);
			}
		} catch (error) {
			setIsSubmitSuccessful(false);
		}
	};

	const onInvalid = () => {
		setIsSubmitSuccessful(false);
	};

	return (
		<div className={styles.form_container}>
			<p className={styles.form_note}>
				If you do not know your unique visitors or conversion rate, enter
				&quot;Unknown&quot;.
			</p>
			<form
				id={styles.audit_form}
				onSubmit={handleSubmit(onSubmit, onInvalid)}
			>
				<input type='hidden' {...register('uuid')} />

				<label htmlFor='name'>
					Name <span className={styles.required}>*</span>
				</label>
				<input
					id='name'
					{...register('name')}
					type='text'
					placeholder='Enter your name'
				/>
				{errors.name && <div className={styles.error}>{errors.name.message}</div>}

				<label htmlFor='business_name'>
					Business Name <span className={styles.required}>*</span>
				</label>
				<input
					id='business_name'
					{...register('business_name')}
					type='text'
					placeholder='Enter your business name'
				/>
				{errors.business_name && (
					<div className={styles.error}>{errors.business_name.message}</div>
				)}

				<label htmlFor='website_url'>
					Website URL <span className={styles.required}>*</span>
				</label>
				<input
					id='website_url'
					{...register('website_url')}
					type='url'
					placeholder='https://yourwebsite.com'
				/>
				{errors.website_url && (
					<div className={styles.error}>{errors.website_url.message}</div>
				)}

				<label htmlFor='unique_visitors'>
					# of Unique Visitors / Month{' '}
					<span className={styles.required}>*</span>
				</label>
				<input
					id='unique_visitors'
					{...register('unique_visitors')}
					type='text'
					placeholder='e.g. 1200 or Unknown'
				/>
				{errors.unique_visitors && (
					<div className={styles.error}>{errors.unique_visitors.message}</div>
				)}

				<label htmlFor='conversion_rate'>
					Conversion Rate <span className={styles.required}>*</span>
				</label>
				<input
					id='conversion_rate'
					{...register('conversion_rate')}
					type='text'
					placeholder='e.g. 2.5% or Unknown'
				/>
				{errors.conversion_rate && (
					<div className={styles.error}>{errors.conversion_rate.message}</div>
				)}

				<label htmlFor='email'>
					Email Address <span className={styles.required}>*</span>
				</label>
				<input
					id='email'
					{...register('email')}
					type='email'
					placeholder='Enter your email address'
				/>
				{errors.email && (
					<div className={styles.error}>{errors.email.message}</div>
				)}
				{errors.root && <div className={styles.error}>{errors.root.message}</div>}

				<div className={styles.audit_form_button_container}>
					<button disabled={isSubmitting} type='submit' className='btn btn-warning'>
						{isSubmitting ? 'Loading...' : 'Submit Audit Request'}
					</button>
				</div>

				{isSubmitSuccessful && (
					<p className={styles.success_message}>
						Thanks. Your website audit request has been submitted.
					</p>
				)}
			</form>
		</div>
	);
};

export default AuditForm;
