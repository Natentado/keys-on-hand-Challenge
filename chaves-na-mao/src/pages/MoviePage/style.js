import styled from "styled-components";

export const MoviePContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;

  background-color: var(--backgroundMain);
`;

export const MoviePMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100vw;
  height: 75vh;

  svg {
    width: 3rem;
    height: 3rem;

    position: absolute;

    top: 2rem;
    left: 2rem;

    &:hover {
      cursor: pointer;

      color: var(--purple);
    }

    @media (max-width: 420px) {
      width: 2rem;
      height: 2rem;

      top: -2rem;
    }
  }

  @media (max-width: 1200px) {
    height: 90vh;
  }
`;

export const MovieDescriptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 1rem;

  width: 75%;
  height: 90%;

  img {
    border-radius: 10px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    width: 60%;
    height: 90%;

    padding: 10px;

    font-family: "Ubuntu", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;

    color: var(--purple);

    div {
      display: flex;
      flex-direction: column;
      gap: 25px;

      width: 100%;

      span {
        display: flex;
        justify-content: space-between;

        width: 100%;

        font-size: 1rem;
        font-weight: bold;

        color: black;

        p {
          font-size: 1.2rem;

          color: brown;
        }
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 10px;

        width: 100%;
        height: 40%;

        font-size: 1.3rem;

        li {
          width: 100%;

          p {
            font-size: 1rem;
            font-family: monospace;
            font-weight: bold;

            color: black;
          }
        }
      }

      p {
        font-family: monospace;

        color: black;

        span {
          display: inline;

          color: var(--purple);

          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    width: 100%;

    img {
      width: 250px;
      height: 250px;

      @media (max-width: 500px) {
        width: 200px;
        height: 200px;
      }
    }

    div {
      width: 95%;

      h2 {
        font-size: 1.5rem;
      }

      div {
        ul {
          margin-bottom: 25px;
        }

        p {
          font-size: 1rem;

          span {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
