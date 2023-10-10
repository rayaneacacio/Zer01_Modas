import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > nav {
    margin-top: 12rem;
  }
`;

export const Main = styled.main`
  height: calc(100% - 17rem) !important;
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