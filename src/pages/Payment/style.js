import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  button {
    font-size: 1.3rem;
  }

  dialog {
    background: rgba(8, 8, 8, 0.64);
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;

    overflow-x: hidden;
    overflow-y: auto;

    transform: translateY(2rem);
    animation: toTop 0.3s forwards;

    > h3 {
      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: normal;
      text-align: center;
      height: 12rem;
      padding-top: 5rem;
    }

    > button {
      background: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      position: absolute;
      top: 4.5rem;
      right: 2rem;
      border: none;
    }

    > div {
      background: white;
      padding: 3rem;
      padding-bottom: 10rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      > button {
        background: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.WHITE};
        height: 3.5rem;
        margin-top: 2rem;
      }
    }
  }

  .input-address {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    height: 6rem;

    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};

    > input {
      width: 100%;
      padding: 1rem 0;
    }
  }
`;

export const Main = styled.main`
  height: calc(100% - 12rem);
  margin-top: 12rem;

  overflow-x: hidden;
  overflow-y: auto;

  opacity: 0;
  transform: translateX(-1rem);
  animation: toRight 0.5s forwards;

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

  .address {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > button {
      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.WHITE};
      height: 3rem;
    }
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
    font-weight: 500;
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    padding-top: 1rem;
  }

  #frete {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }
`;