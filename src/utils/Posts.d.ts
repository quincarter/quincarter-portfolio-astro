type DateSortablePost = {
	frontmatter?: {
		pubDate?: string | Date;
	};
};
export declare const sortByDate: <T extends DateSortablePost>(
	posts: T[],
) => T[];
