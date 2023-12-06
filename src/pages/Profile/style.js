import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  > nav {
    display: none;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 2rem;
    width: 100%;
    padding: 1rem;
    position: absolute;
    top: 11rem;
  }

  @media(min-width: 1000px) {
    > nav {
      display: flex;
      margin-top: 12rem;
    }

    > h3 {
      top: 18rem;
      left: 20rem;
    }
  }

  @media(min-width: 1400px) {
    > h3 {
      background: none;
      padding: 0;
      left: 25rem;
    }
  }
`;

export const Main = styled.main`
  font-size: 1.5rem;
  width: 100%;
  height: calc(100% - 15rem);
  margin-top: 15rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  > div > div > h2 {
    margin-bottom: 4rem;
  }

  .divMenu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    padding-bottom: 3rem;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};

    h2 {
      display: none;
    }
  }

  .divMenu, .mainChild {
    margin: 2rem;
    
    > div {
      transform: translateX(-2rem);
      animation: toRight 0.3s forwards;
    }
    
  }

  .divMenu, .divOrders, .divCoupons, .divCards {
    display: none;
  }

  .divProfile {
    display: flex;
    flex-direction: column;
  }

  .divProfile > div {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }

  .divProfile button {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 87%;
    padding: 1rem;
    margin: 5rem 3rem;
    transform: translateX(-2rem);
    animation: toRight 0.3s forwards;
  }

  .divInput {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    position: relative;

    input {
      width: 100%;
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
      border-radius: 8px;
    }
  }

  @media(min-width: 1000px) {
    height: calc(100% - 23rem);
    padding-top: 5rem;
    margin-top: 6rem;
    font-size: 1.7rem;

    display: flex;
    flex-direction: column;

    .divMenu, .divOrders, .divCoupons {
      display: flex;
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 2rem;

      > div {
        width: 50%;
      }
    }

    .divMenu {
      width: 15%;
      border-bottom: none;
      border-right: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
      gap: 2rem;

      > h2 {
        display: block;
        margin: 0;
      }

      > button:first-of-type {
        margin-top: 2rem;
      }
    }

    .divProfile > div {
      gap: 7rem;
    }

    .divProfile button {
      background: ${({ theme }) => theme.COLORS.PURPLE};
      color: ${({ theme }) => theme.COLORS.WHITE};
      width: 25%;
      align-self: center;
    }

    .divInput {
      input {
        width: 60%;
      }
    }
  }
`;