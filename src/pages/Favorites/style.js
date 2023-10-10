import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: 1.5rem; 

    width: 100%;
    
    padding: 1rem;
    margin-top: 13rem;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  }

  > div {
    align-self: center;
  }

  @media(min-width: 1000px) {
    > h3 {
      font-size: 1.6rem;
      text-align: center;
      letter-spacing: 1px;
      box-shadow: none;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;

export const Main = styled.main`
  height: calc(100% - 16rem) !important;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: auto;

  > :first-child {
    display: none;
  }

  .DivCatalog {
    height: 100%;
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