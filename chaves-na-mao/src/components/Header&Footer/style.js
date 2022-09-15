import styled from "styled-components";

export const MoviePHeaderAndFooter = styled.div`
  width: 100vw;
  height: 15vh;

  background-color: var(--backgroundDarker);
  box-shadow: 0px 0px 20px var(--backgroundDarker);

  @media (max-width: 1400px) {
    height: 10vh;
  }

  @media (max-width: 1000px) {
    height: 5vh;
  }
`;
