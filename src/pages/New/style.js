import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.COLORS.PURPLE};
    margin: 3rem 5rem;
  }

  > div, > button {
    margin: 0 5rem;
  }

  > button {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem;
    margin-top: 3rem;
  }

  @media(min-width: 1000px) {
    height: calc(100% - 15rem);
    margin-top: 15rem;

    > h3 {
      font-size: 2rem;
      margin-left: 10rem;
    }

    > div, > button {
      margin: 0 15rem 0 26rem;
    }

    > button {
      width: 20%;
      align-self: flex-end;
      margin-top: 4rem;
    }
  }

  @media(min-width: 1400px) {
    > h3 {
      margin-left: 26rem;
    }
  }
`;