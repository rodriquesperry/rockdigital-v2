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
		],
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
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
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
