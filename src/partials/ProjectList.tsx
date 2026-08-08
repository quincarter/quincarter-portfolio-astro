import '../styles/projects.css';

import {
	GradientText,
	Project as ProjectCard,
	Section,
	Tags,
} from 'astro-boilerplate-components';
import { PROJECT_DATA } from '@/data/projects';
import type { Project as ProjectData } from '@/models/projects.interface';

import styles from '../styles/project-list.module.css';

const ProjectList = () => (
	<Section
		title={
			<>
				Recent <GradientText>Projects</GradientText>
				<br />
				<p className={styles.titleMetadata}>
					Since I work at a bank, everything is highly regulated and private. So
					I will not be able to give links to my current work, but I, like many
					others, have side projects that keep me busy! I also try to make most
					things I touch be public and open-source.
				</p>
			</>
		}
	>
		<div className="projects flex flex-col gap-6">
			{
				// add to PROJECT_DATA to append more projects to the list
				PROJECT_DATA.map((project: ProjectData) => {
					const categories = project.category.map((category) => (
						<Tags key={category.name} color={category?.color}>
							{category.name}
						</Tags>
					));

					if (project.descriptionLinkHref && project.descriptionLinkText) {
						return (
							<div
								key={project.name}
								className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
							>
								<div className="shrink-0">
									<a href={project.link || '/'}>
										<img
											className="h-36 w-36 hover:translate-y-1"
											src={project.image.src}
											alt={project.image.alt}
											loading="lazy"
										/>
									</a>
								</div>

								<div>
									<div className="flex flex-col items-center gap-y-2 md:flex-row">
										<a
											className="hover:text-cyan-400"
											href={project.link || '/'}
										>
											<div className="text-xl font-semibold">
												{project.name}
											</div>
										</a>
										<div className="ml-3 flex flex-wrap gap-2">
											{categories}
										</div>
									</div>

									<p className="mt-3 text-gray-400">
										{project.description}{' '}
										<a
											className="text-cyan-400 hover:underline"
											href={project.descriptionLinkHref}
										>
											{project.descriptionLinkText}
										</a>
									</p>
								</div>
							</div>
						);
					}

					return (
						<ProjectCard
							key={project.name}
							name={project.name}
							description={project.description}
							link={project.link || '/'}
							img={{
								src: project.image.src,
								alt: project.image.alt,
							}}
							category={categories}
						/>
					);
				})
			}
		</div>
	</Section>
);

export { ProjectList };
