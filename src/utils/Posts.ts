type DateSortablePost = {
	frontmatter?: {
		pubDate?: string | Date;
	};
};

const getPubDateValue = (post: DateSortablePost) => {
	const parsedDate = new Date(post?.frontmatter?.pubDate ?? '').valueOf();
	return Number.isNaN(parsedDate) ? 0 : parsedDate;
};

export const sortByDate = <T extends DateSortablePost>(posts: T[]) => {
	return [...posts].sort((a, b) => getPubDateValue(b) - getPubDateValue(a));
};
