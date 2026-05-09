import type { IFrontmatter } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

type IBlogPostProps = {
	frontmatter: IFrontmatter;
	children: ReactNode;
};
declare const BlogPost: (
	props: IBlogPostProps,
) => import('react/jsx-runtime').JSX.Element;

export { BlogPost };
