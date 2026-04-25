import chateauDijonTablet from '@/assets/CD-Tablet.png';
import chateauDijonShowcase from '@/assets/CD-laptop-tablet-phone.png';
import chateauDijonLegacySite from '@/assets/CD-Laptop-Old-Site.png';

export const caseStudies = [
	{
		slug: 'chateau-dijon-townhomes-web-design',
		client: 'Chateau Dijon Townhomes',
		title: 'Chateau Dijon Townhomes Website Transformation',
		subtitle: 'From Outdated Design to a High-Performance, Ongoing Digital Experience',
		summary:
			'We partnered with Chateau Dijon Townhomes to rebuild their website from the ground up, improving performance, elevating their brand, and making it easier for their community to take action.',
		image: chateauDijonShowcase,
		imageAlt: 'Chateau Dijon Townhomes website shown across laptop, tablet, and mobile devices.',
		industry: 'Community Association',
		service: 'Website Transformation',
		timeline: 'Ongoing',
		categoryLabel: 'Case Study',
		hero: {
			kicker: 'From outdated design to a high-performance digital experience.',
			buttonLabel: 'Request a Website Audit',
			buttonHref: '/website-audit',
			image: chateauDijonShowcase,
			imageAlt:
				'Chateau Dijon Townhomes website redesign shown across laptop, tablet, and phone mockups.',
		},
		snapshot: [
			{ label: 'Client', value: 'Chateau Dijon Townhomes' },
			{ label: 'Industry', value: 'Community Association' },
			{ label: 'Timeline', value: 'Ongoing' },
		],
		metrics: [
			{
				value: '42%',
				title: 'Faster Load Times',
				description: 'Better performance across all devices.',
				icon: 'rocket',
			},
			{
				value: '67%',
				title: 'Increase in Engagement',
				description: 'More time on site and deeper community interaction.',
				icon: 'growth',
			},
			{
				value: '38%',
				title: 'Increase in Conversions',
				description: 'More inquiries and resident actions completed.',
				icon: 'target',
			},
		],
		challenge: {
			label: 'The Challenge',
			title: 'An outdated website was holding the community back.',
			description:
				'The previous site was slow, difficult to manage, and did not reflect the quality of the community it represented. Residents struggled to find important information, and the board lacked the tools to communicate effectively.',
			image: chateauDijonLegacySite,
			imageAlt: 'Older Chateau Dijon Townhomes website displayed on a laptop.',
			bullets: [
				'Slow load times and poor mobile experience',
				"Outdated design that didn't inspire confidence",
				'Difficult for staff to update and maintain',
				'Low engagement and few resident actions',
			],
		},
		strategy: {
			label: 'Our Strategy',
			title: 'A strategic redesign built for residents-and results.',
			description:
				"We didn't just give the site a new look. We rebuilt the entire experience with performance, usability, and communication at the core.",
			image: chateauDijonTablet,
			imageAlt:
				'Chateau Dijon Townhomes website shown in a tablet mockup with the redesigned interface.',
			pillars: [
				{
					title: 'Bespoke Design',
					description:
						"A fully custom design built around the client's vision and the needs of residents.",
					icon: 'design',
				},
				{
					title: 'Performance Optimization',
					description:
						'Faster load times, clean code, and a seamless experience across all devices.',
					icon: 'performance',
				},
				{
					title: 'Mobile-First Experience',
					description: 'Designed for how residents actually browse.',
					icon: 'mobile',
				},
				{
					title: 'Easy Content Management',
					description: 'Empowering the team to update with confidence.',
					icon: 'content',
				},
			],
		},
		process: {
			label: 'Our Process',
			title: 'A proven process. Clear outcomes.',
			steps: [
				{
					title: 'Discover',
					description:
						'We audited the existing site, identified pain points, and aligned goals with the association.',
				},
				{
					title: 'Strategize',
					description:
						'We mapped the user journey and built a blueprint focused on residents and results.',
				},
				{
					title: 'Design & Build',
					description:
						'We designed and developed a modern, fast, and intuitive website tailored to their needs.',
				},
				{
					title: 'Optimize & Support',
					description:
						'We launched, monitored performance, and continue optimizing as their partner.',
				},
			],
		},
		results: {
			label: 'The Results',
			title: 'A website that performs as good as the community.',
			cards: [
				{
					title: 'Faster Load Times',
					description:
						'Noticeably improved performance for a better resident experience.',
					icon: 'lightning',
				},
				{
					title: 'Better Engagement',
					description:
						'A faster, more intuitive experience encourages users to stay longer, interact more, and navigate with ease.',
					icon: 'users',
				},
				{
					title: 'Stronger Perception',
					description:
						'A professional, modern website that reflects the quality of the community.',
					icon: 'star',
				},
			],
			testimonial: {
				quote:
					'Rock Digital completely transformed our website. It is faster, easier to manage, and our residents love how easy it is to find what they need.',
				attribution: 'Chateau Dijon Townhomes',
			},
		},
		nextPhase: {
			label: "What's Next",
			title: 'Not Just a Redesign- An Ongoing Partnership',
			description:
				'After launch, we continue to support Chateau Dijon Townhomes with ongoing updates, performance improvements, and strategic refinements to ensure the website continues to meet the needs of the community today and in the future.',
			bullets: [
				'Ongoing updates and content support.',
				'Performance monitoring and optimization',
				'Continuous improvements based on real-world usage',
				'A long-term partner invested in their success',
			],
		},
		finalCta: {
			title: 'Ready to transform your website into a growth engine?',
			description:
				"Let's build a website that looks incredible-and drives real results.",
			buttonLabel: 'Request a Website Audit',
			buttonHref: '/website-audit',
		},
	},
	// {
	// 	slug: 'summit-service-group',
	// 	client: 'Summit Service Group',
	// 	title: 'Turning service expertise into a conversion-focused web presence.',
	// 	summary:
	// 		'A growing service business needed a website that explained its value quickly, supported local search visibility, and helped qualified visitors move from research to contact.',
	// 	image: '/web-design/approach-preview.png',
	// 	imageAlt: 'Website strategy and interface planning preview.',
	// 	industry: 'Local Services',
	// 	service: 'Web Design and SEO Foundation',
	// 	timeline: '8 Weeks',
	// 	metrics: [
	// 		{ value: '54%', label: 'increase in service-page engagement' },
	// 		{ value: '27%', label: 'more visitors using contact actions' },
	// 		{ value: '22%', label: 'lower bounce rate from search traffic' },
	// 	],
	// 	challenge:
	// 		'The business had strong service expertise, but the site did not communicate it clearly. Service pages were thin, the navigation was vague, and visitors could not quickly see which problems the team solved.',
	// 	solution:
	// 		'We reorganized the site around core services, local intent, and proof points. Each key page received stronger messaging, clearer page structure, and direct conversion paths for visitors who were ready to talk.',
	// 	results: [
	// 		'Built dedicated service pages with focused messaging and clearer search intent.',
	// 		'Added trust-building content that helped visitors understand process, fit, and outcomes.',
	// 		'Created a reusable layout system for future service expansion.',
	// 	],
	// 	sections: [
	// 		{
	// 			heading: 'What Changed',
	// 			body:
	// 				'The site moved from a general overview to a service-led experience. Visitors could quickly identify their need, understand the business value, and choose a clear next step.',
	// 		},
	// 		{
	// 			heading: 'Why It Worked',
	// 			body:
	// 				'Better structure made the business easier to evaluate. Stronger service content supported search visibility while giving visitors the confidence to start a conversation.',
	// 		},
	// 	],
	// },
	// {
	// 	slug: 'northstar-consulting',
	// 	client: 'Northstar Consulting',
	// 	title: 'A sharper digital foundation for a professional services team.',
	// 	summary:
	// 		'A consulting team needed a polished site that could support credibility, explain complex services, and give prospects a straightforward way to begin the relationship.',
	// 	image: '/web-design/hero-devices.png',
	// 	imageAlt: 'Responsive website screens across laptop, tablet, and phone devices.',
	// 	industry: 'Professional Services',
	// 	service: 'Website Strategy and Development',
	// 	timeline: '7 Weeks',
	// 	metrics: [
	// 		{ value: '36%', label: 'more visitors reaching consultation content' },
	// 		{ value: '29%', label: 'increase in return visits' },
	// 		{ value: '24%', label: 'higher engagement on expertise pages' },
	// 	],
	// 	challenge:
	// 		'The team offered valuable expertise, but the site made the offer feel harder to understand than it needed to be. Prospects needed clearer positioning, proof of fit, and a calmer path toward booking a conversation.',
	// 	solution:
	// 		'We created a content structure that made the firm’s expertise easier to scan, paired it with a refined visual system, and built page templates that could grow with future insights, services, and case work.',
	// 	results: [
	// 		'Clarified the firm’s positioning so prospects could quickly understand the best-fit services.',
	// 		'Created stronger expertise pages with practical proof points and clear consultation paths.',
	// 		'Improved responsive behavior for long-form content and decision-stage visitors.',
	// 	],
	// 	sections: [
	// 		{
	// 			heading: 'What Changed',
	// 			body:
	// 				'The new site gives complex services a clearer shape. Visitors can move from broad positioning to specific areas of expertise without losing context or momentum.',
	// 		},
	// 		{
	// 			heading: 'Why It Worked',
	// 			body:
	// 				'Professional services buyers need clarity before they need persuasion. The redesign reduced ambiguity and made the next conversation feel like a practical step.',
	// 		},
	// 	],
	// },
];

export const getCaseStudyBySlug = (slug) =>
	caseStudies.find((caseStudy) => caseStudy.slug === slug);
