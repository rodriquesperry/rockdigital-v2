const blogDateFormatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: '2-digit',
});

export function formatBlogDate(dateValue) {
	if (!dateValue) {
		return '';
	}

	const date = new Date(dateValue);

	if (Number.isNaN(date.getTime())) {
		return '';
	}

	const parts = blogDateFormatter
		.formatToParts(date)
		.reduce((acc, part) => ({ ...acc, [part.type]: part.value }), {});

	return `${parts.day} ${parts.month} ${parts.year}`;
}

function getPostDateValue(post = {}, fields = []) {
	const attributes = post.attributes || {};

	for (const field of fields) {
		if (post[field]) {
			return post[field];
		}

		if (attributes[field]) {
			return attributes[field];
		}
	}

	return '';
}

function getLatestDateValue(dateValues = []) {
	return dateValues
		.map((dateValue) => {
			const date = new Date(dateValue);
			return Number.isNaN(date.getTime()) ? null : { date, dateValue };
		})
		.filter(Boolean)
		.sort((a, b) => b.date.getTime() - a.date.getTime())[0]?.dateValue || '';
}

export function getOriginalPublishedDate(post = {}) {
	return getPostDateValue(post, [
		'originalPublishedAt',
		'firstPublishedAt',
		'datePublished',
		'publishedDate',
		'createdAt',
		'publishedAt',
	]);
}

export function getModifiedDate(post = {}) {
	const attributes = post.attributes || {};

	return getLatestDateValue([
		post.dateModified,
		attributes.dateModified,
		post.modifiedAt,
		attributes.modifiedAt,
		post.updatedAt,
		attributes.updatedAt,
		post.publishedAt,
		attributes.publishedAt,
		post.createdAt,
		attributes.createdAt,
	]);
}

export function shouldShowUpdatedDate(publishedDate, modifiedDate) {
	if (!publishedDate || !modifiedDate) {
		return false;
	}

	return formatBlogDate(publishedDate) !== formatBlogDate(modifiedDate);
}
