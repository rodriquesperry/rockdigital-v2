import blogImage from '@/assets/blog.jpeg';
import digitalMarketingImage from '@/assets/digital-marketing_1359px.webp';
import seoImage from '@/assets/seo-service.webp';
import webDesignImage from '@/assets/web-design-full_1359px.webp';
import websiteImprovementImage from '@/assets/website-improvement-maintenance.webp';

const digitalMarketingChecklistDownloadUrl =
	process.env.CHECKLIST_DOWNLOAD_URL ||
	'https://nnuvcjkozpiborbkurhp.supabase.co/storage/v1/object/public/downloads/DM-Checklist.pdf';

const premiumWebsiteLaunchChecklistDownloadUrl =
	process.env.PREMIUM_WEBSITE_LAUNCH_CHECKLIST_DOWNLOAD_URL ||
	'https://nnuvcjkozpiborbkurhp.supabase.co/storage/v1/object/public/downloads/Premium%20Website%20Launch%20Checklist.pdf';

const defaultRelatedArticles = [
	{
		title: 'What Makes a High-Converting Website?',
		description:
			'Learn how clarity, trust, page flow, and calls-to-action work together to turn visitors into leads.',
		href: '/blog/what-makes-a-high-converting-website',
		image: webDesignImage,
	},
	{
		title: 'Why Your Website Is Not Generating Leads',
		description:
			'Review the common issues that stop a professional-looking website from producing real business opportunities.',
		href: '/blog/why-your-website-isn-t-generating-leads',
		image: websiteImprovementImage,
	},
	{
		title: 'How to Get Your Website Found on Google',
		description:
			'Understand the search foundations that help your website show up for the right people at the right time.',
		href: '/blog/how-to-get-your-website-found-on-google',
		image: seoImage,
	},
];

export const thankYouResources = {
	'web-design-guide': {
		title: 'Web Design Guide',
		description:
			'Use this guide to understand how strategy, design, messaging, SEO, and conversion work together inside a stronger website.',
		downloadUrl: '/web-design-guide',
		serviceUrl: '/web-design',
		serviceTitle: 'Web Design Services',
		relatedArticles: defaultRelatedArticles,
	},
	'digital-marketing-guide': {
		title: 'Digital Marketing Guide',
		description:
			'Use this guide to connect SEO, content, traffic strategy, analytics, and conversion into a clearer growth system.',
		downloadUrl: digitalMarketingChecklistDownloadUrl,
		serviceUrl: '/digital-marketing',
		serviceTitle: 'Digital Marketing Services',
		relatedArticles: [
			{
				title: 'Top San Antonio Digital Marketing Strategies',
				description:
					'Explore practical digital marketing strategies for businesses that need more qualified visibility and stronger results.',
				href: '/blog/top-san-antonio-digital-marketing-strategies',
				image: digitalMarketingImage,
			},
			{
				title: 'How to Get Your Website Found on Google',
				description:
					'Learn how search visibility, page structure, and content quality help your business get discovered online.',
				href: '/blog/how-to-get-your-website-found-on-google',
				image: seoImage,
			},
			{
				title: 'Effective Website Design Tips for Digital Marketing',
				description:
					'See how better web design supports stronger campaigns, clearer messaging, and more effective conversion paths.',
				href: '/blog/effective-website-design-tips-for-digital-marketing',
				image: webDesignImage,
			},
		],
	},
	'local-seo-guide': {
		title: 'Local SEO Guide',
		description:
			'Use this resource to understand the local visibility signals that help nearby customers discover and trust your business.',
		downloadUrl: '/digital-marketing',
		serviceUrl: '/digital-marketing',
		serviceTitle: 'Local SEO Strategy',
		relatedArticles: [
			{
				title: 'How to Get Your Website Found on Google',
				description:
					'Build a stronger search foundation with clearer pages, technical structure, and content that matches intent.',
				href: '/blog/how-to-get-your-website-found-on-google',
				image: seoImage,
			},
			{
				title: 'Why Digital Marketing Matters for Local Businesses',
				description:
					'Understand how search, content, and website clarity help local businesses compete online.',
				href: '/blog/why-digital-marketing-is-important-for-local-businesses-in-new-braunfels',
				image: digitalMarketingImage,
			},
			{
				title: 'Top San Antonio Digital Marketing Strategies',
				description:
					'Review local growth strategies for improving visibility, trust, and qualified lead flow.',
				href: '/blog/top-san-antonio-digital-marketing-strategies',
				image: blogImage,
			},
		],
	},
	'premium-website-launch-checklist': {
		title: 'Premium Website Launch Checklist',
		description:
			'Use this checklist before launch to review strategy, user experience, messaging, SEO, performance, and conversion readiness.',
		downloadUrl: premiumWebsiteLaunchChecklistDownloadUrl,
		serviceUrl: '/website-design-and-development',
		serviceTitle: 'Website Design Services',
		relatedArticles: defaultRelatedArticles,
	},
	'website-audit-checklist': {
		title: 'Website Audit Checklist',
		description:
			'Use this checklist to review the issues that may be holding back your website performance, lead flow, and growth.',
		downloadUrl: premiumWebsiteLaunchChecklistDownloadUrl,
		serviceUrl: '/website-audit',
		serviceTitle: 'Website Audit',
		relatedArticles: defaultRelatedArticles,
	},
};

export const getThankYouResource = (slug) => thankYouResources[slug] || null;
