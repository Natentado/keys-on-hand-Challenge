import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  color: brown;

  font-family: "Ubuntu", sans-serif;
  font-weight: 500;

  span {
    height: 2.5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 550px;

  img {
    border-radius: 5px;
    border: 5px solid white;

    width: 100%;
    height: 90%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 10%;

    button {
      width: 50%;
      height: 70%;

      border: none;
      border-radius: 5px;

      background-color: var(--purple);
      color: white;

      font-family: "Ubuntu", sans-serif;
      font-size: 1.2rem;

      &:hover {
        opacity: 0.8;

        box-shadow: 1px 1px 3px black;

        font-size: 1.2rem;
        font-weight: 500;

        transition: 0.3s ease;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 300px;
    height: 450px;
  }
`;
