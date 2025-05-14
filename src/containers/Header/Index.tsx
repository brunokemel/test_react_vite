import { HeaderContainer, Logo, Nav } from "./style";

function Header() {
  return (
    <HeaderContainer>
      <h2>Olá</h2>
      <Logo>My Logo</Logo>
      <Nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
