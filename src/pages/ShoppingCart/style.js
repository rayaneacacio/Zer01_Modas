import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  overflow: hidden;

  > header > :nth-child(2) {
    padding-top: 0.1rem;
    
    .input {
      display: none;
    }
  }

  > div {
    background: white;
    width: 100%;
    padding-bottom: 1rem;

    position: absolute;
    top: 13rem;

    > button > svg {
      width: 3rem;
      height: 3rem;
    }

    > h3 {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-size: 2rem;
      margin-left: 1rem;
    }
  }

  footer {
    margin-top: 2rem;
  }

  @media(min-width: 1000px) {
    > header > :nth-child(2) {
      padding-top: 1.5rem;

      .input {
        display: flex;
      }
    }

    > div {
      padding-left: 19.5rem;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 20.3rem);
  margin-top: 21rem;

  opacity: 0;
  transform: translateX(-0.5rem);
  animation: toRight 0.5s forwards;

  overflow-x: hidden;
  overflow-y: auto;

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

      > svg {
        width: 2rem;
        height: 2rem;
        transform: rotateY(180deg);
      }
    }

    > :first-child {
      align-items: center;
      gap: 0.5rem;
    }
  }

  .boxCards > div {
    display: flex;
    justify-content: space-between;

    > :last-child {
      padding-right: 1rem;
    }
  }

  .compra {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > span {
      display: flex;
      justify-content: space-between;
    }

    > span, > h3 {
      padding: 0 1rem;
    }

    .value {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      margin: 2rem 0;
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

  @media(min-width: 1000px) {
    height: calc(100% - 20.5rem);
    font-size: 1.7rem;
    display: grid;
    grid-template-areas:
        "info info"
        "cards text"
        "footer footer";
    grid-column-gap: 5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 7fr 1fr;

    & ::-webkit-scrollbar {
      background: white;
      width: 1.3rem;
    }

    & ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.GRAY_500};
      border-radius: 10px;
      border: 0.3rem solid white;
    }

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

      padding-top: 5rem;

      > span, > h3 {
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

    > footer {
      grid-area: footer;
      margin-top: 7rem;
    }

  }
`;