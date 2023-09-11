import styled from "styled-components";

export const Container = styled.footer`
  color: ${({ theme }) => theme.COLORS.GRAY_500};

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
    background: ${({ theme }) => theme.COLORS.BLACK_22};
    font-size: 0.7rem;
    text-align: center;
    padding: 0.5rem;
  }
`;