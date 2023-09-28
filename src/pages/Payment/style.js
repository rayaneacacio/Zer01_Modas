import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const Main = styled.main`
  height: calc(100% - 12rem);
  margin-top: 12rem;

  overflow-x: hidden;
  overflow-y: auto;

  > div {
    margin: 0 3rem 2rem 3rem;

    > h3 {
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .payment-methods {
    padding-top: 3rem;
  }

  .address > h3, .items > h3 {
    font-weight: normal;
  }

  .items, .total {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      display: flex;
      justify-content: space-between;

      > p:first-of-type {
        width: 15rem;
      }
    }
  }

  .total {
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    padding-top: 1rem;
  }

  #frete {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }
`;