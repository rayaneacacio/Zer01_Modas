import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > header > :nth-child(2) {
    padding-top: 0.5rem;

    img {
      display: none;
    }

    .input {
      display: none;
    }
  }

  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    position: absolute;
    top: 3rem;

    svg {
      height: 3.5rem;
    }
  }

  .buttonSearch {
    right: 1.5rem;
    svg { 
      height: 3rem; 
    }
  }

  > nav {
    margin-top: 12rem;
  }

  @media(min-width: 1000px) {
    > header > :nth-child(2) {
      padding-top: 1.5rem;

      img {
        display: block;
      }

      .input {
        display: flex;
      }
    }

    > button {
      color: ${({ theme }) => theme.COLORS.BLACK};
      top: 17rem;
      left: 20rem;
      svg {
        width: 2.5rem;
      }
    }

    .buttonSearch {
      display: none;
    }
  }
`;

export const Main = styled.main`
  height: calc(100% - 17rem);
  overflow-y: auto;

  > :first-child {
    display: none;
  }

  .DivCatalog {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: start;
    gap: 2rem;
    column-gap: 0;
    padding: 1rem;

    opacity: 0;
    transform: translateX(-1rem);
    animation: toRight 0.5s forwards;
  }

  @media(min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > :first-child {
      display: flex;
    }

    .DivCatalog {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      row-gap: 2rem;
      column-gap: 3rem;
    }
  }
`;