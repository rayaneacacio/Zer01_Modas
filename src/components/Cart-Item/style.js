import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  margin: 1rem;

  main {
    width: 120%;
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    > img {
      width: 7rem;
    }

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

  }

  .slide2 {
    width: 50rem;
    height: 10rem;

    padding-left: 7rem;

    display: flex;
    align-items: flex-end;
  }

  button {
    background: red;
    width: 100%;
    height: 10rem;

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      width: 3rem;
      height: 3rem;
    }
  }
`;