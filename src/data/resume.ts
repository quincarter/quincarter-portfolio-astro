export interface ResumeContactLink {
	label: string;
	href: string;
	icon: 'email' | 'linkedin' | 'site' | 'github';
}

export interface ResumeSkillGroup {
	category: string;
	skills: string[];
}

export interface ResumeEntry {
	org: string;
	orgUrl?: string;
	title: string;
	dates: string;
	location?: string;
	bullets: string[];
}

export interface ResumeCompany {
	name: string;
	roles: ResumeEntry[];
}

export interface ResumeEducation {
	school: string;
	credential: string;
	dates: string;
}

export interface ResumeEarlierRole {
	org: string;
	title: string;
	dates: string;
	note: string;
}

export interface ResumeTalk {
	venue: string;
	title: string;
	dates: string;
	note?: string;
}

export interface ResumeSpeaking {
	intro: string;
	talks: ResumeTalk[];
	writingNote: string;
}

export const RESUME = {
	name: 'Quin Carter',
	title: 'Lead Software Engineer at Capital One',
	tagline: 'Developer Experience · Frontend Architecture · Speaker',
	location: 'Greater Richmond Region, VA',
	updated: 'September 2026',
	contact: [
		{
			label: 'quin.carter@gmail.com',
			href: 'mailto:quin.carter@gmail.com',
			icon: 'email',
		},
		{
			label: 'linkedin.com/in/quincarter',
			href: 'https://www.linkedin.com/in/quincarter/',
			icon: 'linkedin',
		},
		{ label: 'quincarter.com', href: 'https://quincarter.com', icon: 'site' },
		{
			label: 'github.com/quincarter',
			href: 'https://github.com/quincarter',
			icon: 'github',
		},
	] satisfies ResumeContactLink[],

	summary: `Lead Software Engineer at Capital One with a track record of leading teams across multiple lines of business — from Financial Services, to standing up a brand-new team and architecture practice in Card Tech (adopted enterprise-wide as ASPIRE), to my current work in Developer Experience. I now build the standards Capital One writes software against: language tooling, DevContainers, and Standard Development Environments, serving as the JavaScript/TypeScript tech lead for our language excellence organization alongside counterparts in Python, Go, and Java. My background is deep in frontend architecture — Lit Element, Angular, React, Vue, and micro-frontends — including being the first engineer at Capital One to ship WebAssembly and Web Workers in a customer-facing production frontend. I care deeply about application architecture: a system that isn't planned properly becomes a system nobody can maintain.`,

	skillGroups: [
		{
			category: 'Languages',
			skills: [
				'JavaScript',
				'TypeScript',
				'Java',
				'Python',
				'Go',
				'PHP',
				'C++',
				'Objective-C',
			],
		},
		{
			category: 'Frontend',
			skills: [
				'Lit Element',
				'Web Components',
				'Angular',
				'React',
				'Vue',
				'WebAssembly (WASM)',
				'Web Workers / Service Workers',
				'Tailwind CSS',
				'SCSS / LESS',
			],
		},
		{
			category: 'Backend & APIs',
			skills: [
				'Node.js / Express',
				'GraphQL',
				'Java / Spring Boot',
				'Play Framework',
				'Laravel',
			],
		},
		{
			category: 'Cross-Platform',
			skills: ['React Native', 'Ionic', 'Vue Native'],
		},
		{
			category: 'Practices & Tooling',
			skills: [
				'Micro-frontends',
				'DevContainers',
				'Standard Development Environments',
				'CI/CD (Jenkins, Bamboo, GitLab CI)',
				'Gitflow',
				'Docker',
				'Storybook',
				'Jasmine / Jest',
				'Cypress',
			],
		},
	] satisfies ResumeSkillGroup[],

	honors: [
		'Run the Engine Award',
		'Refi Giant Award',
		'TechX Finalist',
		'Mark of Distinction (x2)',
	],

	experience: [
		{
			name: 'Capital One',
			roles: [
				{
					org: 'Capital One',
					title: 'Lead Software Engineer — Developer Experience',
					dates: 'July 2026 – Present',
					location: 'Richmond, VA',
					bullets: [
						'Building standards for development at Capital One — language tooling, DevContainers, and Standard Development Environments — within Developer Experience / Collaborative Code Foundations / EP Tech.',
						'Serve as the JavaScript/TypeScript tech lead for the language excellence organization, working alongside counterparts covering Python, Go, and Java.',
					],
				},
				{
					org: 'Capital One',
					title: 'Lead Software Engineer — Card Tech Architecture',
					dates: 'May 2024 – July 2026',
					location: 'Richmond, VA',
					bullets: [
						'Led a brand-new team built from the ground up, standing up both the team and its architectural practice from nothing.',
						'Built an application and overall architecture that the enterprise adopted as ASPIRE, a standard methodology for building sound architecture across Capital One.',
					],
				},
				{
					org: 'Capital One',
					title: 'Lead Software Engineer — Financial Services',
					dates: 'July 2023 – May 2024',
					location: 'Plano, TX',
					bullets: [
						'Re-architected Developer Navigator, the internal application developers use to move through the SDLC — build pipelines, and manage assets and capabilities — onto a micro-frontend architecture.',
						'Cultivated a thriving frontend development team around the platform of more than 15 frontend devs that worked closely together to build a cohesive and fun experience.',
					],
				},
				{
					org: 'Capital One',
					title: 'Principal Software Engineer',
					dates: 'July 2019 – July 2023',
					location: 'Plano, TX',
					bullets: [
						'Lead frontend engineer for auto refinance, architecting the one-agent platform used across the refi business.',
						'Mentored engineers and partnered directly with Experience Design and Product Management to ship agent-facing experiences.',
						'Built micro-frontends with Lit Element and custom web components, plus Angular, and owned the shared component library that every developer treated as the single source of truth.',
						'First engineer at Capital One to ship WebAssembly + Web Workers in a customer-facing production frontend.',
						'Organized and hosted the internal Refi Hackathon — 40+ patents produced in the last year alone; submitted 4 patents personally, with one successfully filed with the US Patent Office, and several hackathon innovations shipped to production.',
						'Hosted internal dev talks to audiences of 200+ on WebAssembly, Web/Service Workers, Lighthouse performance analysis, CSS Grid vs. Flexbox, Lit Element, Storybook, Ionic, Angular, React, Jasmine/Jest, Cypress, and Gitflow branching strategy.',
					],
				},
			],
		},
		{
			name: 'Code and Coffee Podcast',
			roles: [
				{
					org: 'Code and Coffee Podcast',
					title: 'Host / Content Creator',
					dates: 'Sept 2020 – Dec 2020',
					bullets: [
						'Co-hosted a podcast with two colleagues, bringing 20+ combined years of software engineering experience to conversations on coding practices, interview prep, and career development.',
					],
				},
			],
		},
		{
			name: 'Hilti North America',
			roles: [
				{
					org: 'Hilti North America',
					title: 'Senior Software Engineer',
					dates: 'April 2018 – July 2019',
					location: 'Plano, TX',
					bullets: [
						'Resolved major Angular 5 performance bottlenecks ahead of an Angular 7 migration, cutting load time from 15s to under 1s by restructuring asset packaging.',
						'Built a new Angular 7 frontend from Design Team specs, backed by new Node/Express/GraphQL and Java 8 (Play Framework, exploring Spring Boot) microservices.',
						'Implemented Angular Universal server-side rendering in Docker for faster, more efficient delivery.',
						'Developed and refactored APIs for both the legacy Laravel frontend and the new Angular 7 frontend, standardizing responses with Fractal against the jsonapi.org spec.',
						"Rebuilt the site's visual language with SCSS/LESS and a new card-based design system, moving it off a flat, minimal look.",
					],
				},
			],
		},
		{
			name: 'RainWise, Inc. / PowerWise Systems',
			roles: [
				{
					org: 'RainWise, Inc. / PowerWise Systems',
					title: 'Senior Laravel/Vue Engineer (Consultant)',
					dates: 'March 2018 – April 2018',
					location: 'Trenton, ME',
					bullets: [
						'Built a new frontend with Vue.js and Laravel using Semantic UI and BEM, redesigning multiple site sections for mobile and cross-device use from the ground up.',
					],
				},
			],
		},
		{
			name: 'Stack Sports',
			roles: [
				{
					org: 'Stack Sports',
					title: 'Senior Software Engineer',
					dates: 'June 2017 – March 2018',
					location: 'Frisco, TX',
					bullets: [
						'Owned the tournaments application handling payments and registration for basketball, football, volleyball, and soccer leagues.',
						'Rebuilt a legacy Laravel core, dockerized and namespaced the app, and added PHPUnit coverage to tame years of technical debt.',
						"Stood up GitLab CI/CD so the legacy app's deploys gated on passing tests.",
						'Built a new tournament scheduler API in Node/Express with Sequelize + MySQL.',
						'Migrated the legacy PHP app toward a stable Laravel core with a new Angular 5 frontend, running everything in Docker.',
						'Onboarded and managed engineers on-site and remote as the point of contact for tournaments and payments.',
					],
				},
			],
		},
	] satisfies ResumeCompany[],

	earlierExperience: [
		{
			org: 'Lewisville ISD',
			title: 'Software Engineer Lead',
			dates: 'July 2014 – June 2017',
			note: 'Built RESTful APIs and full-stack tools on Laravel, Lumen, and Slim across IIS/MSSQL/MySQL; shipped Angular 2/4 apps, SSRS/SSIS reporting, and custom Java/Objective-C/C++ tools for the district.',
		},
		{
			org: 'Microsoft (Xbox Division)',
			title: 'Quality Assurance Analyst → Level 3 Technical Support',
			dates: 'July 2013 – July 2014',
			note: 'Audited agent quality and support standards for Xbox/Microsoft Account issues; served as last line of support for fraud, unauthorized access, and account escalations.',
		},
		{
			org: 'Cash Register Services, Inc.',
			title: 'Help Desk Support',
			dates: 'May 2010 – June 2013',
			note: 'Tier 1/2 support for POS software and hardware (ISS45, IBM 4690) and Retalix fuel systems; rebuilt Windows and IBM servers from the ground up.',
		},
	] satisfies ResumeEarlierRole[],

	speaking: {
		intro:
			"Regular speaker at Capital One's internal Frontend Community (2+ talks a year since joining) and large-scale internal forums like Async Live and SECON, plus external conferences and meetups.",
		talks: [
			{
				title: 'Building Apps with Lit Element in 2026',
				venue: 'Capital One Async Live · RVA.js Meetup',
				dates: 'April & August 2026',
				note: 'App shell architecture, routing, dependency injection, async state, and signals for real Lit applications.',
			},
			{
				title: 'Expressing Yourself with CSS in 2026',
				venue: 'Capital One Frontend Community',
				dates: 'February 2026',
			},
			{
				title: 'WebAssembly (WASM)',
				venue: 'RVA.js Meetup',
				dates: 'June 2025',
			},
			{
				title: 'The State of Workers in 2025',
				venue:
					'RVA.js Conference (Richmond) · Capital One Async Live · SECON · Frontend Community',
				dates: '2025',
				note: 'Given 4 times in 2025, originating as an external talk at RVA.js Conference before three internal deliveries.',
			},
		],
		writingNote:
			'Numerous technical articles on quincarter.com and on Medium (@quincarter).',
	} satisfies ResumeSpeaking,

	education: [
		{
			school: 'DeVry University',
			credential:
				'B.S., Computer and Information Systems Security / Information Assurance',
			dates: '2014 – 2017',
		},
	] satisfies ResumeEducation[],
};
