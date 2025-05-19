import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 40px 0;
  background-color: white;
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
  background-color: #f2f2f2;
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

export const TitleSmall = styled.h6`
  font-size: 14px;
  margin: 0;
`;

export const TitleMedium = styled.h5`
  font-size: 18px;
  margin: 5px 0;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
`;













// import styled from "styled-components";

//  export const ProjectsContainer = styled.section`
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: #fff;
//   min-height: 100vh;
//   margin-top: 50px;
// `;
// export const ProjectItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 200px;
//   max-width: 100%;
//   margin: 10px 0;
//   padding: 20px;
//   background-color: #000;
//   border-radius: 8px;

//   h2 {
//     margin-top: 0;
//     font-size: 24px;
//     color: #333;
//   }

//   p {
//     color: #666;
//     line-height: 1.6;
//   }
// `;
// export const CardContainer = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #cccc;
// `;

// export const Separator = styled.span`
//   margin-left: 10px;
//   margin-right: 10px;
// `;
