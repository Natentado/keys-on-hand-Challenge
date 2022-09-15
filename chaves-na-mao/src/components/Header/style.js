import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 11vh;

  padding: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column;

    height: 22.5vh;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 18vw;
  height: 9vh;

  font-family: "Ubuntu", sans-serif;

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: 6vh;

    svg {
      width: 3rem;
      height: 3rem;

      color: var(--purple);
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  h3 {
    display: flex;
    justify-content: flex-end;

    width: 100%;

    font-size: 1.3rem;

    color: var(--purple);
  }

  @media (max-width: 1400px) {
    width: 15vw;
    height: 6vh;

    div {
      svg {
        width: 2rem;
        height: 2rem;
      }

      h2 {
        font-size: 1rem;
      }
    }

    h3 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1000px) {
    width: 25vw;
  }

  @media (max-width: 600px) {
    width: 40vw;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 20%;
  height: 5vh;

  border: 5px solid rgba(34, 40, 222, 0.125);
  border-radius: 20px;

  padding: 0 5px;

  background-color: white;

  input {
    width: 85%;
    height: 100%;

    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    color: var(--purple);

    margin-right: 15px;
  }

  @media (max-width: 1000px) {
    width: 60%;
  }
`;
