import { Section } from 'astro-boilerplate-components';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const Footer = () =>
	_jsx(Section, {
		children: _jsxs('div', {
			className: 'text-sm text-gray-200',
			children: [
				'\u00A9 Copyright ',
				new Date().getFullYear(),
				' by Quin Carter.',
			],
		}),
	});

export { Footer };
