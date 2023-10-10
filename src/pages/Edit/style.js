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

  > div, .buttons {
    margin: 0 5rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
  }

  .buttons > button {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem;
    margin-top: 5rem;
  }

  .buttons > button:last-of-type {
    background: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-top: 2rem;
  }

  @media(min-width: 1000px) {
    height: calc(100% - 15rem) !important;
    margin-top: 15rem;

    > h3 {
      font-size: 2rem;
      margin-left: 10rem;
    }

    > div, .buttons {
      margin: 0 15rem 0 26rem;
    }

    .buttons {
      flex-direction: row;
      justify-content: flex-end;
      gap: 2rem;

      > button, > button:last-of-type {
        margin-top: 4rem;
        width: 20%;
        height: 55%;
      }
    }
  }

  @media(min-width: 1400px) {
    > h3 {
      margin-left: 26rem;
    }
  }
`;