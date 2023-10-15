import '../styles/projects.css';

import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

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
      <Project
        name="Developer Navigator Host Portal"
        description="This large project was a ground up rewrite of the host portal of our Developer Navigator product internally. Originally in vanilla web components with no framework, and very dated technology, this project was a huge effort to move as customers (developers) were using it actively every day. This is a Frontend for developers to use to onboard systems from Web Applications, to APIs, and entire scaffoldings of projects. This host portal had to be scaled in way that innersourcing was fast and efficient, housing 17+ Micro Frontends."
        link="/"
        img={{
          src: '/assets/images/code-logo.svg',
          alt: 'code logo',
        }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>Lit Element</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.VIOLET}>Web Components</Tags>
            <Tags color={ColorTags.LIME}>Performance</Tags>
            <Tags color={ColorTags.SKY}>Micro Frontend Architecture</Tags>
            <Tags color={ColorTags.AMBER}>Test Coverage</Tags>
          </>
        }
      />
      <Project
        name="DevNav Shared SDK"
        description="The Shared SDK was pivotal in delivering the previous Host Portal project efficiently. Built with Nx, Yarn Workspaces, Lit Element, TypeScript, and Changesets, this published to our internal artifactory for consumption across multiple teams to deliver a clear and concise experience across the board. These shared components allowed developers building MFEs the ability to move quickly and efficiently. This project test coverage was 99.9% covered across more than 60 shared components in this monorepo."
        link="/"
        img={{ src: '/assets/images/code-logo.svg', alt: 'code logo' }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Nx</Tags>
            <Tags color={ColorTags.PINK}>StoryBook</Tags>
            <Tags color={ColorTags.CYAN}>Lit Element</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.VIOLET}>Web Components</Tags>
            <Tags color={ColorTags.AMBER}>Test Coverage</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
