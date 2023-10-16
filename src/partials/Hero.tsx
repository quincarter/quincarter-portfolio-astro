import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import { MAIN_HERO_DATA } from '@/pages/page-data/main-hero';

import styles from '../styles/hero.module.css';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Quin Carter!</GradientText> 👋
        </>
      }
      description={
        <p className={styles.mainSchpeel}>
          {MAIN_HERO_DATA.description}
          <br />
          <br />I have focused on many different technologies over the course of
          my career, but Frontend Engineering is by far my favorite technology
          to work on. I am a JavaScript/TypeScript Developer first and foremost,
          but I have worked on everything under the sun when it comes to
          engineering.
        </p>
      }
      avatar={
        <img
          className="w-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/quincarter/" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a
            href="https://app.enhancv.com/share/636d9ae4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/resume-logo.png"
              alt="Resume icon"
            />
          </a>
          <a
            href="https://gitlab.com/users/quincarter/projects"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/gitlab-icon.png"
              alt="Gitlab icon"
            />
          </a>
          <a href="https://github.com/quincarter" target="_blank">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="github icon"
            />
          </a>
          <a href="https://medium.com/@quincarter" target="_blank">
            <HeroSocial
              src="/assets/images/medium-logo.webp"
              alt="Medium icon"
            />
          </a>
          <a
            href="https://discordapp.com/users/266934198055600150"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/discord-logo.webp"
              alt="discord icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
