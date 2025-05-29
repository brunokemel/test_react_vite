import styled from 'styled-components';
import { colors } from "../variaveis/variaveis";


export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: ${colors.background};
  margin-top: 15vh;

`;

export const Image = styled.img`
  width: 60vh;
  justify-content: start;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  margin-left: 10vh;

  &:hover {
    transform: scale(1.05);
  }
`;
 export const Sobre = styled.p`
  font-size: 1.2rem;
  color: ${colors.text};
  max-width: 100vh;
  line-height: 1.6;
  text-align: center;
  margin: 20px auto;
  padding-bottom: 60px;
  transition: transform 0.6s ease;
  background-color: ${colors.itemBacground};
  border-radius: 15px;
 background-image: linear-gradient(
  to top right,
  rgba(255, 215, 0, 0.9) 20%,
  rgba(238, 180, 34, 0.7) 60%,
  rgba(204, 153, 0, 0.5) 100%
);
  box-shadow: 0px 0px 75px 10px rgba(255, 215, 0, 0.6);

   &:hover {
    transform: scale(1.05);
  }
  `
