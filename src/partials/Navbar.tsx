import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src="/assets/images/hey-sunglasses.png"
              alt="hey-sunglasses image"
              className="h-20"
              loading="lazy"
            />
          }
          name="Quin Carter's Portfolio"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Technical Articles</NavMenuItem>
        <NavMenuItem href="https://github.com/quincarter" target="_blank">
          GitHub
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
