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
				protocol: 'http',
				hostname: '127.0.0.1:1337',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'rockdigital-v2.vercel.app',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
