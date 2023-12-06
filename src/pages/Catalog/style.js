import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > nav {
    margin-top: 11rem;
  }

  @media(min-width: 1000px) {
    > nav {
      margin-top: 12rem;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
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

  .div_img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;

    > img {
      width: 31rem;
      height: 26rem;
    }
  }

  @media(min-width: 1000px) {
    height: calc(100% - 16rem);
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

    .div_img > img {
      width: 43rem;
      height: 33rem;
    }
  }
`;