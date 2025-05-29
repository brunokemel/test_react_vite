import styled from 'styled-components';
import { colors } from "../variaveis/variaveis";

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 40px 0;
  background-color: ${colors.background};

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LayoutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const ProjectItem = styled.div`
  background-color: ${colors.itemBacground};
  flex: 1 1 30%;
  min-width: 280px;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

export const TitleMedium = styled.h5`
  font-size: 18px;
  margin: 5px 0;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;


