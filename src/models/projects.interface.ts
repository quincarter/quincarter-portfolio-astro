import { ColorTags } from 'astro-boilerplate-components';

export declare type Color =
	| 'SLATE'
	| 'GRAY'
	| 'ZINC'
	| 'NEUTRAL'
	| 'STONE'
	| 'RED'
	| 'ORANGE'
	| 'AMBER'
	| 'YELLOW'
	| 'LIME'
	| 'GREEN'
	| 'EMERALD'
	| 'TEAL'
	| 'CYAN'
	| 'SKY'
	| 'BLUE'
	| 'INDIGO'
	| 'VIOLET'
	| 'PURPLE'
	| 'FUCHSIA'
	| 'PINK'
	| 'ROSE';

export interface Project {
	name: string;
	description: string;
	descriptionLinkText?: string;
	descriptionLinkHref?: string;
	image: CustomImage;
	link: string;
	category: Category[];
}

export interface CustomImage {
	src: string;
	alt: string;
}

export interface Category {
	name: string;
	color: Color;
}

export interface CategoryData {
	[key: string]: Category;
}

export const CATEGORY_DATA: CategoryData = {
	litElement: {
		name: 'Lit Element',
		color: ColorTags.CYAN,
	},
	typeScript: {
		name: 'TypeScript',
		color: ColorTags.ROSE,
	},
	webComponents: {
		name: 'Web Components',
		color: ColorTags.VIOLET,
	},
	performance: {
		name: 'Performance',
		color: ColorTags.LIME,
	},
	mfeArchitecture: {
		name: 'Micro Frontend Architecture',
		color: ColorTags.SKY,
	},
	testCoverage: {
		name: 'Test Coverage',
		color: ColorTags.AMBER,
	},
	nx: {
		name: 'Nx',
		color: ColorTags.EMERALD,
	},
	storybook: {
		name: 'Storybook',
		color: ColorTags.PINK,
	},
	astro: {
		name: 'Astro.js',
		color: ColorTags.FUCHSIA,
	},
	react: {
		name: 'React',
		color: ColorTags.BLUE,
	},
	angular: {
		name: 'Angular',
		color: ColorTags.RED,
	},
	javascript: {
		name: 'JavaScript',
		color: ColorTags.YELLOW,
	},
	ionicFramework: {
		name: 'Ionic Framework',
		color: ColorTags.TEAL,
	},
	nestJs: {
		name: 'NestJS',
		color: ColorTags.PINK,
	},
	wasm: {
		name: 'Web Assembly',
		color: ColorTags.PURPLE,
	},
	chromeExtension: {
		name: 'Chrome Extension',
		color: ColorTags.YELLOW,
	},
	monorepo: {
		name: 'Monorepo',
		color: ColorTags.INDIGO,
	},
	homeAssistant: {
		name: 'Home Assistant',
		color: ColorTags.ORANGE,
	},
	openSource: {
		name: 'Open Source',
		color: ColorTags.GREEN,
	},
	shellScript: {
		name: 'Shell Script',
		color: ColorTags.SLATE,
	},
	llmTooling: {
		name: 'LLM Tooling',
		color: ColorTags.ZINC,
	},
	python: {
		name: 'Python',
		color: ColorTags.STONE,
	},
	rust: {
		name: 'Rust',
		color: ColorTags.ORANGE,
	},
	kotlin: {
		name: 'Kotlin',
		color: ColorTags.PURPLE,
	},
	tauri: {
		name: 'Tauri',
		color: ColorTags.TEAL,
	},
};
