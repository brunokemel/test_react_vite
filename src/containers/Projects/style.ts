import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;
export const ProjectItem = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 10px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    font-size: 24px;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;
export const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
