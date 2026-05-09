import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import '../styles/bottom-section.css';
import { GradientText, Section } from 'astro-boilerplate-components';

const CTA = () =>
	_jsx(Section, {
		children: _jsxs('div', {
			className: 'bottom-section',
			children: [
				_jsxs('div', {
					className: 'text-content',
					children: [
						_jsxs('h1', {
							children: [
								'Wanna ',
								_jsx(GradientText, { children: 'chat?' }),
								' Reach out and I would be happy to speak with you!',
							],
						}),
						_jsx('p', {
							children:
								'I am always striving to learn more and connect with other like-minded devs. If you just want to reach out and chat, all my socials are above!',
						}),
					],
				}),
				_jsx('img', {
					src: '/assets/images/call-me-maybe.png',
					alt: 'call me maybe?',
				}),
			],
		}),
	});

export { CTA };
