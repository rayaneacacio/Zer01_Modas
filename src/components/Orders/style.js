import styled from "styled-components";

export const Container = styled.div`
  .table {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;

    > div {
      display: flex;
      align-items: center;

      > div {
        background-color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: center;
        width: 30%;
        padding: 1rem 0;
      }

      > :nth-child(3), > :nth-child(4) {
        display: none;
      }

      > :last-child {
        background: none;
      }
    }

    > :first-child > div {
      background: none;
    }

    button {
      background: ${({ theme }) => theme.COLORS.PURPLE};
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.4rem;
      padding: 0.2rem 0;
      margin-left: 0.5rem;
    }
  }

  @media(min-width: 440px) {
    .table button {
      padding: 0.5rem 1rem;
    }
  }

  @media(min-width: 500px) {
    .table button {
      font-size: 1.6rem;
    }
  }

  @media(min-width: 1000px) {
    .table {
      > div {
        > div {
          width: 20%;
        }

        > :nth-child(3), > :nth-child(4) {
          display: block;
        }
      }
    }
  }
`;