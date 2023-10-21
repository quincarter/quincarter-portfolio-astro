import '../styles/projects.css';

import {
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import { PROJECT_DATA } from '@/pages/page-data/projects';

import styles from '../styles/project-list.module.css';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
        <br />
        <p className={styles.titleMetadata}>
          Since I work at a bank, everything is highly regulated and private. So
          I will not be able to give links to my current work.
        </p>
      </>
    }
  >
    <div className="projects flex flex-col gap-6">
      {
        // add to PROJECT_DATA to append more projects to the list
        PROJECT_DATA.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            link={project.link || '/'}
            img={{
              src: project.image.src,
              alt: project.image.alt,
            }}
            category={
              <>
                {project.category.map((category) => (
                  <Tags color={category.color}>{category.name}</Tags>
                ))}
              </>
            }
          />
        ))
      }
    </div>
  </Section>
);

export { ProjectList };
