import styled from "styled-components"
import { colors } from "../variaveis/variaveis"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  padding: 20px;
  box-sizing: border-box;
  color: ${colors.text};
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  `;

export const AreaContact = styled.div`
  background-color: ${colors.areaContact};
  padding: 6.5vh 80vh;
  border-radius: 10px;
  box-shadow: 0 4px 8px ${colors.boxShadow};
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  `;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.colorTextHeader};
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  `;

export const Description = styled.p`
  font-size: 1.2rem;
  color: ${colors.text};
  margin-bottom: 30px;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  `;
