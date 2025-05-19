import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 69vh;
  background: url('/imgs/bkLOGOteste11.png') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 8vh;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
