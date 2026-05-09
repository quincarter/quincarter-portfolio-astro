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
export declare const CATEGORY_DATA: CategoryData;
