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
	'DIgital Marketing',
	'Other',
];

const monthlyMarketingInvestmentOptions = [
	'Under $1,000',
	'$1,000-$2,500',
	'$2,500-$5,000',
	'$5,000-$10,000',
	'$10,000+',
];

const projectTimelineOptions = [
	'Immediately',
	'Within 30 Days',
	'Within 90 Days',
	'Exploring Options',
	'Just Gathering Information',
];

const businessTypeOptions = [
	'New Business',
	'Established Business',
	'Growing Business',
	'Multi-Location Business',
	'Enterprise Organization',
];

const optionalQualificationFields = {
	company_name: z.string().optional(),
	website_url: z.string().optional(),
	monthly_marketing_investment: z.string().optional(),
	project_timeline: z.string().optional(),
	action_prompt: z.string().optional(),
	business_description: z.string().optional(),
	growth_investment_acknowledgement: z.boolean().optional(),
};

const requiredQualificationFields = {
	company_name: z.string().min(1, 'Company name is required.'),
	website_url: z.string().min(1, 'Website URL is required.'),
	monthly_marketing_investment: z
		.string()
		.refine((value) => monthlyMarketingInvestmentOptions.includes(value), {
			message: 'Monthly marketing investment must be selected.',
		}),
	project_timeline: z
		.string()
		.refine((value) => projectTimelineOptions.includes(value), {
			message: 'Project timeline must be selected.',
		}),
	action_prompt: z
		.string()
		.min(10, 'Please share what prompted you to reach out.'),
	business_description: z
		.string()
		.refine((value) => businessTypeOptions.includes(value), {
			message: 'Business type must be selected.',
		}),
	growth_investment_acknowledgement: z.literal(true, {
		errorMap: () => ({
			message: 'Please confirm this before submitting.',
		}),
	}),
};

const createSchema = (serviceOptions, showQualificationFields) =>
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
		...(showQualificationFields
			? requiredQualificationFields
			: optionalQualificationFields),
	});

const ContactForm = ({
	serviceOptions = defaultServiceOptions,
	servicePlaceholder = 'Choose Your Service Need',
	submitLabel = 'Get Started',
	showQualificationFields = false,
}) => {
	const baseURL = config.api || 'http://127.0.0.1:1337';
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
	const leadIdRef = useRef(uuidv4());
	const schema = useMemo(
		() => createSchema(serviceOptions, showQualificationFields),
		[serviceOptions, showQualificationFields],
	);

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
      supabase_user_id: leadIdRef.current, // Set default value for supabase_user_id
			name: '',
			email: '',
			phone_num: '',
			service: '',
			description: '',
			company_name: '',
			website_url: '',
			monthly_marketing_investment: '',
			project_timeline: '',
			action_prompt: '',
			business_description: '',
			growth_investment_acknowledgement: false,
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
			const leadData = {
				active: data.active,
				lead_uuid: data.lead_uuid,
				name: data.name,
				email: data.email,
				phone_num: data.phone_num,
				service: data.service,
				description: data.description,
			};
			if (showQualificationFields) {
				leadData.company_name = data.company_name;
				leadData.website_url = data.website_url;
				leadData.monthly_marketing_investment =
					data.monthly_marketing_investment;
				leadData.project_timeline = data.project_timeline;
				leadData.business_description = data.business_description;
				leadData.action_prompt = data.action_prompt;
			}
			const response = await postLead(leadData); // Await API call

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
					company_name: '',
					website_url: '',
					monthly_marketing_investment: '',
					project_timeline: '',
					action_prompt: '',
					business_description: '',
					growth_investment_acknowledgement: false,
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
			<form
				id={styles['form']}
				className={showQualificationFields ? styles.qualification_form : ''}
				onSubmit={handleSubmit(onSubmit, onInvalid)}
			>
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
				{showQualificationFields && (
					<>
						<label htmlFor='company_name'>Company Name</label>
						<input
							id='company_name'
							{...register('company_name')}
							className={styles.form_field}
							type='text'
							name='company_name'
							placeholder='Enter Your Company Name'
						/>
						{errors.company_name && (
							<div className={styles.error}>
								{errors.company_name.message}
							</div>
						)}
					</>
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
				{showQualificationFields && (
					<>
						<label htmlFor='website_url'>Website URL</label>
						<input
							id='website_url'
							{...register('website_url')}
							className={styles.form_field}
							type='text'
							name='website_url'
							placeholder='https://example.com'
						/>
						{errors.website_url && (
							<div className={styles.error}>{errors.website_url.message}</div>
						)}
					</>
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
				{showQualificationFields && (
					<>
						<label htmlFor='monthly_marketing_investment'>
							Monthly Marketing Investment
						</label>
						<select
							id='monthly_marketing_investment'
							{...register('monthly_marketing_investment')}
							className={styles.form_field}
							defaultValue=''
						>
							<option value='' disabled>
								Select Monthly Investment
							</option>
							{monthlyMarketingInvestmentOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						{errors.monthly_marketing_investment && (
							<div className={styles.error}>
								{errors.monthly_marketing_investment.message}
							</div>
						)}
					</>
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
				{showQualificationFields && (
					<>
						<div id='contact-form-details' className={styles.form_anchor} />
						<label htmlFor='project_timeline'>Project Timeline</label>
						<select
							id='project_timeline'
							{...register('project_timeline')}
							className={styles.form_field}
							defaultValue=''
						>
							<option value='' disabled>
								Select Project Timeline
							</option>
							{projectTimelineOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						{errors.project_timeline && (
							<div className={styles.error}>
								{errors.project_timeline.message}
							</div>
						)}
						<label htmlFor='action_prompt'>
							What Prompted You To Reach Out?
						</label>
						<textarea
							id='action_prompt'
							{...register('action_prompt')}
							className={styles.form_field}
							name='action_prompt'
							placeholder='Tell us what changed, what is not working, or what opportunity you want to pursue.'
						/>
						{errors.action_prompt && (
							<div className={styles.error}>
								{errors.action_prompt.message}
							</div>
						)}
						<label htmlFor='business_description'>
							What Best Describes Your Business?
						</label>
						<select
							id='business_description'
							{...register('business_description')}
							className={styles.form_field}
							defaultValue=''
						>
							<option value='' disabled>
								Select Business Type
							</option>
							{businessTypeOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						{errors.business_description && (
							<div className={styles.error}>
								{errors.business_description.message}
							</div>
						)}
						<label
							htmlFor='growth_investment_acknowledgement'
							className={styles.checkbox_label}
						>
							<input
								id='growth_investment_acknowledgement'
								{...register('growth_investment_acknowledgement')}
								className={styles.checkbox_input}
								type='checkbox'
								name='growth_investment_acknowledgement'
							/>
							<span>
								I understand Rock Digital provides strategic web design and
								digital marketing services for businesses serious about growth
								and investment in their online presence.
							</span>
						</label>
						{errors.growth_investment_acknowledgement && (
							<div className={styles.error}>
								{errors.growth_investment_acknowledgement.message}
							</div>
						)}
					</>
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
