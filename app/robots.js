import config from '@/config';

export default function robots() {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			// disallow: ['/private/', '/admin', '/portfolio', '/privacy']
		},
		sitemap: `${config.api}/sitemap.xml`,
	};
}
