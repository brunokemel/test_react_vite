import { createGlobalStyle } from 'styled-components';
import { colors } from "./src/containers/variaveis/variaveis";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Montserrat', sans-serif;
    display: block;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

 export const Button = styled.a`
  background-color: ${colors.Button}; /* Azul */
  color: ${colors.background};  /* Branco */
  padding: 6px 12px;
  border-radius: 16px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 6px ${colors.boxShadow};
  transition: background-color 0.3s ease;
  display: inline-block;
  cursor: pointer;


  &:hover {
    background-color: ${colors.ButtonHover}; /* Azul mais escuro */
  }
`;

export default GlobalStyle;

