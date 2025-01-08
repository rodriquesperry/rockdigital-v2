/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rockdigital.agency',
				pathname: '/media/**',
			},
			{
				protocol: 'https',
				hostname: 'rockdigital.agency',
				pathname: '/dashboard/uploads/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
			},
		],
	},
};

module.exports = nextConfig;
