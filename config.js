const config = {
	api:
		process.env.STRAPI_API_URL ||
		process.env.NEXT_PUBLIC_STRAPI_API_URL ||
		'https://rockdigital.agency',
};

export default config;
