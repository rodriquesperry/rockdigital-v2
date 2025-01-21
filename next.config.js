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
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'rockdigital-v2-qmvqsz0hj-rodriques-projects.vercel.app',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
