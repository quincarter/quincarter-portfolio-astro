import {
	Fragment as _Fragment,
	jsx as _jsx,
	jsxs as _jsxs,
} from 'react/jsx-runtime';
import '../styles/projects.css';
import {
	GradientText,
	Project,
	Section,
	Tags,
} from 'astro-boilerplate-components';
import { PROJECT_DATA } from '@/pages/page-data/projects';
import styles from '../styles/project-list.module.css';

const ProjectList = () =>
	_jsx(Section, {
		title: _jsxs(_Fragment, {
			children: [
				'Recent ',
				_jsx(GradientText, { children: 'Projects' }),
				_jsx('br', {}),
				_jsx('p', {
					className: styles.titleMetadata,
					children:
						'Since I work at a bank, everything is highly regulated and private. So I will not be able to give links to my current work.',
				}),
			],
		}),
		children: _jsx('div', {
			className: 'projects flex flex-col gap-6',
			children: PROJECT_DATA.map((project) =>
				_jsx(
					Project,
					{
						name: project.name,
						description: project.description,
						link: project.link || '/',
						img: {
							src: project.image.src,
							alt: project.image.alt,
						},
						category: _jsx(_Fragment, {
							children: project.category.map((category) =>
								_jsx(
									Tags,
									{ color: category.color, children: category.name },
									category.name,
								),
							),
						}),
					},
					project.name,
				),
			),
		}),
	});

export { ProjectList };
