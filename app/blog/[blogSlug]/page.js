import axios from 'axios';
import config from '@/config';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import BlogPostAnimated from './BlogPostAnimated.client';

const baseURL = config.api || 'http://127.0.0.1:1337';

async function fetchPostBySlug(blogSlug) {
	const encodedSlug = encodeURIComponent(blogSlug);
	const { data } = await axios.get(
		`${baseURL}/api/posts?filters[slug][$eq]=${encodedSlug}&filters[publishedAt][$notNull]=true&populate=*`
	);

	return data?.data?.[0] || null;
}

function nodeChildrenToText(children = []) {
	return children
		.map((child) => {
			if (typeof child === 'string') {
				return child;
			}

			if (child?.type === 'text') {
				return child.text || '';
			}

			if (Array.isArray(child?.children)) {
				return nodeChildrenToText(child.children);
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

			const text = nodeChildrenToText(block?.children).trim();

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
							const itemText = nodeChildrenToText(item.children).trim();
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
				case 'paragraph':
				default:
					return text;
			}
		})
		.filter(Boolean)
		.join('\n\n');
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

// Generates paths at build time (optional, for static generation)
export async function generateStaticParams() {
	const { data } = await axios.get(
		`${baseURL}/api/posts?filters[publishedAt][$notNull]=true`
	);

	// Return an array of slugs that will be used so that the page can be built stacically instead of dynamic/ good for seo (page speed)
	return data.data.map((post) => ({
		blogSlug: post.slug,
	}));
}

export async function generateMetadata({ params, searchParams }, parent) {
	// Read route params
	const blogSlug = (await params).blogSlug;

	const post = await fetchPostBySlug(blogSlug);

	if (!post) {
		return {
			title: 'Rock Digital | Blog',
		};
	}

	return {
		title: `Rock Digital | ${post.title}`,
		description: post.short_description,
	};
}

export default async function BlogPostPage({ params, searchParams }) {
	const { blogSlug } = await params;

	try {
		const post = await fetchPostBySlug(blogSlug);

		if (!post) {
			return notFound(); // Triggers Next.js 404 page
		}

		const {
			publishedAt,
			author,
			title,
			body,
			read_time,
			short_description,
			featured_image,
		} = post;

		const featImage = featured_image?.url || '';
		const date = new Date(publishedAt);
		const markdownBody = normalizeMarkdownContent(body);

		return (
			<BlogPostAnimated
				baseURL={baseURL}
				featImage={featImage}
				title={title}
				shortDescription={short_description}
				readTime={read_time}
				author={author}
				dateString={date.toDateString()}
			>
				<ReactMarkdown>{markdownBody}</ReactMarkdown>
			</BlogPostAnimated>
		);
	} catch (error) {
		return (
			<div>
				<p>An error occurred: {error.message}</p>
			</div>
		);
	}
}
