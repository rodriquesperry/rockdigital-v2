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

export function getOriginalPublishedDate(post = {}) {
	return post.originalPublishedAt || post.publishedAt || post.createdAt || '';
}

export function getModifiedDate(post = {}) {
	return post.updatedAt || post.publishedAt || post.createdAt || '';
}

export function shouldShowUpdatedDate(publishedDate, modifiedDate) {
	if (!publishedDate || !modifiedDate) {
		return false;
	}

	return formatBlogDate(publishedDate) !== formatBlogDate(modifiedDate);
}
