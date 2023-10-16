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
          name="Quin Carter"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Technical Articles</NavMenuItem>
        <NavMenuItem href="https://github.com/quincarter" target="_blank">
          GitHub
        </NavMenuItem>
        <NavMenuItem
          href="https://app.enhancv.com/share/636d9ae4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
          target="_blank"
        >
          Resume
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
