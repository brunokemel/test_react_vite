import { createGlobalStyle } from 'styled-components';
import { colors } from "./src/containers/variaveis/variaveis";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Montserrat', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;

