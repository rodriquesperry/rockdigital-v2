const fallbackMediaOrigin = 'https://rockdigital.agency';

const getMediaBaseUrl = () =>
	process.env.NEXT_PUBLIC_STRAPI_API_URL ||
	process.env.STRAPI_API_URL ||
	fallbackMediaOrigin;

export const getStrapiMediaPath = (media) =>
	media?.url || media?.data?.attributes?.url || '';

export const getStrapiMediaUrl = (media) => {
	const url = typeof media === 'string' ? media : getStrapiMediaPath(media);

	if (!url) {
		return '';
	}

	if (url.startsWith('http://') || url.startsWith('https://')) {
		return url;
	}

	return `${getMediaBaseUrl()}${url.startsWith('/') ? url : `/${url}`}`;
};

export const getBlogImageFallbackUrl = () => '/web-app-manifest-512x512.png';
