import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color:rgb(57, 63, 73);
  color: #fff;
  font-size: 1.2rem;
  height: 15vh;

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;}
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;

  }
  li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
