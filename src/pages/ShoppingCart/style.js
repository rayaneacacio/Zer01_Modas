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
    background: white;
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

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > div {
      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.2rem;
      width: 100%;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > svg {
        width: 2rem;
        height: 2rem;
        transform: rotateY(180deg);
      }
    }

    > :first-child {
      display: grid;
      grid-template-areas:
        "svg title"
        "svg subtitle";
      align-items: center;
      justify-content: start;
      column-gap: 0.5rem;
      row-gap: 0;

      > svg {
        grid-area: svg;
      }
    }
  }

  .boxCards > :first-child {
    display: flex;
    justify-content: space-between;
  }

  .compra {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    span, .divCupom {
      display: flex;
      justify-content: space-between;
    }

    span, > h3 {
      padding: 0 1rem;
    }

    .value {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
    }

    > button {
      background: ${({ theme }) => theme.COLORS.GRAY_700};
      color: ${({ theme }) => theme.COLORS.WHITE};
      width: 95%;
      padding: 1rem;
      margin: 1rem;
    }
  }

  .divCupom {
    padding-left: 1rem;

    span {
      gap: 2rem;
    }

    button {
      background-color: ${({ theme }) => theme.COLORS.GRAY_700};
      color: ${({ theme }) => theme.COLORS.WHITE};
      height: 3rem;
      padding: 0 1.5rem;
    }
  }

  .divInputCupom {
    height: 3rem;
    padding: 0.5rem;
    border: none;
    position: relative;

    input {
      padding: 0;
    }
  }

  .img-carrinho-vazio {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: img-carrinho-vazio;
    margin: 10rem 0;

    > img {
      width: 40rem;
      height: 40rem;
    }
  }

  @media(min-width: 1000px) {
    height: calc(100% - 23rem);
    margin-top: 6rem;
    font-size: 1.7rem;
    
    display: grid;
    grid-template-areas:
        "info info"
        "cards text"
        "footer footer";
    grid-column-gap: 5rem;
    grid-template-columns: 1fr 1fr;

    .info {
      background: ${({ theme }) => theme.COLORS.BLACK};
      grid-area: info;
      height: 7rem;
      font-size: 1.4rem;
      flex-direction: row;
      align-items: flex-start;
      padding-top: 1rem;
      margin: 0 20rem;

      > :first-child {
        border-right: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        width: 50%;
        height: 76%;
        display: grid;
        grid-template-areas:
          "svg title"
          "svg subtitle";
        grid-template-columns: 1fr 8fr;
        align-content: space-around;
        grid-row-gap: 0;

        > svg {
          grid-area: svg;
          width: 5rem;
          height: 5rem;
          margin: 0 1rem 0 6rem;
        }

        > :nth-child(2) {
          font-size: 1.6rem;
        }
      }

      > :nth-child(2) {
        width: 50%;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        
        > :first-child {
          font-size: 1.6rem;
        }
      }
    }

    .boxCards {
      grid-area: cards;
      overflow-y: auto;
      margin: 0 -3rem 0 20rem;
    }

    .compra {
      grid-area: text;
      margin-right: 20rem;
      justify-content: space-between;
      gap: 2rem;
      padding-top: 3rem;

      > div {
        height: 70%;
        overflow-y: auto;
        gap: 3rem;
      }

      span, > h3 {
        padding: 0 2rem;
      }

      .value {
        padding-top: 4rem;
      }

      > button {
        width: 100%;
        height: 5rem;
        margin: 0;
      }
    }

    .divCupom {
      padding-left: 2rem;
    }

    .img-carrinho-vazio {
      margin: 5rem 0;
    }
    
    > footer {
      grid-area: footer;
      margin-top: 7rem;
    }
  }
`;