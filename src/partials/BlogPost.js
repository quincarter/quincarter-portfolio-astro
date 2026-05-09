import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { AppConfig } from '@/utils/AppConfig';

const BlogPost = (props) =>
	_jsxs(Section, {
		children: [
			_jsx(PostHeader, {
				content: props.frontmatter,
				author: AppConfig.author,
			}),
			_jsx(PostContent, {
				content: props.frontmatter,
				children: props.children,
			}),
		],
	});

export { BlogPost };
