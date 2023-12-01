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

  .divMenu, .divLastRequests, .divCoupons {
    margin: 2rem;
  }

  @media(min-width: 1000px) {
    height: calc(100% - 23rem);
    padding-top: 5rem;
    margin-top: 6rem;
    font-size: 1.7rem;

    display: flex;
    flex-direction: column;

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

  .table {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      align-items: center;

      > div {
        background-color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: center;
        width: 20%;
        padding: 1rem 0;
      }

      > :last-child {
        background: none;
      }
    }

    > :first-child > div {
      background: none;
    }

    button {
      background: ${({ theme }) => theme.COLORS.PURPLE};
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-left: 2rem;
    }
  }
  }
`;