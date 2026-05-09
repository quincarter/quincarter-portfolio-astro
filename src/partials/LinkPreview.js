import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import '../styles/link-preview.css';
const LinkPreview = (props) => {
	if (props.title && props.href) {
		return _jsxs('a', {
			className: 'fragment',
			href: props.href,
			target: props.target || '_blank',
			children: [
				_jsx('img', { src: props.img, alt: props.imgAlt || props.title }),
				_jsxs('div', {
					className: 'link-content',
					children: [
						_jsx('h3', { children: props.title }),
						_jsx('p', { className: 'text', children: props.description }),
					],
				}),
			],
		});
	}
	return '';
};

export { LinkPreview };
export default LinkPreview;
