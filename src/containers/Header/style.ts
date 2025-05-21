import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #000000;
  font-size: 1.2rem;
  height: 5vh;


  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    color: #000000;}

`;
export const Nav = styled.nav`
ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  color: #000000;
  margin-top: 20px;

}
li {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #000000;
  }
}
`


// export const Logo = styled.div`
//   border: 5px solid #000000;
//   border-radius: 50%;
//   height: 100px;
//   width: 100px;
//   background: url('https://avatars.githubusercontent.com/u/154928298?s=400&u=175050d120411001842ae02d43f84d9c90770375&v=4') no-repeat center center;
//   background-size: cover;
// `;
