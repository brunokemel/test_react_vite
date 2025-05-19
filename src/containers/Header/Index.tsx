import { HeaderContainer , Nav } from "./style";

function Header() {
  return (
    <HeaderContainer>
      {/* <Logo>
        <img src="https://via.placeholder.com/300x200" alt="" />
      </Logo> */}
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
