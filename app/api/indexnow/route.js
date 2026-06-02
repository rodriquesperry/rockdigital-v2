import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { getSiteOrigin, normalizeIndexNowUrls, submitToIndexNow } from '@/lib/indexnow';

const BLOG_MODELS = new Set(['post', 'posts', 'blog', 'blog-post', 'blog-posts']);
const STRAPI_TEST_EVENTS = new Set(['trigger-test', 'test']);

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

const getContentNodes = (body = {}) =>
	[
		body,
		body.entry,
		body.entry?.attributes,
		body.data,
		body.data?.attributes,
		body.result,
		body.result?.attributes,
		body.entity,
		body.entity?.attributes,
		body.payload,
		body.payload?.entry,
		body.payload?.entry?.attributes,
		body.payload?.data,
		body.payload?.data?.attributes,
		body.params?.data,
	].filter((node) => node && typeof node === 'object');

const getFirstString = (values = []) =>
	values.find((value) => typeof value === 'string' && value.trim())?.trim() || '';

const getModelName = (body = {}) =>
	String(
		getFirstString([
			body.model,
			body.uid,
			body.contentType,
			body.contentType?.uid,
			body.entry?.contentType,
			body.entry?.contentType?.uid,
			body.data?.contentType,
			body.data?.contentType?.uid,
			body.result?.contentType,
			body.result?.contentType?.uid,
		])
	)
		.split('.')
		.at(-1)
		.toLowerCase();

const getSlugUrl = (body = {}) => {
	const slug = getFirstString(getContentNodes(body).map((node) => node.slug));

	if (!slug) {
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
	const contentNodes = getContentNodes(body);
	const explicitUrls = [
		...toUrlArray(body.urls),
		...toUrlArray(body.urlList),
		...contentNodes.flatMap((node) => [node.url, node.path, node.canonicalUrl]),
		getSlugUrl(body),
	].filter(Boolean);

	return normalizeIndexNowUrls(explicitUrls);
};

const isStrapiTestPayload = (body = {}) => {
	const event = String(body.event || body.action || '').toLowerCase();

	return (
		STRAPI_TEST_EVENTS.has(event) ||
		(event.includes('test') && !body.entry && !body.data && !body.result)
	);
};

const isStrapiPayload = (body = {}) =>
	Boolean(
		body.event ||
			body.model ||
			body.uid ||
			body.contentType ||
			body.entry ||
			body.data ||
			body.result
	);

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
			if (isStrapiTestPayload(body) || isStrapiPayload(body)) {
				return NextResponse.json(
					{
						success: true,
						skipped: true,
						message:
							'Webhook received, but no publishable Rock Digital URL was included in the payload.',
					},
					{ status: 202 }
				);
			}

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
