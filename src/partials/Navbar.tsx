import {
  ColorTags,
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo icon={null} name="EGH" />
      </a>

      <NavMenu>
        <NavMenuItem href="https://www.linkedin.com/in/ehsanghasaei/">
          Linkedin
        </NavMenuItem>
        <NavMenuItem href="https://github.com/Ehsan-Home">GitHub</NavMenuItem>
        <Tags color={ColorTags.BLUE}>ehsan.ghasaei@gmail.com</Tags>
        {/* <NavMenuItem href="/">ehsan.ghasaei@gmail.com</NavMenuItem> */}
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
