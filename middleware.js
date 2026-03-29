import { NextResponse } from 'next/server';

const getLookupUrl = (request, blogSlug) => {
	const lookupUrl = new URL('/api/posts', request.url);

	lookupUrl.searchParams.set('filters[oldSlug][$eq]', blogSlug);
	lookupUrl.searchParams.set('filters[publishedAt][$notNull]', 'true');
	lookupUrl.searchParams.set('fields[0]', 'slug');

	return lookupUrl;
};

export async function middleware(request) {
	const segments = request.nextUrl.pathname.split('/').filter(Boolean);

	if (segments.length !== 2 || segments[0] !== 'blog') {
		return NextResponse.next();
	}

	const blogSlug = decodeURIComponent(segments[1]);

	try {
		const response = await fetch(getLookupUrl(request, blogSlug), {
			headers: {
				accept: 'application/json',
			},
			cache: 'no-store',
		});

		if (!response.ok) {
			return NextResponse.next();
		}

		const payload = await response.json();
		const redirectSlug = payload?.data?.[0]?.slug;

		if (!redirectSlug || redirectSlug === blogSlug) {
			return NextResponse.next();
		}

		return NextResponse.redirect(
			new URL(`/blog/${redirectSlug}`, request.url),
			301,
		);
	} catch {
		return NextResponse.next();
	}
}

export const config = {
	matcher: ['/blog/:blogSlug'],
};
