import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme.COLORS.BLACK_22};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  width: 100%;
  height: 27.8rem;

  > div {
    background: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 0.9rem;

    height: 6rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem;

    svg {
      width: 2rem;
      height: 2rem;

      margin: 0.5rem 1rem 0 0;
    }

    > img { 
      width: 7rem;
      height: 4rem;
    }

    > :last-child {
      width: 10rem;
      text-align: end;
    }
  }

  > p {
    font-size: 0.7rem;
    text-align: center;
    padding: 0.5rem;
  }

  @media(min-width: 1000px) {
    > div {
      font-size: 1.3rem;
      height: 8rem;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      > img {
        width: 10rem;
      }
    }

    > p {
      font-size: 1.1rem;
    }
  }
`;