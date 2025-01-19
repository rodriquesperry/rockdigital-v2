'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import styles from './contactPage.module.css';

const ContactPageForm = () => {
	const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:1337';
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		reset,
		setValue,
    setFocus,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			active: true,
			uuid: uuidv4(),
			name: '',
			email: '',
			phone_num: '',
			service: '',
			description: '',
		},
		resolver: zodResolver(schema),
	});

	useEffect(() => {
		if (errors.root) {
			setFocus('email');
		}
	}, [errors.root]);

	const postLead = async (data) => {
		try {
			const response = await axios.post(`${baseURL}/api/leads`, { data });
			if (response?.data?.error) {
				console.error('API Error:', response.data.error);
				throw new Error(response.data.error.message || 'Unknown error');
			}
			return response; // Return the successful response
		} catch (error) {
			console.error(
				'Error posting lead:',
				error.response?.data || error.message
			);
			const errorMessage =
				error.response?.data?.error?.message || 'An unknown error occurred';
			const errorDetails =
				error.response?.data?.error?.details?.errors?.[0]?.path?.[0] || '';

			setError('root', { message: `${errorMessage}: ${errorDetails}` });
			throw error; // Re-throw the error to handle it in `onSubmit`
		}
	};

	const onSubmit = async (data) => {
		try {
			const response = await postLead(data); // Await API call

			if (response?.status === 201) {
				// Check if the response is successful
				setIsSubmitSuccessful(true);
				reset({
					active: true,
					uuid: uuidv4(),
					name: '',
					email: '',
					phone_num: '',
					service: '',
					description: '',
				}); // Reset the form with default values
				setTimeout(() => setIsSubmitSuccessful(false), 2000); // Hide the success message
			}
		} catch (error) {
			console.error('Form submission failed:', error);
			setIsSubmitSuccessful(false); // Ensure success message isn't shown
		}
	};

	return (
		<div className={styles.form_container}>
			<form id={styles['form']} onSubmit={handleSubmit(onSubmit)}>
				<input type='hidden' {...register('active')} />
				<input type='hidden' {...register('uuid')} />

				<label htmlFor='name'>Name</label>
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
					<div className={styles.error}>Email already in use.</div>
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
						Choose Your Service Need
					</option>
					<option value='Web Development'>Web Development</option>
					<option value='App Development'>App Development</option>
					<option value='Marketing'>Marketing</option>
					<option value='Other'>Other</option>
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
						{isSubmitting ? 'Loading...' : 'Submit'}
					</button>
				</div>
			</form>
		</div>
	);
};

const schema = z.object({
	uuid: z.string().uuid('Invalid UUID.'), // Added UUID validation
	active: z.boolean(), // Added active field
	name: z
		.string()
		.min(1, 'First name is required.')
		.regex(
			/^[A-Za-z]+$/,
			'First name must contain only alphabetic characters.'
		),
	email: z.string().email('Invalid email address.'),
	// password: z
	// 	.string()
	// 	.min(8, 'Password must be at least 8 characters long.')
	// 	.regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
	// 	.regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
	// 	.regex(/\d/, 'Password must contain at least one number.')
	// 	.regex(/[\W_]/, 'Password must contain at least one special character.'),
	phone_num: z
		.string()
		.min(10, 'Phone number must be at least 10 digits.')
		.regex(/^\d+$/, 'Phone number must contain only numeric characters.'),
	service: z.enum(
		['Web Development', 'App Development', 'Marketing', 'Other'],
		{
			errorMap: () => ({
				message: 'Service must be selected from the provided options.',
			}),
		}
	),
	description: z
		.string()
		.min(10, 'Description must be at least 10 characters long.')
		.max(500, 'Description cannot exceed 500 characters.'),
});

export default ContactPageForm;
