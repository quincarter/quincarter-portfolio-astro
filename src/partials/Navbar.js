import {
	Logo,
	NavbarTwoColumns,
	NavMenu,
	NavMenuItem,
	Section,
} from 'astro-boilerplate-components';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const Navbar = () =>
	_jsx(Section, {
		children: _jsxs(NavbarTwoColumns, {
			children: [
				_jsx('a', {
					href: '/',
					children: _jsx(Logo, {
						icon: _jsx('img', {
							src: '/assets/images/hey-sunglasses.png',
							alt: 'hey-sunglasses image',
							className: 'h-20',
							loading: 'lazy',
						}),
						name: 'Quin Carter',
					}),
				}),
				_jsxs(NavMenu, {
					children: [
						_jsx(NavMenuItem, {
							href: '/posts/',
							children: 'Technical Articles',
						}),
						_jsx(NavMenuItem, {
							href: 'https://github.com/quincarter',
							target: '_blank',
							children: 'GitHub',
						}),
						_jsx(NavMenuItem, {
							href: 'https://app.enhancv.com/share/636d9ae4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic',
							target: '_blank',
							children: 'Resume',
						}),
						_jsx(NavMenuItem, {
							href: 'https://discordapp.com/users/266934198055600150',
							target: '_blank',
							children: 'Discord',
						}),
					],
				}),
			],
		}),
	});

export { Navbar };
