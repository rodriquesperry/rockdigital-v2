import config from '@/config';

export default function robots() {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/private/', '/admin', '/portfolio', '/privacy', '/about']
		},
		sitemap: `${config.api}/sitemap.xml`,
	};
}
