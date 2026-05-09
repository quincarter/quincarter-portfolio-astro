const getPubDateValue = (post) => {
	const parsedDate = new Date(post?.frontmatter?.pubDate ?? '').valueOf();
	return Number.isNaN(parsedDate) ? 0 : parsedDate;
};
export const sortByDate = (posts) => {
	return [...posts].sort((a, b) => getPubDateValue(b) - getPubDateValue(a));
};
