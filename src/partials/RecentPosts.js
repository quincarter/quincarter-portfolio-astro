import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import '../styles/blog-gallery.css';
import {
	BlogGallery,
	GradientText,
	Section,
} from 'astro-boilerplate-components';

const RecentPosts = (props) =>
	_jsx(Section, {
		title: _jsxs('div', {
			className: 'flex items-baseline justify-between',
			children: [
				_jsxs('div', {
					children: ['Recent ', _jsx(GradientText, { children: 'Posts' })],
				}),
				_jsx('div', {
					className: 'text-sm',
					children: _jsx('a', {
						href: '/posts/',
						children: 'View all Posts \u2192',
					}),
				}),
			],
		}),
		children: _jsx('div', {
			className: 'blog-gallery',
			children: _jsx(BlogGallery, { postList: props.postList }),
		}),
	});

export { RecentPosts };
