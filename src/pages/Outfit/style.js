import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  .buttons, main {
    opacity: 0;
    transform: translateX(-1rem);
    animation: toRight 0.5s forwards;
  }

  .buttons {
    background: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 0.5rem;
  }

  .buttonHeart {
    background: none;
    svg {
      width: 3rem;
      height: 3rem;
    }
  }

  .buttonBuy {
    background: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
  }

  > nav, > div {
    display: none;
  }

  @media(min-width: 1000px) {
    display: flex;
    flex-direction: column;

    .buttons {
      display: none;
    }

    > nav {
      display: flex;
      margin-top: 12rem;
    }

    > div {
      display: flex;
      align-self: center;
    }
  }
`;

export const Main = styled.main`
  height: calc(100% - 16rem);
  padding-bottom: 4rem;
  margin-top: 12rem;

  overflow-x: hidden;
  overflow-y: auto;

  > h2 {
    display: none;
  }

  .about, .description, .reviews {
    margin: 0 1rem;
  }

  img {
    width: 100%;
    height: 42rem;
    object-fit: cover;
  }

  .swiper > button {
    display: none;
  }

  .swiper-pagination {
    height: 17rem;
    position: absolute;
    top: 1rem;
    left: 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 2;

    > span {
      opacity: 1;
      width: 4rem;
    }
  }

  .about {
    margin-bottom: 2rem;

    > div {
      font-size: 1.2rem;
      display: flex;
      gap: 1rem;

      position: relative;

      > :first-child {
        text-decoration: line-through;
        font-weight: 300;
      }

      > :nth-child(2) {
        font-weight: 400;
      }

      .boxStars {
        position: absolute;
        right: 1rem;
      }
      
    }

    > h2 {
      font-size: 1.5rem;
    }

    > button {
      display: none;
    }
  }

  .boxStars {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > span {
      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  .description {
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .reviews {
    padding: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;

    h1 {
      color: ${({ theme }) => theme.COLORS.BLACK};
      font-size: 1.5rem;
      font-weight: 400;
      padding-bottom: 0.5rem;
    }

    > button {
      font-size: 1.2rem;
      align-self: center;

      svg {
        width: 1.5rem;
        height: 1.5rem
      }
    }
  }

  .recommended {
    padding: 0 1rem;

    > section {
      font-size: 0.9rem;
      padding: 0 1rem;
      margin-bottom: 2rem;
      h1 {
        font-weight: 500;
      }
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 2rem;
      overflow-x: auto;

      &::-webkit-scrollbar {
        background: none;
      }
      
      > button {
        width: 10rem;

        h2 {
          font-size: 1rem;
        }

        .promotion {
          width: 8.5rem;
        }
      }
    }

    img {
      width: 10rem;
      height: 10rem;
    }
  }

  > footer {
    display: none;
  }

  @media(min-width: 1000px) {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-areas:
      "route route route"
      "none swiper about"
      "description description description"
      "reviews reviews reviews"
      "recommended recommended recommended"
      "footer footer footer";
    grid-template-columns: 1fr 50rem 1.5fr;

    > h2 {
      display: block;
      font-size: 1rem;
      grid-area: route;
      margin: 0.5rem 0 3.1rem 54rem;
    }

    img {
      object-fit: contain;
    }

    .swiper {
      width: 50rem;
      grid-area: swiper;

      > button {
        display: block;
        position: absolute;
        top: 0;
        left: 10rem;
        z-index: 2;
      }
    }

    .swiper-pagination {
      height: 23rem;

      > span {
        width: 5rem;
      }
    }

    .about {
      grid-area: about;
      width: 30rem;
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      gap: 5rem;

      position: relative;

      > div .boxStars {
        bottom: -4rem;
        left: 0;
      }

      > h2 {
        position: absolute;
        top: -3rem;
      }

      > button {
        display: flex;
        height: 4rem;
      }
    }

    .description {
      grid-area: description;
      font-size: 1.5rem;
      flex-direction: row;
      gap: 8rem;
      padding: 2rem;
      margin: 8rem 10rem 0 10rem;
    }

    .reviews {
      grid-area: reviews;
      font-size: 1.5rem;
      padding: 2rem;
      margin: 0 10rem;

      h1, span {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.6rem;
      }

      > button {
        font-size: 1.6rem;
        margin-top: 4rem;
      }
    }

    .recommended {
      grid-area: recommended;
      margin: 0 10rem 5rem 10rem;

      > section {
        font-size: 1rem;
        margin: 5rem 0 8rem 0;
      }

      > div {
        gap: 6rem;
      }

      > div > button {
        width: 16rem;

        h2 {
          font-size: 1.5rem;
        }

        .promotion {
          width: 12.5rem;
        }
      }

      img {
        width: 16rem;
        height: 16rem;
      }
    }

    > footer {
      display: grid;
      grid-area: footer;
    }
  }
`;