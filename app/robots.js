import config from '@/config';

export default function robots() {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/private/', '/admin', '/portfolio', '/privacy', '/landing-page'],
		},
		sitemap: `${config.api}/sitemap.xml`,
	};
}
