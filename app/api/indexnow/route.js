import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { getSiteOrigin, normalizeIndexNowUrls, submitToIndexNow } from '@/lib/indexnow';

const BLOG_MODELS = new Set(['post', 'posts', 'blog', 'blog-post', 'blog-posts']);

const getAuthToken = (request, body) => {
	const authHeader = request.headers.get('authorization') || '';

	if (authHeader.toLowerCase().startsWith('bearer ')) {
		return authHeader.slice(7).trim();
	}

	return (
		request.headers.get('x-indexnow-secret') ||
		body?.secret ||
		new URL(request.url).searchParams.get('secret') ||
		''
	);
};

const isAuthorized = (request, body) => {
	const secret = process.env.INDEXNOW_WEBHOOK_SECRET?.trim();

	if (!secret) {
		return true;
	}

	return getAuthToken(request, body) === secret;
};

const getModelName = (body = {}) =>
	String(body.model || body.uid || body.contentType || body.entry?.contentType || '')
		.split('.')
		.at(-1)
		.toLowerCase();

const getSlugUrl = (body = {}) => {
	const slug = body.entry?.slug || body.slug;

	if (typeof slug !== 'string' || !slug.trim()) {
		return null;
	}

	const modelName = getModelName(body);
	const normalizedSlug = slug.replace(/^\/+/, '');

	if (BLOG_MODELS.has(modelName)) {
		return `/blog/${normalizedSlug}`;
	}

	return `/${normalizedSlug}`;
};

const toUrlArray = (value) => {
	if (Array.isArray(value)) {
		return value;
	}

	return value ? [value] : [];
};

const getWebhookUrls = (body = {}) => {
	const explicitUrls = [
		...toUrlArray(body.urls),
		...toUrlArray(body.urlList),
		body.url,
		body.path,
		body.entry?.url,
		body.entry?.path,
		getSlugUrl(body),
	].filter(Boolean);

	return normalizeIndexNowUrls(explicitUrls);
};

const getRevalidationPaths = (urls = []) => {
	const siteOrigin = getSiteOrigin();

	return urls.map((url) => {
		const parsedUrl = new URL(url, siteOrigin);
		return parsedUrl.pathname;
	});
};

export async function POST(request) {
	try {
		const body = await request.json().catch(() => ({}));

		if (!isAuthorized(request, body)) {
			return NextResponse.json({ error: 'Invalid webhook token.' }, { status: 401 });
		}

		const urls = getWebhookUrls(body);

		if (urls.length === 0) {
			return NextResponse.json(
				{ error: 'Provide one or more Rock Digital URLs in `urls`.' },
				{ status: 400 }
			);
		}

		const revalidatedPaths = getRevalidationPaths(urls);
		revalidatedPaths.forEach((path) => revalidatePath(path));

		const result = await submitToIndexNow(urls);

		return NextResponse.json({
			success: true,
			submittedUrls: result.urls,
			revalidatedPaths,
			indexNowStatus: result.status,
		});
	} catch (error) {
		console.error('indexnow route error:', error);

		return NextResponse.json(
			{
				success: false,
				error: error?.message || 'Failed to submit URLs to IndexNow.',
			},
			{ status: 500 }
		);
	}
}
