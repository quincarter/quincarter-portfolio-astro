import {
	GradientText,
	HeroAvatar,
	HeroSocial,
	Section,
} from 'astro-boilerplate-components';
import {
	Fragment as _Fragment,
	jsx as _jsx,
	jsxs as _jsxs,
} from 'react/jsx-runtime';
import { MAIN_HERO_DATA } from '@/pages/page-data/main-hero';
import styles from '../styles/hero.module.css';

const Hero = () =>
	_jsx(Section, {
		children: _jsx(HeroAvatar, {
			title: _jsxs(_Fragment, {
				children: [
					"Hi there, I'm ",
					_jsx(GradientText, { children: 'Quin Carter!' }),
					' \uD83D\uDC4B',
				],
			}),
			description: _jsxs('p', {
				className: styles.mainSchpeel,
				children: [
					MAIN_HERO_DATA.description,
					_jsx('br', {}),
					_jsx('br', {}),
					'I have focused on many different technologies over the course of my career, but Frontend Engineering is by far my favorite technology to work on. I am a JavaScript/TypeScript Developer first and foremost, but I have worked on everything under the sun when it comes to engineering.',
				],
			}),
			avatar: _jsx('img', {
				className: 'w-64',
				src: '/assets/images/avatar.png',
				alt: 'Avatar image',
				loading: 'lazy',
			}),
			socialButtons: _jsxs(_Fragment, {
				children: [
					_jsx('a', {
						href: 'https://www.linkedin.com/in/quincarter/',
						target: '_blank',
						children: _jsx(HeroSocial, {
							src: '/assets/images/linkedin-icon.png',
							alt: 'Linkedin icon',
						}),
					}),
					_jsx('a', {
						href: 'https://app.enhancv.com/share/636d9ae4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic',
						target: '_blank',
						children: _jsx(HeroSocial, {
							src: '/assets/images/resume-logo.png',
							alt: 'Resume icon',
						}),
					}),
					_jsx('a', {
						href: 'https://gitlab.com/users/quincarter/projects',
						target: '_blank',
						children: _jsx(HeroSocial, {
							src: '/assets/images/gitlab-icon.png',
							alt: 'Gitlab icon',
						}),
					}),
					_jsx('a', {
						href: 'https://github.com/quincarter',
						target: '_blank',
						children: _jsx(HeroSocial, {
							src: '/assets/images/github-icon.png',
							alt: 'github icon',
						}),
					}),
					_jsx('a', {
						href: 'https://medium.com/@quincarter',
						target: '_blank',
						children: _jsx(HeroSocial, {
							src: '/assets/images/medium-logo.webp',
							alt: 'Medium icon',
						}),
					}),
					_jsx('a', {
						href: 'https://discordapp.com/users/266934198055600150',
						target: '_blank',
						children: _jsx(HeroSocial, {
							src: '/assets/images/discord-logo.webp',
							alt: 'discord icon',
						}),
					}),
				],
			}),
		}),
	});

export { Hero };
