'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import config from '@/config';
import { v4 as uuidv4 } from 'uuid';

import styles from './contactForm.module.css';

const defaultServiceOptions = [
	'Web Development',
	'App Development',
	'Marketing',
	'Other',
];

const createSchema = (serviceOptions) =>
	z.object({
		lead_uuid: z.string().uuid('Invalid UUID.'),
		active: z.boolean(),
		name: z
			.string()
			.min(1, 'First name is required.')
			.regex(
				/^[A-Za-z]+$/,
				'First name must contain only alphabetic characters.',
			),
		email: z.string().email('Invalid email address.'),
		phone_num: z
			.string()
			.min(10, 'Phone number must be at least 10 digits.')
			.regex(/^\d+$/, 'Phone number must contain only numeric characters.'),
		service: z.string().refine((value) => serviceOptions.includes(value), {
			message: 'Service must be selected from the provided options.',
		}),
		description: z
			.string()
			.min(10, 'Description must be at least 10 characters long.')
			.max(500, 'Description cannot exceed 500 characters.'),
	});

const ContactForm = ({
	serviceOptions = defaultServiceOptions,
	servicePlaceholder = 'Choose Your Service Need',
	submitLabel = 'Get Started',
}) => {
	const baseURL = config.api || 'http://127.0.0.1:1337';
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
	const leadIdRef = useRef(uuidv4());
	const schema = useMemo(() => createSchema(serviceOptions), [serviceOptions]);

	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		reset,
		setValue,
		setFocus,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			active: true,
			lead_uuid: leadIdRef.current,
			name: '',
			email: '',
			phone_num: '',
			service: '',
			description: '',
		},
		resolver: zodResolver(schema),
	});

	useEffect(() => {
		setValue('lead_uuid', leadIdRef.current);
	}, [setValue]);

	useEffect(() => {
		if (errors.root) {
			setFocus('email');
		}
	}, [errors.root, setFocus]);

	const postLead = async (data) => {
		try {
			const response = await axios.post(`${baseURL}/api/leads`, { data });

			if (response?.data?.error) {
				if (response.data.error.message === 'Email already in use.') {
					setError('email', { message: 'Email is already registered.' });
				} else {
					setError('root', { message: response.data.error.message });
				}
				throw new Error(response.data.error.message || 'Unknown error');
			}
			return response; // Return the successful response
		} catch (error) {
			const errorMessage =
				error.response?.data?.error?.message || 'An unknown error occurred';
			const errorDetails =
				error.response?.data?.error?.details?.errors?.[0]?.path?.[0] || '';
			setError('root', { message: `${errorMessage}: ${errorDetails}` });
			throw error; // Re-throw the error to handle it in `onSubmit`
		}
	};

	const sendLeadEmail = async (data) => {
		try {
			const response = await axios.post('/api/send-email', data);
		} catch (error) {
			return null;
		}
	};

	const onSubmit = async (data) => {
		try {
			clearErrors('root');
			const response = await postLead(data); // Await API call

			if (response?.status === 201) {
				await sendLeadEmail(data);
				const nextLeadId = uuidv4();
				leadIdRef.current = nextLeadId;
				setIsSubmitSuccessful(true);
				reset({
					active: true,
					lead_uuid: nextLeadId,
					name: '',
					email: '',
					phone_num: '',
					service: '',
					description: '',
				}); // Reset the form with default values
				setTimeout(() => setIsSubmitSuccessful(false), 2000); // Hide the success message
			}
		} catch (error) {
			setIsSubmitSuccessful(false); // Ensure success message isn't shown
		}
	};

	const onInvalid = () => {
		setIsSubmitSuccessful(false);
	};

	return (
		<div className={styles.form_container}>
			<form id={styles['form']} onSubmit={handleSubmit(onSubmit, onInvalid)}>
				<input type='hidden' {...register('active')} />
				<input type='hidden' {...register('lead_uuid')} />
				<label htmlFor='name'>First Name</label>
				<input
					id='name'
					{...register('name')}
					className={styles.form_field}
					type='text'
					name='name'
					placeholder='Enter Your First Name'
				/>
				{errors.name && (
					<div className={styles.error}>{errors.name.message}</div>
				)}
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					{...register('email')}
					className={styles.form_field}
					type='email'
					name='email'
					placeholder='example@mail.com'
				/>
				{errors.email && (
					<div className={styles.error}>{errors.email.message}</div>
				)}
				{errors.root && (
					<div className={styles.error}>{errors.root.message}</div>
				)}
				{/* <label htmlFor='password'>Password</label>
				<input
					id='password'
					{...register('password')}
					className={styles.form_field}
					type='password'
					name='password'
					placeholder='Min 8 characters / Must contain 1 uppercase, 1 lowercase, 1 number and 1 special character.'
				/>
				{errors.password && (
					<div className={styles.error}>{errors.password.message}</div>
				)} */}
				<label htmlFor='phone_num'>Phone Number</label>
				<input
					id='phone_num'
					{...register('phone_num')}
					className={styles.form_field}
					type='text'
					name='phone_num'
					placeholder='Enter Your Phone Number'
				/>
				{errors.phone_num && (
					<div className={styles.error}>{errors.phone_num.message}</div>
				)}
				<label htmlFor='service'>Service</label>
				<select
					id='service'
					{...register('service')}
					className={styles.form_field}
					defaultValue=''
				>
					<option value='' disabled>
						{servicePlaceholder}
					</option>
					{serviceOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{errors.service && (
					<div className={styles.error}>{errors.service.message}</div>
				)}
				<label htmlFor='description'>Description</label>
				<textarea
					id='description'
					{...register('description')}
					className={styles.form_field}
					type='text'
					name='description'
					placeholder='Tell us what you want us to do.'
				/>
				{errors.description && (
					<div className={styles.error}>{errors.description.message}</div>
				)}
				{isSubmitSuccessful && (
					<div
						className={`${styles.alert_div} sticky-top alert alert-success`}
						role='alert'
					>
						Success! Check your email for Login information.
					</div>
				)}
				<div className={styles.contact_form_button_container}>
					<button
						disabled={isSubmitting}
						type='submit'
						className='btn btn-warning'
					>
						{isSubmitting ? 'Loading...' : submitLabel}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
