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

export const RESUME = {
	name: 'Quin Carter',
	title: 'Lead Software Engineer at Capital One',
	tagline: 'Frontend Architecture · Web Components · Speaker',
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

	summary: `Senior software engineer and full-stack web developer specializing in highly scalable, well-crafted user experiences. I build with Lit Element, Angular, React, and Vue on the frontend, and Node/Express or Java/Spring Boot for APIs and BFFs, most of it inside microservice-architected, multi-layer distributed systems. I lead with the customer's experience first, work closely with design, and care deeply about application architecture — a system that isn't planned properly becomes a system nobody can maintain. Recent focus has been WebAssembly and Web Workers in production micro-frontends, including compiling C++ to a WASM target so the browser gets desktop-grade performance.`,

	skillGroups: [
		{
			category: 'Languages',
			skills: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'C++', 'Objective-C'],
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
					title: 'Lead Software Engineer',
					dates: 'July 2023 – Present',
					location: 'Richmond, VA',
					bullets: [
						'Lead frontend engineer for auto refinance, architecting the one-agent platform used across the refi business.',
						'Mentor engineers and partner directly with Experience Design and Product Management to ship agent-facing experiences.',
						'Build micro-frontends with Lit Element and custom web components, plus Angular, and own the shared component library that every developer treats as the single source of truth.',
						'First engineer at Capital One to ship WebAssembly + Web Workers in a customer-facing production frontend.',
						'Organize and host the internal Refi Hackathon — 40+ patents produced in the last year alone; submitted 4 patents personally, with one successfully filed with the US Patent Office, and several hackathon innovations shipped to production.',
						'Hosted internal dev talks to audiences of 200+ on WebAssembly, Web/Service Workers, Lighthouse performance analysis, CSS Grid vs. Flexbox, Lit Element, Storybook, Ionic, Angular, React, Jasmine/Jest, Cypress, and Gitflow branching strategy.',
					],
				},
				{
					org: 'Capital One',
					title: 'Principal Software Engineer',
					dates: 'July 2019 – July 2023',
					location: 'Plano, TX',
					bullets: [
						'Same platform ownership as above prior to promotion to Lead — frontend architecture, mentorship, and the shared component library for the agent platform.',
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

	education: [
		{
			school: 'DeVry University',
			credential:
				'B.S., Computer and Information Systems Security / Information Assurance',
			dates: '2014 – 2017',
		},
	] satisfies ResumeEducation[],
};
