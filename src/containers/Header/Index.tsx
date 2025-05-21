import { HeaderContainer , Nav } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      {/* <Logo>
        <img src="https://via.placeholder.com/300x200" alt="" />
      </Logo> */}
      <Nav>
        <ul>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
