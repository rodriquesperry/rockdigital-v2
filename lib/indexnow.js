const SITE_ORIGIN = 'https://rockdigital.agency';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

const trimTrailingSlash = (value) => value.replace(/\/$/, '');

export const getIndexNowKey = () => process.env.INDEXNOW_KEY?.trim() || '';

export const getSiteOrigin = () =>
	trimTrailingSlash(process.env.SITE_URL?.trim() || SITE_ORIGIN);

export const normalizeIndexNowUrls = (urls = []) => {
	const siteOrigin = getSiteOrigin();
	const normalizedUrls = urls
		.map((url) => {
			if (typeof url !== 'string' || !url.trim()) {
				return null;
			}

			try {
				const parsedUrl = new URL(url.trim(), siteOrigin);

				if (parsedUrl.origin !== siteOrigin) {
					return null;
				}

				parsedUrl.hash = '';
				return parsedUrl.toString();
			} catch {
				return null;
			}
		})
		.filter(Boolean);

	return [...new Set(normalizedUrls)];
};

export async function submitToIndexNow(urls = []) {
	const key = getIndexNowKey();
	const siteOrigin = getSiteOrigin();
	const urlList = normalizeIndexNowUrls(urls);

	if (!key) {
		throw new Error('INDEXNOW_KEY is not configured.');
	}

	if (urlList.length === 0) {
		throw new Error('No valid URLs were provided for IndexNow submission.');
	}

	const response = await fetch(INDEXNOW_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			host: new URL(siteOrigin).host,
			key,
			keyLocation: `${siteOrigin}/${key}.txt`,
			urlList,
		}),
		cache: 'no-store',
	});

	if (!response.ok) {
		const message = await response.text().catch(() => '');
		throw new Error(
			`IndexNow submission failed with ${response.status}${
				message ? `: ${message}` : ''
			}`
		);
	}

	return {
		status: response.status,
		urls: urlList,
	};
}
