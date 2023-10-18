export const PROJECT_DATA: Project[] = [
  {
    name: 'test',
    description: 'test',
    imageUrl: 'test',
    link: 'test',
    category: [
      {
        name: 'test',
        color: 'test',
      },
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  category: Category[];
}

export interface Category {
  name: string;
  color: string;
}
