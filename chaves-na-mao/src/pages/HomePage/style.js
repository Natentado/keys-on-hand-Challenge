import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;

  background-color: var(--backgroundMain);

  h1 {
    margin-top: 5rem;
    margin-bottom: 1rem;

    font-family: monospace;

    text-decoration: underline;

    text-shadow: 0px 2px 6px gray;

    color: var(--purple);

    @media (max-width: 1000px) {
      font-size: 1.3rem;
    }
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 25px;

  width: 60vw;
  height: 80vh;

  padding: 1rem;
`;
