const getFrameAncestors = () => {
	const strapiOrigin =
		process.env.STRAPI_ADMIN_ORIGIN ||
		process.env.STRAPI_API_URL ||
		process.env.NEXT_PUBLIC_STRAPI_API_URL ||
		'http://localhost:1337';

	return `'self' ${strapiOrigin.replace(/\/$/, '')}`;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rockdigital.agency',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'rockdigital-v2.vercel.app',
				pathname: '/**',
			},
      {
				protocol: 'https',
				hostname: 'rock-digital-blog-images.sfo3.cdn.digitaloceanspaces.com',
				pathname: '/**',
			}
		],
	},
	async redirects() {
		return [
			{
				source: '/website-maintenance',
				destination: '/website-optimization',
				permanent: true,
			},
		];
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Content-Security-Policy',
						value: `frame-ancestors ${getFrameAncestors()};`,
					},
					{
						key: 'Cross-Origin-Opener-Policy',
						value: 'same-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
		];
	},
	eslint: {
		// Disables ESLint during builds
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
