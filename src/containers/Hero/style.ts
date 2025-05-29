import styled from "styled-components";
import { colors } from "../variaveis/variaveis";

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/imgs/bannerBASE.png') no-repeat center center;
  background-size: 100vw 100vh;
  color: ${colors.colorTextHeader};
  text-align: center;
  padding: 0;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
