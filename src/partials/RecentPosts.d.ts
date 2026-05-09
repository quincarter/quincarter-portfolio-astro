import '../styles/blog-gallery.css';
import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';

type IRecentPostsProps = {
	postList: MarkdownInstance<IFrontmatter>[];
};
declare const RecentPosts: (
	props: IRecentPostsProps,
) => import('react/jsx-runtime').JSX.Element;

export { RecentPosts };
