import axios from 'axios';
import config from '@/config';
import { getStrapiMediaUrl } from '@/lib/getStrapiMediaUrl';
import {
	formatBlogDate,
	getModifiedDate,
	getOriginalPublishedDate,
	shouldShowUpdatedDate,
} from '@/lib/formatBlogDate';
import JsonLd from '@/components/seo/JsonLd';
import { draftMode } from 'next/headers';
import { notFound, permanentRedirect } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import BlogPostAnimated from './BlogPostAnimated.client';

const baseURL = config.api || 'http://127.0.0.1:1337';
const siteURL = 'https://rockdigital.agency';
export const revalidate = 60;

const getPostQuery = (field, value, includeDraft = false) => {
	const searchParams = new URLSearchParams({
		[`filters[${field}][$eq]`]: value,
		populate: '*',
	});

	if (includeDraft) {
		searchParams.set('status', 'draft');
	} else {
		searchParams.set('filters[publishedAt][$notNull]', 'true');
	}

	return `${baseURL}/api/posts?${searchParams}`;
};

const getStrapiRequestConfig = () => {
	if (!process.env.STRAPI_API_TOKEN) {
		return undefined;
	}

	return {
		headers: {
			Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
		},
	};
};

async function fetchPostBySlug(blogSlug, includeDraft = false) {
	const { data } = await axios.get(
		getPostQuery('slug', blogSlug, includeDraft),
		getStrapiRequestConfig()
	);

	return data?.data?.[0] || null;
}

async function fetchPostByOldSlug(blogSlug, includeDraft = false) {
	const { data } = await axios.get(
		getPostQuery('oldSlug', blogSlug, includeDraft),
		getStrapiRequestConfig()
	);

	return data?.data?.[0] || null;
}

async function resolvePostRequest(blogSlug, includeDraft = false) {
	const post = await fetchPostBySlug(blogSlug, includeDraft);

	if (post) {
		return { post, redirectSlug: null };
	}

	const redirectedPost = await fetchPostByOldSlug(blogSlug, includeDraft);

	if (redirectedPost?.slug) {
		return {
			post: redirectedPost,
			redirectSlug: redirectedPost.slug,
		};
	}

	return { post: null, redirectSlug: null };
}

function escapeMarkdownText(text = '') {
	return text.replace(/\\/g, '\\\\').replace(/([`*_{}[\]()#+\-.!>])/g, '\\$1');
}

function applyTextMarks(text = '', node = {}) {
	let markedText = escapeMarkdownText(text);

	if (node.code) {
		markedText = `\`${text.replace(/`/g, '\\`')}\``;
	}

	if (node.bold) {
		markedText = `**${markedText}**`;
	}

	if (node.italic) {
		markedText = `*${markedText}*`;
	}

	if (node.strikethrough) {
		markedText = `~~${markedText}~~`;
	}

	return markedText;
}

function nodeChildrenToMarkdown(children = []) {
	return children
		.map((child) => {
			if (typeof child === 'string') {
				return escapeMarkdownText(child);
			}

			if (child?.type === 'text') {
				return applyTextMarks(child.text || '', child);
			}

			if (child?.type === 'link') {
				const linkText = nodeChildrenToMarkdown(child.children) || child.url;
				return child.url ? `[${linkText}](${child.url})` : linkText;
			}

			if (Array.isArray(child?.children)) {
				return nodeChildrenToMarkdown(child.children);
			}

			return '';
		})
		.join('');
}

function blocksToMarkdown(blocks = []) {
	return blocks
		.map((block) => {
			if (typeof block === 'string') {
				return block;
			}

			const text = nodeChildrenToMarkdown(block?.children).trim();

			switch (block?.type) {
				case 'heading': {
					const level = Number(block.level) || 2;
					return `${'#'.repeat(Math.min(Math.max(level, 1), 6))} ${text}`;
				}
				case 'quote':
					return text ? `> ${text}` : '';
				case 'list':
					return (block.children || [])
						.map((item, index) => {
							const itemText = nodeChildrenToMarkdown(item.children).trim();
							if (!itemText) {
								return '';
							}

							return block.format === 'ordered'
								? `${index + 1}. ${itemText}`
								: `- ${itemText}`;
						})
						.filter(Boolean)
						.join('\n');
				case 'code':
					return text ? `\`\`\`\n${text}\n\`\`\`` : '';
				case 'image': {
					const image = block.image || {};
					const imageUrl = getStrapiMediaUrl(image);
					const altText = escapeMarkdownText(
						image.alternativeText || image.caption || ''
					);
					return imageUrl ? `![${altText}](${imageUrl})` : '';
				}
				case 'paragraph':
				default:
					return text;
			}
		})
		.filter(Boolean)
		.join('\n\n');
}

function getSafeLinkTarget(href = '') {
	if (!href) {
		return '_self';
	}

	return href.startsWith('/') || href.startsWith('#') ? '_self' : '_blank';
}

function MarkdownLink({ href = '', children }) {
	const target = getSafeLinkTarget(href);

	return (
		<a
			href={href}
			target={target}
			rel={target === '_blank' ? 'noopener noreferrer' : undefined}
		>
			{children}
		</a>
	);
}

function MarkdownImage({ src = '', alt = '' }) {
	return <img src={getStrapiMediaUrl(src)} alt={alt} loading='lazy' />;
}

function extractTextDeep(value) {
	if (typeof value === 'string') {
		return value;
	}

	if (Array.isArray(value)) {
		return value.map(extractTextDeep).filter(Boolean).join('\n\n');
	}

	if (!value || typeof value !== 'object') {
		return '';
	}

	const directText =
		typeof value.text === 'string'
			? value.text
			: typeof value.content === 'string'
				? value.content
				: '';

	const nestedText = Object.entries(value)
		.filter(([key]) => !['text', 'content'].includes(key))
		.map(([, nestedValue]) => extractTextDeep(nestedValue))
		.filter(Boolean)
		.join('\n\n');

	return [directText, nestedText].filter(Boolean).join('\n\n');
}

function normalizeMarkdownContent(content) {
	if (typeof content === 'string') {
		return content;
	}

	if (Array.isArray(content)) {
		const blockContent = blocksToMarkdown(content);
		return blockContent || extractTextDeep(content);
	}

	if (content && typeof content === 'object') {
		if (typeof content.markdown === 'string') {
			return content.markdown;
		}

		if (Array.isArray(content.blocks)) {
			const blockContent = blocksToMarkdown(content.blocks);
			return blockContent || extractTextDeep(content.blocks);
		}

		return extractTextDeep(content);
	}

	return '';
}

function buildBlogPostSchema({
	post,
	featImage,
	blogSlug,
	publishedDate,
	modifiedDate,
}) {
	const pageUrl = `${siteURL}/blog/${post.slug || blogSlug}`;

	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.short_description,
		mainEntityOfPage: pageUrl,
		url: pageUrl,
		datePublished: publishedDate,
		dateModified: modifiedDate || publishedDate,
		image: featImage || undefined,
		author: {
			'@type': post.author ? 'Person' : 'Organization',
			name: post.author || 'Rock Digital',
		},
		publisher: {
			'@type': 'Organization',
			name: 'Rock Digital',
			url: siteURL,
		},
	};
}

function getCategoryValue(category) {
	if (typeof category === 'string') {
		return category.trim().toLowerCase();
	}

	const attributes = category?.attributes || {};
	return (
		category?.name ||
		category?.title ||
		category?.label ||
		category?.slug ||
		attributes?.name ||
		attributes?.title ||
		attributes?.label ||
		attributes?.slug ||
		''
	)
		.trim()
		.toLowerCase();
}

function normalizeRelatedPost(post = {}) {
	return {
		id: post.id,
		slug: post.slug,
		title: post.title,
		short_description: post.short_description,
		featured_image: post.featured_image,
		publishedAt: post.publishedAt,
		createdAt: post.createdAt,
		originalPublishedAt: post.originalPublishedAt,
		category: post.category,
	};
}

async function fetchRelatedPosts(currentPost) {
	try {
		const { data } = await axios.get(
			`${baseURL}/api/posts?filters[publishedAt][$notNull]=true&populate=*`,
			getStrapiRequestConfig()
		);
		const posts = Array.isArray(data?.data) ? data.data : [];
		const currentCategory = getCategoryValue(currentPost.category);
		const currentSlug = currentPost.slug;
		const currentId = currentPost.id;
		const otherPosts = posts
			.filter((post) => post.id !== currentId && post.slug !== currentSlug)
			.reverse();

		const categoryMatches = currentCategory
			? otherPosts.filter(
					(post) => getCategoryValue(post.category) === currentCategory
				)
			: [];
		const fallbackPosts = otherPosts.filter(
			(post) => !categoryMatches.some((match) => match.id === post.id)
		);

		return [...categoryMatches, ...fallbackPosts]
			.slice(0, 3)
			.map(normalizeRelatedPost);
	} catch (error) {
		console.warn(`Failed to fetch related blog posts: ${error.message}`);
		return [];
	}
}

// Generates paths at build time (optional, for static generation)
export async function generateStaticParams() {
	try {
		const { data } = await axios.get(
			`${baseURL}/api/posts?filters[publishedAt][$notNull]=true`
		);

		// Return slugs that can be pre-rendered when Strapi is reachable.
		return data.data.map((post) => ({
			blogSlug: post.slug,
		}));
	} catch (error) {
		console.warn(`Failed to fetch blog slugs for static params: ${error.message}`);
		return [];
	}
}

export async function generateMetadata({ params }) {
	// Read route params
	const blogSlug = (await params).blogSlug;
	const { isEnabled: isDraftMode } = await draftMode();

	const { post } = await resolvePostRequest(blogSlug, isDraftMode);

	if (!post) {
		return {
			title: {
				absolute: 'Web Design, SEO, and Marketing Insights',
			},
			description:
				'Read Rock Digital articles on web design, SEO, website performance, digital marketing strategy, and practical tips for growing your business online.',
		};
	}

	return {
		title: {
			absolute: post.title,
		},
		description: post.short_description,
	};
}

export default async function BlogPostPage({ params, searchParams }) {
	const { blogSlug } = await params;
	const { isEnabled: isDraftMode } = await draftMode();

	try {
		const { post, redirectSlug } = await resolvePostRequest(blogSlug, isDraftMode);

		if (redirectSlug && redirectSlug !== blogSlug) {
			permanentRedirect(`/blog/${redirectSlug}`);
		}

		if (!post) {
			return notFound(); // Triggers Next.js 404 page
		}

		const {
			author,
			title,
			body,
			read_time,
			short_description,
			featured_image,
			category,
		} = post;

		const featImage = getStrapiMediaUrl(featured_image);
		const publishedDate = getOriginalPublishedDate(post);
		const modifiedDate = getModifiedDate(post);
		const updatedDateString = shouldShowUpdatedDate(publishedDate, modifiedDate)
			? formatBlogDate(modifiedDate)
			: '';
		const blogPostSchema = buildBlogPostSchema({
			post,
			featImage,
			blogSlug,
			publishedDate,
			modifiedDate,
		});
		const markdownBody = normalizeMarkdownContent(body);
		const relatedPosts = await fetchRelatedPosts(post);

		return (
			<>
				<JsonLd data={blogPostSchema} />
				<BlogPostAnimated
					featImage={featImage}
					title={title}
					shortDescription={short_description}
					readTime={read_time}
					author={author}
					publishedDateString={formatBlogDate(publishedDate)}
					updatedDateString={updatedDateString}
					category={category}
					slug={post.slug || blogSlug}
					relatedPosts={relatedPosts}
				>
					<ReactMarkdown
						components={{
							a: MarkdownLink,
							img: MarkdownImage,
						}}
					>
						{markdownBody}
					</ReactMarkdown>
				</BlogPostAnimated>
			</>
		);
	} catch (error) {
		return (
			<div>
				<p>An error occurred: {error.message}</p>
			</div>
		);
	}
}
