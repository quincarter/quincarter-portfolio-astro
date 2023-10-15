import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import { MAIN_HERO_DATA } from '@/pages/page-data/main-hero';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Quin Carter!</GradientText> 👋
        </>
      }
      description={
        <>
          {MAIN_HERO_DATA.description}
          <br />
          <br />I have focused on many different technologies over the course of
          my career, but Frontend Engineering is by far my favorite technology
          to work on. I am a JavaScript/TypeScript Developer first and foremost,
          but I have worked on everything under the sun when it comes to
          engineering.
        </>
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
          <a href="">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
