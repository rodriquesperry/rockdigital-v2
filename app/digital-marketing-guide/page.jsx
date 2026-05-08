import Link from 'next/link';

import JsonLd from '@/components/seo/JsonLd';

import ChecklistLeadForm from './ChecklistLeadForm.client';
import DigitalMarketingGuideProgress from './DigitalMarketingGuideProgress.client';
import styles from './digitalMarketingGuide.module.css';

const pageTitle =
	'Digital Marketing Guide: Strategy, SEO, Content, PPC, CRO, and Analytics';
const pageDescription =
	'A complete digital marketing guide for businesses that want measurable growth. Learn how SEO, content, PPC, email, CRO, branding, analytics, funnels, and strategy work together.';
const pageUrl = 'https://www.rockdigital.agency/digital-marketing-guide';
const organizationName = 'Rock Digital Agency';
const organizationUrl = 'https://www.rockdigital.agency';
const auditHref = '/website-audit';
const digitalMarketingHref = '/digital-marketing';
const websiteImprovementHref = '/website-improvement';
const websiteOptimizationHref = '/website-optimization';
const chateauDijonCaseStudyHref =
	'/case-studies/chateau-dijon-townhomes-web-design';
const websiteDesignDevelopmentHref = '/website-design-and-development';
const growthWebsiteBlogHref =
	'/blog/how-to-build-a-website-that-actually-drives-growth';
const googleVisibilityBlogHref = '/blog/how-to-get-your-website-found-on-google';
const aboutHref = '/about';
const digitalMarketingNewBraunfelsHref = '/digital-marketing-new-braunfels';
const sanAntonioStrategiesBlogHref =
	'/blog/top-san-antonio-digital-marketing-strategies';
const webDesignHref = '/web-design';
const webDesignGuideHref = '/web-design-guide';
const effectiveDesignTipsBlogHref =
	'/blog/effective-website-design-tips-for-digital-marketing';
const servicesHref = '/services';
const checklistLeadHref = '#digital-marketing-checklist';

export const metadata = {
	title: {
		absolute: pageTitle,
	},
	description: pageDescription,
	alternates: {
		canonical: pageUrl,
	},
	openGraph: {
		title: pageTitle,
		description: pageDescription,
		url: pageUrl,
		type: 'article',
	},
	twitter: {
		card: 'summary_large_image',
		title: pageTitle,
		description: pageDescription,
	},
};

const navItems = [
	{
		id: 'seo',
		label: 'SEO',
		icon: 'SE',
		description: 'Search visibility, intent, authority, and technical health.',
	},
	{
		id: 'content-marketing',
		label: 'Content Marketing',
		icon: 'CM',
		description: 'Useful content systems that answer questions and build trust.',
	},
	{
		id: 'social-media',
		label: 'Social Media',
		icon: 'SM',
		description: 'Audience presence, proof, distribution, and engagement.',
	},
	{
		id: 'ppc',
		label: 'PPC',
		icon: 'PC',
		description: 'Paid visibility for high-intent searches and focused campaigns.',
	},
	{
		id: 'email-marketing',
		label: 'Email Marketing',
		icon: 'EM',
		description: 'Owned follow-up, nurture, retention, and repeat demand.',
	},
	{
		id: 'cro',
		label: 'CRO',
		icon: 'CR',
		description: 'Website improvements that turn attention into action.',
	},
	{
		id: 'branding',
		label: 'Branding',
		icon: 'BR',
		description: 'Positioning, trust, clarity, and recognizable market meaning.',
	},
	{
		id: 'analytics',
		label: 'Analytics',
		icon: 'AN',
		description: 'Measurement that connects traffic to business outcomes.',
	},
	{
		id: 'funnels',
		label: 'Funnels',
		icon: 'FN',
		description: 'Customer journeys from awareness to conversion and retention.',
	},
	{
		id: 'emerging-trends',
		label: 'Emerging Trends',
		icon: 'ET',
		description: 'AI search, privacy, automation, and changing buyer behavior.',
	},
	{
		id: 'strategy',
		label: 'Strategy',
		icon: 'ST',
		description: 'The operating system that keeps every channel aligned.',
	},
];

const sections = [
	{
		id: 'seo',
		kicker: 'Pillar 01',
		title: 'Search Engine Optimization: Building Visibility That Compounds',
		icon: 'SE',
		layout: 'split',
		intro:
			'SEO is the foundation of long-term digital visibility. It helps your business show up when people are already searching for problems, services, products, and answers related to what you offer.',
		paragraphs: [
			'Search engine optimization is not just about rankings. Rankings matter, but they are only useful when they connect the right searcher with the right page at the right stage of intent. A page can rank and still fail if the topic, message, user experience, or offer does not match what the searcher needs.',
			'Modern SEO begins with search intent. Before creating a page or optimizing a headline, you need to understand what the user is really trying to accomplish. Some searches are educational. Some are comparative. Some are local. Some are urgent. Each intent requires a different kind of page and a different kind of answer.',
			'Technical SEO gives that content a stable foundation. Search engines need to crawl, understand, and index your website efficiently. Clean site structure, internal linking, schema markup, page speed, mobile usability, and clear URL architecture all help search engines interpret your site while also improving the experience for real people.',
			'On-page SEO brings structure to the message. Page titles, meta descriptions, headings, image alt text, internal links, and content formatting help both users and search engines understand what a page is about. The goal is not to stuff keywords into a page. The goal is to make relevance unmistakable.',
			'Local SEO is especially important for service businesses. A strong Google Business Profile, consistent location signals, local landing pages, reviews, service-area clarity, and locally relevant content can help your business appear when nearby buyers are evaluating options. For businesses in competitive markets, local search can become one of the most reliable sources of qualified demand.',
			'SEO also supports every other channel. Strong organic content can improve paid landing pages, answer sales questions, strengthen email nurture sequences, and create internal linking paths for future content clusters. That is why SEO should be treated as part of the full marketing ecosystem, not an isolated checklist.',
		],
		callout: {
			title: 'SEO works best when it is structured like an authority system.',
			body: 'One strong page is helpful. A connected cluster of useful pages is stronger. That is how businesses build topical authority over time.',
		},
		stats: [
			{ value: 'Intent', label: 'The filter for deciding what each page should do.' },
			{ value: 'Structure', label: 'The signal that helps search engines and users move confidently.' },
			{ value: 'Authority', label: 'The compound effect created by useful content and internal links.' },
		],
		links: [
			{
				href: digitalMarketingHref,
				label: 'Explore how SEO fits into a connected digital marketing system',
			},
			{
				href: sanAntonioStrategiesBlogHref,
				label: 'Read digital marketing strategies for San Antonio businesses',
			},
		],
		textLinks: [
			{
				href: googleVisibilityBlogHref,
				before: 'For a deeper search visibility primer, read ',
				label: 'how stronger search foundations help your website get found on Google',
				after: '.',
			},
		],
	},
	{
		id: 'content-marketing',
		kicker: 'Pillar 02',
		title: 'Content Marketing: Turning Expertise Into Searchable Trust',
		icon: 'CM',
		layout: 'centered',
		intro:
			'Content marketing helps businesses educate buyers, answer objections, build authority, and create more reasons for the right audience to discover and trust them.',
		paragraphs: [
			'Content marketing is often misunderstood as publishing more posts. Volume alone does not create authority. A business can publish frequently and still fail to gain traction if the content is disconnected from search intent, customer questions, or the buying journey.',
			'Effective content starts with the questions your audience is already asking. What problem are they trying to solve? What alternatives are they comparing? What fears are slowing them down? What proof do they need before they contact a business? Strong content makes those questions easier to answer.',
			'A pillar page, like this guide, gives a broad topic a clear home. Supporting cluster pages then explore related subtopics in more depth. This structure helps users move through a topic naturally and gives search engines a clearer map of your expertise.',
			'Content should also support conversion without feeling like a sales pitch. Educational pages can include advisory CTAs, helpful downloads, internal links, and next-step prompts that match the readers level of intent. Someone reading a beginner guide may need a checklist. Someone comparing solutions may be ready for an audit.',
			'The best content is useful before it is promotional. It gives readers clarity, language, frameworks, and confidence. When a business consistently helps people understand what matters, it earns trust before the sales conversation begins.',
			'Content marketing also compounds across channels. A guide can support SEO, be broken into email sequences, inspire social posts, improve sales enablement, and become a reference point in paid campaigns. The more strategically it is planned, the more value each asset can create.',
		],
		callout: {
			title: 'Content should reduce buyer uncertainty.',
			body: 'The strongest educational assets do not just attract traffic. They make the next decision feel clearer.',
		},
		framework: ['Pillar page', 'Cluster pages', 'Internal links', 'Conversion paths', 'Performance updates'],
		links: [
			{
				href: webDesignGuideHref,
				label: 'See how our web design guide supports the broader growth cluster',
			},
		],
		textLinks: [
			{
				href: growthWebsiteBlogHref,
				before: 'Content strategy becomes more valuable when it supports ',
				label: 'a website that actually drives growth',
				after: ', not just pageviews.',
			},
		],
	},
	{
		id: 'social-media',
		kicker: 'Pillar 03',
		title: 'Social Media Marketing: Building Presence, Proof, and Distribution',
		icon: 'SM',
		layout: 'cards',
		intro:
			'Social media gives your business a way to stay visible, human, and relevant between moments of active search.',
		paragraphs: [
			'Social media is not a replacement for a strong website, SEO foundation, or conversion strategy. It is a distribution and trust channel. People may discover your business through social content, but they often validate that interest through your website, reviews, search presence, and brand consistency.',
			'The strongest social strategies are built around audience relevance. A business does not need to be everywhere. It needs to understand where its audience pays attention, what kind of content builds trust, and how social activity connects back to measurable business objectives.',
			'Useful social content can take many forms: educational posts, behind-the-scenes process, customer proof, project breakdowns, short videos, community updates, and practical insights. The format matters less than the strategic role. Each post should either build awareness, strengthen trust, answer a question, or invite a next step.',
			'Consistency matters because trust often forms through repeated exposure. When people see a business communicate clearly over time, the brand becomes more familiar. Familiarity reduces friction when a buyer later searches, compares, or asks for a recommendation.',
			'Social media also supports content marketing. Long-form guides can become short posts, carousel ideas, video scripts, newsletter topics, and sales conversation starters. This makes social more efficient because it distributes existing expertise instead of constantly demanding new ideas from scratch.',
			'For local businesses, social media can reinforce community presence. It can show recent work, highlight local relationships, and make the business feel active and accessible. The key is to connect activity to a larger marketing system, not treat posting as the strategy itself.',
		],
		cardItems: [
			{ title: 'Awareness', body: 'Show up consistently with ideas your market already cares about.' },
			{ title: 'Trust', body: 'Use proof, process, and perspective to make the brand easier to believe.' },
			{ title: 'Distribution', body: 'Repurpose pillar content into shorter assets that extend reach.' },
			{ title: 'Momentum', body: 'Connect social activity to search, website, and email journeys.' },
		],
		links: [
			{
				href: '/blog/why-digital-marketing-is-important-for-local-businesses-in-new-braunfels',
				label: 'Read why digital marketing matters for local businesses in New Braunfels',
			},
		],
		textLinks: [
			{
				href: digitalMarketingNewBraunfelsHref,
				before: 'Local businesses can connect social proof with ',
				label: 'New Braunfels marketing visibility',
				after: ' so discovery feels more connected across channels.',
			},
			{
				href: aboutHref,
				before: 'You can also ',
				label: 'learn more about the Rock Digital team',
				after: ' behind this strategy-first approach.',
			},
		],
	},
	{
		id: 'ppc',
		kicker: 'Pillar 04',
		title: 'PPC Advertising: Creating Focused Visibility When Timing Matters',
		icon: 'PC',
		layout: 'splitReverse',
		intro:
			'Pay-per-click advertising helps businesses appear in front of specific audiences quickly, especially when demand is active and timing is important.',
		paragraphs: [
			'PPC can create visibility faster than organic channels, but speed does not guarantee profitability. Paid campaigns work best when they are built around clear intent, strong landing pages, conversion tracking, and disciplined optimization.',
			'Search ads are especially powerful when users are actively looking for a solution. A person searching for a service near them has a different level of intent than someone casually browsing a feed. PPC strategy should account for that difference and match the campaign, keyword, ad copy, and landing page to user readiness.',
			'Landing pages matter enormously. Sending paid traffic to a generic homepage often creates friction because the page may not match the promise of the ad. A focused landing page can reinforce the offer, answer objections, provide proof, and make the next step obvious.',
			'Strong PPC management is not only about launching campaigns. It requires ongoing refinement. Search terms, negative keywords, audience signals, conversion data, ad creative, bids, and landing page behavior all need review. Without optimization, paid media can quietly waste budget.',
			'Paid advertising also creates useful data. Search terms can reveal market language. Landing page behavior can reveal conversion friction. Campaign performance can show which offers, messages, and audiences deserve more attention across the broader marketing system.',
			'The best PPC strategy is not isolated from SEO, content, or CRO. Paid campaigns can test messaging quickly. SEO can reduce long-term dependency on paid traffic. CRO can improve the return from every click. Together, those pieces make paid media more efficient.',
		],
		callout: {
			title: 'Paid traffic exposes weak conversion systems quickly.',
			body: 'If the website message, offer, or user flow is unclear, PPC will reveal it in the form of expensive clicks that do not turn into action.',
		},
		framework: ['Intent', 'Ad promise', 'Landing page', 'Conversion tracking', 'Optimization loop'],
		textLinks: [
			{
				href: servicesHref,
				before: 'Paid campaigns perform best when they sit inside ',
				label: 'a broader service ecosystem',
				after: ' instead of operating alone.',
			},
			{
				href: websiteOptimizationHref,
				before: 'Before increasing spend, prioritize ',
				label: 'website optimization',
				after: ' so more of each click has a path to action.',
			},
		],
	},
	{
		id: 'email-marketing',
		kicker: 'Pillar 05',
		title: 'Email Marketing: Owning the Follow-Up',
		icon: 'EM',
		layout: 'editorial',
		intro:
			'Email marketing gives businesses a direct channel for nurturing interest, building relationships, and staying present after the first visit.',
		paragraphs: [
			'Not every buyer is ready to act the first time they find your business. Some are researching. Some are comparing options. Some are waiting for timing, budget, approval, or confidence. Email gives you a way to continue the conversation without relying on the buyer to remember you later.',
			'Effective email marketing begins with permission and relevance. People should understand why they are hearing from you and what value they will receive. A checklist, guide, audit follow-up, resource series, or helpful newsletter can create a reason to subscribe that feels useful rather than intrusive.',
			'Nurture sequences can help turn interest into readiness. They might explain common mistakes, share case studies, answer objections, introduce process, or help buyers understand what to prioritize. The goal is not pressure. The goal is momentum and clarity.',
			'Segmentation makes email more effective. A new lead who requested an audit should not receive the same message as a long-term customer or a cold subscriber. Different audiences need different levels of education, proof, and next-step guidance.',
			'Email also supports retention and customer lifetime value. Updates, reminders, educational resources, seasonal campaigns, and reactivation sequences can help existing customers stay engaged and aware of what else the business can help with.',
			'When connected properly, email becomes part of the full funnel. SEO and content attract the audience. The website captures interest. Email nurtures the relationship. Analytics show which messages and offers create action.',
		],
		stats: [
			{ value: 'Owned', label: 'An audience channel you are not renting from an algorithm.' },
			{ value: 'Nurture', label: 'A way to build confidence after the first visit.' },
			{ value: 'Retain', label: 'A channel for keeping customers engaged over time.' },
		],
		textLinks: [
			{
				href: websiteImprovementHref,
				before: 'Email follow-up works harder when paired with ',
				label: 'website improvements',
				after: ' that make the first visit clearer.',
			},
		],
	},
	{
		id: 'cro',
		kicker: 'Pillar 06',
		title: 'Conversion Rate Optimization: Turning Attention Into Action',
		icon: 'CR',
		layout: 'split',
		intro:
			'CRO improves the way your website turns visitors into leads, customers, bookings, calls, form submissions, and other meaningful actions.',
		paragraphs: [
			'Many businesses focus heavily on getting more traffic before fixing the experience that traffic lands on. That can be costly. If the website is unclear, slow, hard to navigate, or weak on trust, more traffic may only create more missed opportunities.',
			'Conversion rate optimization is the practice of improving the path between visitor intent and business outcome. It looks at messaging, layout, user flow, speed, form design, calls to action, trust signals, mobile experience, and friction points.',
			'CRO begins with clarity. Visitors should quickly understand what you offer, who it is for, why it matters, and what they should do next. If a page forces people to decode the business before they can decide, conversion suffers.',
			'Trust is equally important. Testimonials, case studies, process clarity, recognizable credentials, transparent expectations, and professional design all help visitors feel safer taking action. Trust signals should support the decision naturally instead of being scattered as decoration.',
			'Forms and CTAs should be designed around user effort. A high-friction form may work for high-intent offers, but it can damage performance when the ask is too heavy for the stage of the journey. The right CTA depends on context.',
			'CRO is not guesswork. Analytics, heatmaps, user behavior, form tracking, scroll depth, and qualitative feedback can reveal where users hesitate or drop off. The best improvements come from a mix of evidence, strategic judgment, and focused testing.',
		],
		callout: {
			title: 'Most businesses do not need more tactics first.',
			body: 'They need better alignment between traffic, messaging, and conversions.',
		},
		stats: [
			{ value: 'Clarity', label: 'Make the value easy to understand.' },
			{ value: 'Trust', label: 'Reduce risk in the buyer mind.' },
			{ value: 'Flow', label: 'Guide visitors toward the right next step.' },
		],
		links: [
			{
				href: webDesignHref,
				label: 'See how conversion-aware web design supports marketing performance',
			},
			{
				href: auditHref,
				label: 'Request a website audit to find conversion friction',
			},
		],
		textLinks: [
			{
				href: websiteOptimizationHref,
				before: 'For teams already attracting traffic, ',
				label: 'website optimization',
				after: ' is often the most direct path to stronger conversion flow.',
			},
			{
				href: chateauDijonCaseStudyHref,
				before: 'The ',
				label: 'Chateau Dijon case study',
				after: ' is a useful proof point for redesign, credibility, and measurable growth.',
			},
		],
	},
	{
		id: 'branding',
		kicker: 'Pillar 07',
		title: 'Branding: Making the Business Easier to Recognize and Trust',
		icon: 'BR',
		layout: 'cards',
		intro:
			'Branding gives your marketing a clear identity, voice, position, and promise so every channel feels connected.',
		paragraphs: [
			'Branding is not only a logo, color palette, or visual style. Those elements matter, but they are expressions of something deeper: what the business stands for, who it serves, why it is different, and what kind of experience people should expect.',
			'Without brand clarity, digital marketing becomes fragmented. SEO pages may sound different from ads. Social posts may feel disconnected from the website. Email may use a different tone than sales conversations. That inconsistency creates doubt.',
			'A strong brand makes decisions easier. It helps buyers understand whether the business is for them. It also helps internal teams make better choices about messaging, design, content, offers, and customer experience.',
			'Positioning is central to branding. A business needs to know what market it occupies and what problem it is best equipped to solve. Clear positioning prevents the brand from trying to appeal to everyone and resonating deeply with no one.',
			'Brand trust grows through consistency. When the same promise, voice, design quality, and level of usefulness show up across search, website, social, email, and sales touchpoints, the business feels more credible.',
			'In a digital marketing ecosystem, branding is the thread that keeps every tactic from feeling random. It turns disconnected activity into a recognizable market presence.',
		],
		cardItems: [
			{ title: 'Positioning', body: 'Define where the business fits and why it matters.' },
			{ title: 'Voice', body: 'Make the brand sound consistent across every channel.' },
			{ title: 'Identity', body: 'Create visual recognition without letting visuals carry the whole strategy.' },
			{ title: 'Trust', body: 'Use consistency to reduce uncertainty before contact.' },
		],
		textLinks: [
			{
				href: chateauDijonCaseStudyHref,
				before: 'For a concrete example of credibility through execution, review the ',
				label: 'Chateau Dijon redesign',
				after: '.',
			},
			{
				href: websiteDesignDevelopmentHref,
				before: 'Brand clarity should also carry into ',
				label: 'website design and development',
				after: ' so the promise and experience feel consistent.',
			},
		],
	},
	{
		id: 'analytics',
		kicker: 'Pillar 08',
		title: 'Analytics: Measuring What Actually Moves the Business',
		icon: 'AN',
		layout: 'centered',
		intro:
			'Analytics helps businesses understand what is working, what is underperforming, and where the next improvement should happen.',
		paragraphs: [
			'Digital marketing without measurement quickly turns into opinion. A team may feel busy, publish regularly, run ads, update pages, and post on social media, but still lack a clear view of what is producing meaningful business outcomes.',
			'Good analytics starts with defining what matters. Traffic alone is not enough. A business needs to understand traffic quality, engagement, leads, calls, booked appointments, form submissions, revenue influence, and channel contribution.',
			'Conversion tracking is essential. If your website does not properly track form submissions, calls, booking clicks, downloads, and campaign sources, it becomes difficult to know which efforts deserve more investment and which need adjustment.',
			'Analytics should also reveal user behavior. Scroll depth, page paths, exit points, device performance, and landing page behavior can show where users are interested and where friction appears.',
			'Reporting should guide decisions, not overwhelm people with dashboards. The best reports explain what happened, why it likely happened, what it means, and what should happen next.',
			'Privacy changes, consent requirements, and platform limitations mean analytics will never be perfect. That makes strategic interpretation even more important. The goal is not false precision. The goal is useful visibility.',
		],
		framework: ['Visibility', 'Engagement', 'Lead quality', 'Conversion paths', 'Revenue signals'],
		stats: [
			{ value: 'Measure', label: 'Track the actions that indicate real business momentum.' },
			{ value: 'Interpret', label: 'Turn numbers into decisions.' },
			{ value: 'Improve', label: 'Use evidence to prioritize the next move.' },
		],
		textLinks: [
			{
				href: websiteOptimizationHref,
				before: 'The most useful analytics work often leads directly into ',
				label: 'higher-impact website optimization',
				after: '.',
			},
			{
				href: chateauDijonCaseStudyHref,
				before: 'Proof matters too; the ',
				label: 'Chateau Dijon project',
				after: ' shows how measurable outcomes can strengthen trust.',
			},
		],
	},
	{
		id: 'funnels',
		kicker: 'Pillar 09',
		title: 'Marketing Funnels: Designing the Journey From Awareness to Decision',
		icon: 'FN',
		layout: 'splitReverse',
		intro:
			'Funnels help businesses understand how buyers move from first awareness to trust, comparison, conversion, and long-term relationship.',
		paragraphs: [
			'A funnel is not just a sequence of pages. It is a model for understanding buyer readiness. People do not all arrive with the same intent. Some are learning. Some are evaluating. Some are ready to act. A strong marketing system gives each group a useful next step.',
			'At the top of the funnel, buyers need awareness and education. SEO guides, social content, videos, blog posts, and helpful resources can introduce problems and clarify options.',
			'In the middle of the funnel, buyers need trust and comparison support. Case studies, service pages, process explanations, FAQs, webinars, emails, and proof help them decide whether the business is credible and relevant.',
			'At the bottom of the funnel, buyers need a low-friction path to action. Landing pages, audits, consultations, quote requests, booking flows, and clear CTAs help turn readiness into contact.',
			'Funnels also continue after conversion. Onboarding, follow-up, retention campaigns, referrals, reviews, and customer education can all strengthen the customer relationship and increase lifetime value.',
			'The most effective funnels feel natural. They do not force people through an artificial sequence. They give users the right information, proof, and next step based on what they are trying to accomplish.',
		],
		framework: ['Awareness', 'Education', 'Trust', 'Decision', 'Retention'],
		callout: {
			title: 'A funnel should feel like guidance, not pressure.',
			body: 'The best customer journeys help people move forward with confidence.',
		},
		textLinks: [
			{
				href: webDesignHref,
				before: 'A funnel needs ',
				label: 'conversion-focused web design',
				after: ' at the center so each stage has somewhere useful to land.',
			},
			{
				href: effectiveDesignTipsBlogHref,
				before: 'For practical page-level ideas, review these ',
				label: 'website design tips for digital marketing performance',
				after: '.',
			},
		],
	},
	{
		id: 'emerging-trends',
		kicker: 'Pillar 10',
		title: 'Emerging Digital Marketing Trends: What Is Changing and What Still Matters',
		icon: 'ET',
		layout: 'editorial',
		intro:
			'Digital marketing changes quickly, but the strongest businesses separate durable strategy from short-lived noise.',
		paragraphs: [
			'AI-assisted search, generative answers, automation, privacy shifts, first-party data, short-form video, and platform changes are reshaping how people discover and evaluate businesses. These changes matter, but they do not eliminate the fundamentals.',
			'Search is becoming more answer-driven. That means businesses need clearer expertise, structured content, strong entities, helpful resources, and pages that answer questions thoroughly. Thin content will become easier to ignore.',
			'AI tools can speed up research, drafting, analysis, and operational workflows, but they do not replace strategy. The businesses that benefit most will use AI to improve quality and consistency, not to flood the internet with generic content.',
			'Privacy changes make first-party relationships more valuable. Email lists, direct inquiries, customer data, consent-based tracking, and owned audiences help businesses reduce dependency on platforms they do not control.',
			'Brand differentiation is also becoming more important. As content production becomes easier, sameness increases. Businesses with a clear point of view, real expertise, strong proof, and consistent positioning will be easier to trust.',
			'The practical takeaway is simple: adapt to new tools, but keep the system grounded. Strong messaging, useful content, technical quality, trustworthy branding, clear conversion paths, and sound measurement remain the core of effective digital marketing.',
		],
		stats: [
			{ value: 'AI', label: 'Useful for acceleration, not a substitute for strategy.' },
			{ value: 'Privacy', label: 'A reason to build stronger owned relationships.' },
			{ value: 'Trust', label: 'The durable advantage when channels change.' },
		],
		textLinks: [
			{
				href: digitalMarketingHref,
				before: 'Emerging channels are easier to evaluate when they are anchored inside ',
				label: 'a durable digital marketing strategy',
				after: '.',
			},
		],
	},
	{
		id: 'strategy',
		kicker: 'Pillar 11',
		title: 'Digital Marketing Strategy: Making Every Channel Work Together',
		icon: 'ST',
		layout: 'split',
		intro:
			'Strategy is what turns separate marketing tactics into a connected system designed around clear business goals.',
		paragraphs: [
			'Many businesses do pieces of digital marketing without having a digital marketing strategy. They run ads, publish content, update the website, send emails, and post on social media, but the work does not always connect. That creates motion without momentum.',
			'A strong strategy begins with the business objective. Do you need more qualified leads? Better local visibility? Stronger conversion rates? More repeat demand? Higher trust in a competitive market? The goal shapes the channel mix.',
			'Next comes audience and positioning. Marketing becomes sharper when you understand who you are trying to reach, what they care about, what they are comparing, and what would make them believe you are the right choice.',
			'Then the website needs to function as the conversion center. Even when discovery happens through search, social, email, or paid ads, the website often becomes the place where buyers evaluate the business and decide whether to act.',
			'Channel planning should follow the customer journey. SEO may build long-term demand capture. PPC may create faster visibility. Content may educate and build authority. Email may nurture. Social may distribute proof. CRO may improve the return from all traffic.',
			'Finally, strategy requires measurement and iteration. Digital marketing is not a one-time setup. It is an operating rhythm of planning, execution, measurement, learning, and improvement.',
		],
		callout: {
			title: 'The system matters more than any single tactic.',
			body: 'Digital marketing works best when traffic, messaging, conversion, and measurement are aligned.',
		},
		links: [
			{
				href: digitalMarketingHref,
				label: 'Explore Rock Digital Agency digital marketing services',
			},
			{
				href: auditHref,
				label: 'Find the gaps in your current website and marketing system',
			},
		],
		textLinks: [
			{
				href: webDesignGuideHref,
				before: 'Use the ',
				label: 'web design guide',
				after: ' to connect strategy with website execution.',
			},
			{
				href: websiteDesignDevelopmentHref,
				before: 'When the plan is ready to become real, ',
				label: 'website design and development',
				after: ' should be shaped around long-term growth.',
			},
		],
	},
];

const faqItems = [
	{
		question: 'What is digital marketing?',
		answer:
			'Digital marketing is the use of online channels such as search engines, websites, content, social media, paid ads, email, and analytics to attract an audience, build trust, and drive business growth.',
	},
	{
		question: 'Why is digital marketing important for small and local businesses?',
		answer:
			'Digital marketing helps small and local businesses appear when customers search online, explain their value before a conversation happens, and turn website visitors into leads, calls, bookings, or customers.',
	},
	{
		question: 'Which digital marketing channel should I start with?',
		answer:
			'The right starting point depends on your goals, audience, budget, timeline, and current website performance. Many businesses should begin with website clarity, SEO foundations, analytics, and conversion paths before scaling paid traffic.',
	},
	{
		question: 'How long does digital marketing take to work?',
		answer:
			'Some channels, such as PPC, can create visibility quickly. SEO, content, brand trust, and conversion improvements usually compound over time. A realistic strategy often blends short-term visibility with long-term authority building.',
	},
	{
		question: 'Do I need a better website before investing in marketing?',
		answer:
			'If your website is unclear, slow, hard to use, or not built to convert, improving it first can make every marketing channel more effective. Traffic is more valuable when visitors have a clear path to action.',
	},
	{
		question: 'What should a website audit include?',
		answer:
			'A useful website audit should review messaging, user experience, conversion paths, page speed, mobile usability, SEO structure, analytics tracking, technical health, and the alignment between traffic sources and business goals.',
	},
];

const articleSchema = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: pageTitle,
	description: pageDescription,
	mainEntityOfPage: pageUrl,
	datePublished: '2026-05-06',
	dateModified: '2026-05-06',
	author: {
		'@type': 'Organization',
		name: organizationName,
		url: organizationUrl,
	},
	publisher: {
		'@type': 'Organization',
		name: organizationName,
		url: organizationUrl,
	},
};

const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faqItems.map((item) => ({
		'@type': 'Question',
		name: item.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: item.answer,
		},
	})),
};

const breadcrumbSchema = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Home',
			item: organizationUrl,
		},
		{
			'@type': 'ListItem',
			position: 2,
			name: 'Digital Marketing Guide',
			item: pageUrl,
		},
	],
};

function SectionDivider() {
	return <div className={styles.sectionDivider} aria-hidden='true' />;
}

function StatCard({ value, label }) {
	return (
		<div className={styles.statCard}>
			<strong>{value}</strong>
			<span>{label}</span>
		</div>
	);
}

function PullQuote({ children }) {
	return <blockquote className={styles.pullQuote}>{children}</blockquote>;
}

function ContentCallout({ title, body }) {
	return (
		<aside className={styles.contentCallout}>
			<p>{title}</p>
			<span>{body}</span>
		</aside>
	);
}

function CTASection({
	id,
	eyebrow = 'Strategic next step',
	title,
	body,
	primaryLabel = 'Request a Website Audit',
	secondaryLabel = 'Download the Digital Marketing Checklist',
	gradient = false,
}) {
	return (
		<section
			id={id}
			className={`${styles.ctaSection} ${gradient ? styles.ctaSectionGradient : ''}`.trim()}
		>
			<div>
				<p className={styles.eyebrow}>{eyebrow}</p>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div className={styles.ctaActions}>
				<Link href={auditHref} className={styles.primaryButton}>
					{primaryLabel}
				</Link>
				<Link href={checklistLeadHref} className={styles.secondaryButton}>
					{secondaryLabel}
				</Link>
			</div>
		</section>
	);
}

function StickyTOC() {
	return (
		<aside className={styles.tocShell}>
			<nav className={styles.tocCard} aria-label='In this guide'>
				<div className={styles.tocHeader}>
					<span>In This Guide</span>
					<small>11 sections</small>
				</div>
				<ul>
					{navItems.map((item) => (
						<li key={item.id}>
							<a href={`#${item.id}`}>
								<span>{item.icon}</span>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className={styles.tocCta}>
					<p>Not sure where performance is leaking?</p>
					<Link href={auditHref}>Request an audit</Link>
				</div>
			</nav>
		</aside>
	);
}

function QuickNavigationHub() {
	return (
		<section className={styles.quickNavSection} aria-labelledby='quick-nav-title'>
			<div className={styles.container}>
				<div className={styles.quickNavHeader}>
					<p className={styles.eyebrow}>Quick navigation</p>
					<h2 id='quick-nav-title'>Jump Into the Part of the System You Need</h2>
				</div>
				<div className={styles.quickNavGrid}>
					{navItems.map((item) => (
						<a href={`#${item.id}`} className={styles.quickNavCard} key={item.id}>
							<span className={styles.quickNavIcon}>{item.icon}</span>
							<strong>{item.label}</strong>
							<small>{item.description}</small>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

function HeroVisual() {
	return (
		<div className={styles.heroVisual} aria-hidden='true'>
			<div className={styles.dashboardPanel}>
				<div className={styles.panelTop}>
					<span />
					<span />
					<span />
				</div>
				<div className={styles.searchCard}>
					<span>Search demand</span>
					<strong>Digital marketing guide</strong>
				</div>
				<div className={styles.chartPanel}>
					<div className={styles.chartGrid}>
						<span />
						<span />
						<span />
						<span />
					</div>
					<div className={styles.chartLine} />
					<div className={styles.chartNodeOne} />
					<div className={styles.chartNodeTwo} />
					<div className={styles.chartNodeThree} />
				</div>
				<div className={styles.funnelPanel}>
					<div>SEO</div>
					<div>Content</div>
					<div>CRO</div>
					<div>Growth</div>
				</div>
				<div className={styles.metricPanel}>
					<span>Conversion path</span>
					<strong>Audit request</strong>
				</div>
			</div>
		</div>
	);
}

function PillarSection({ section, index }) {
	const layoutClass = styles[`pillarLayout_${section.layout}`] || '';

	return (
		<section
			id={section.id}
			className={`${styles.pillarSection} ${index % 2 ? styles.pillarSectionAlt : ''}`.trim()}
		>
			<div className={styles.pillarHeader}>
				<div className={styles.pillarIcon} aria-hidden='true'>
					{section.icon}
				</div>
				<div>
					<p className={styles.eyebrow}>{section.kicker}</p>
					<h2>{section.title}</h2>
					<p>{section.intro}</p>
				</div>
			</div>
			<div className={styles.goldRule} />

			<div className={`${styles.pillarContent} ${layoutClass}`.trim()}>
				<div className={styles.copyFlow}>
					{section.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
					{section.links ? (
						<div className={styles.internalLinks}>
							<p>Related resources</p>
							{section.links.map((link) => (
								<Link href={link.href} key={link.href}>
									{link.label}
								</Link>
							))}
						</div>
					) : null}
					{section.textLinks ? (
						<div className={styles.contextualLinks}>
							{section.textLinks.map((link) => (
								<p key={link.href}>
									{link.before || null}
									<Link href={link.href}>{link.label}</Link>
									{link.after || null}
								</p>
							))}
						</div>
					) : null}
				</div>

				<div className={styles.visualColumn}>
					{section.callout ? <ContentCallout {...section.callout} /> : null}
					{section.stats ? (
						<div className={styles.statGrid}>
							{section.stats.map((stat) => (
								<StatCard key={stat.value} {...stat} />
							))}
						</div>
					) : null}
					{section.framework ? (
						<div className={styles.frameworkCard}>
							<p>Framework</p>
							<ol>
								{section.framework.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ol>
						</div>
					) : null}
					{section.cardItems ? (
						<div className={styles.miniCardGrid}>
							{section.cardItems.map((item) => (
								<div className={styles.miniCard} key={item.title}>
									<h3>{item.title}</h3>
									<p>{item.body}</p>
								</div>
							))}
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}

function ChecklistPreview() {
	const checklistItems = ['SEO', 'Website', 'Content', 'PPC', 'Analytics', 'Email', 'CRO'];

	return (
		<section
			id='digital-marketing-checklist'
			className={styles.checklistSection}
			aria-labelledby='checklist-title'
		>
			<div className={styles.checklistCopy}>
				<p className={styles.eyebrow}>Companion resource</p>
				<h2 id='checklist-title'>Download the Digital Marketing Checklist</h2>
				<p>
					Use the checklist to evaluate the parts of your marketing ecosystem
					that most often affect visibility, trust, and conversion performance.
					It is designed to help you spot gaps before you invest more time or
					budget into disconnected tactics.
				</p>
				<ChecklistLeadForm />
			</div>
			<div className={styles.checklistPreviewCard}>
				<div className={styles.previewTop}>
					<span>Marketing readiness</span>
					<strong>Checklist Preview</strong>
				</div>
				<ul>
					{checklistItems.map((item) => (
						<li key={item}>
							<span />
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function FAQAccordion() {
	return (
		<section id='faq' className={styles.faqSection} aria-labelledby='faq-title'>
			<div className={styles.sectionIntro}>
				<p className={styles.eyebrow}>FAQ</p>
				<h2 id='faq-title'>Digital Marketing Guide FAQs</h2>
				<p>
					These answers are written to be schema-ready, easy to scan, and useful
					for readers comparing where to focus next.
				</p>
			</div>
			<div className={styles.faqList}>
				{faqItems.map((item) => (
					<details className={styles.faqItem} key={item.question}>
						<summary>{item.question}</summary>
						<p>{item.answer}</p>
					</details>
				))}
			</div>
		</section>
	);
}

function AuthorBlock() {
	return (
		<section className={styles.authorBlock} aria-label='Author and expertise'>
			<div className={styles.authorMark}>RD</div>
			<div>
				<p className={styles.eyebrow}>Expertise note</p>
				<h2>Written by Rock Digital Agency</h2>
				<p>
					Rock Digital Agency builds websites and digital marketing systems for
					businesses that need clearer strategy, stronger conversion paths, and
					more measurable growth. This guide reflects our approach to connecting
					SEO, content, web design, analytics, and conversion strategy into one
					working ecosystem.
				</p>
			</div>
		</section>
	);
}

export default function DigitalMarketingGuidePage() {
	return (
		<div className={styles.pageShell}>
			<DigitalMarketingGuideProgress />
			<JsonLd data={articleSchema} />
			<JsonLd data={faqSchema} />
			<JsonLd data={breadcrumbSchema} />

			<section className={styles.heroSection}>
				<div className={styles.container}>
					<div className={styles.breadcrumbs} aria-label='Breadcrumb'>
						<Link href='/'>Home</Link>
						<span>/</span>
						<span>Digital Marketing Guide</span>
					</div>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>Digital Marketing Guide</p>
							<h1>Digital Marketing Guide</h1>
							<p className={styles.heroLead}>
								This guide simplifies modern digital marketing without
								unnecessary jargon so you can see how SEO, content, paid media,
								email, branding, analytics, funnels, and conversion strategy work
								together.
							</p>
							<div className={styles.heroMeta}>
								<span>Estimated reading time: 22 minutes</span>
								<span>Last updated: May 6, 2026</span>
							</div>
							<div className={styles.heroActions}>
								<Link href={auditHref} className={styles.primaryButton}>
									Request a Website Audit
								</Link>
								<Link href={checklistLeadHref} className={styles.secondaryButton}>
									Download the Marketing Checklist
								</Link>
							</div>
							<p className={styles.trustMicrocopy}>
								Built for businesses that want measurable growth, not random
								tactics.
							</p>
						</div>
						<HeroVisual />
					</div>
				</div>
			</section>

			<QuickNavigationHub />

			<main className={styles.mainSection}>
				<div className={styles.container}>
					<div className={styles.contentLayout}>
						<StickyTOC />
						<article className={styles.articleBody}>
							<section id='introduction' className={styles.introSection}>
								<div className={styles.sectionIntro}>
									<p className={styles.eyebrow}>Introduction</p>
									<h2>Digital Marketing Is a System, Not a Collection of Tactics</h2>
									<p>
                  <Link className={styles.firstLink} rel="stylesheet" href={digitalMarketingHref}>Modern digital marketing{' '}</Link>
										 can feel unnecessarily complicated.
										There are platforms, dashboards, campaigns, content calendars,
										ranking factors, algorithms, attribution models, and constant
										changes in how people search and buy.
									</p>
								</div>
								<PullQuote>
									<p>
										The businesses that win are rarely the ones chasing every new
										tactic. They are the ones building a clear system.
									</p>
								</PullQuote>
								<div className={styles.copyFlow}>
									<p>
										Digital marketing is the process of using online channels to
										attract the right audience, build trust, guide decisions, and
										turn attention into measurable business outcomes. It includes
										search engine optimization, content marketing, paid
										advertising, social media, email marketing, branding,
										conversion optimization, analytics, and the website
										experience that ties everything together.
									</p>
									<p>
										The challenge is that many businesses treat those pieces as
										separate tasks. One vendor manages ads. Another writes
										content. Someone updates the website. Social media happens
										when there is time. Analytics are checked only when something
										feels wrong. The result is activity, but not always momentum.
									</p>
									<p>
										A stronger approach starts with alignment. Traffic should
										match the offer. Content should support search intent and
										buyer questions. Paid campaigns should send people to pages
										designed for that exact promise. Email should continue the
										conversation. Analytics should show which efforts are moving
										the business forward. Your website should connect all of it
										into a credible, conversion-ready experience.
									</p>
									<p className={styles.highlightStatement}>
										When digital marketing works together, it becomes easier to
										see what to improve, where to invest, and how to grow with
										less guesswork.
									</p>
									<p>
										This guide is designed as a flagship resource for business
										owners, marketing leaders, and operators who want a clearer
										understanding of the digital marketing ecosystem. It explains
										what each major channel does, why it matters, how it connects
										to the rest of the system, and where businesses often lose
										performance.
									</p>
									<p>
										You do not need to memorize every platform detail to make
										better marketing decisions. You need a strategic model for
										understanding how visibility, messaging, trust, conversion,
										and measurement work together.
									</p>
								</div>
								<div className={styles.introStats}>
									<StatCard value='Traffic' label='How the right people find you.' />
									<StatCard value='Trust' label='Why they believe you can help.' />
									<StatCard value='Conversion' label='How interest becomes action.' />
								</div>
								<CTASection
									title='Not sure where your marketing is underperforming?'
									body='A website audit can reveal whether the issue is traffic quality, messaging, user flow, technical performance, or conversion friction.'
									primaryLabel='Request a Website Audit'
									secondaryLabel='Download the Checklist'
								/>
							</section>

							{sections.map((section, index) => (
								<div key={section.id}>
									<PillarSection section={section} index={index} />
									{section.id === 'seo' ? (
										<CTASection
											title='SEO traffic needs a website built to convert it.'
											body='Most businesses do not need more isolated marketing tactics. They need better alignment between search visibility, page structure, messaging, and conversion paths.'
										/>
									) : null}
									{section.id === 'cro' ? (
										<CTASection
											title='Your website may be the highest-leverage marketing channel to fix first.'
											body='Before increasing spend, make sure the experience visitors land on is clear, trustworthy, fast, and built around the next right action.'
										/>
									) : null}
									{index < sections.length - 1 ? <SectionDivider /> : null}
								</div>
							))}

							<ChecklistPreview />
							<AuthorBlock />
							<FAQAccordion />
							<CTASection
								id='conclusion'
								eyebrow='Conclusion'
								title='Digital Marketing Works Best When It Works Together'
								body='The strongest marketing systems align visibility, messaging, trust, conversion, and measurement. When each channel supports the next, growth becomes easier to understand and easier to improve.'
								gradient
							/>
							<p className={styles.finalTrustLine}>
								Built for businesses ready to grow strategically, not chase
								random tactics.
							</p>
						</article>
					</div>
				</div>
			</main>
		</div>
	);
}
