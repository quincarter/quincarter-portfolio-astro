import '../styles/bottom-section.css';

import { Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <div className="bottom-section">
      <div className="text-content">
        <h1>Wanna chat? Reach out and I would be happy to speak with you!</h1>
        <p>
          I am always striving to learn more and connect with other like-minded
          devs. If you just want to reach out and chat, all my socials are
          above!
        </p>
      </div>

      <img src="/assets/images/call-me-maybe.png" alt="call me maybe?" />
    </div>
  </Section>
);

export { CTA };
