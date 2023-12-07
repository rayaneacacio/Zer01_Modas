import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  .buttons {
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

  .buttonBuy, .buttonEdit {
    background: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 4rem;
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
  padding-bottom: 15rem;
  margin-top: 11rem;

  > h2 {
    text-transform: lowercase;
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

    > :first-child {
      font-size: 1.2rem;
      position: relative;
    }

    .promotion {
      display: flex;
      align-items: flex-end;
      gap: 1rem;

      > :first-child {
        color: ${({ theme }) => theme.COLORS.PURPLE};
        font-weight: 400;
      }

      > :nth-child(2) {
        font-size: 1.6rem;
        font-weight: 300;
        text-decoration: line-through;
      }

      > div {
        background: #f2f2f2;
        color: ${({ theme }) => theme.COLORS.PURPLE};
        font-size: 1.4rem;

        p {
          width: 4.5rem;
          text-align: center;
        }
      }
    }

    .boxStars {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      position: absolute;
      right: 1rem;
      top: 19rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .outfit-size, .outfit-color {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > div {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    .outfit-color {
      button {
        width: 2rem;
        height: 2rem;
        border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
      }
    }

    .outfit-size {
      button {
        background: none;
        color: ${({ theme }) => theme.COLORS.BLACK};
        padding: 1.5px 13px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
        border-radius: 2rem;
      }

      .chosenSize {
        font-weight: bold;
        border: 1.5px solid ${({ theme }) => theme.COLORS.BLACK};
      }
    }

    > button {
      display: none;
    }
  }

  .boxScore {
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

    .routeInfo {
      text-transform: lowercase;
      margin-bottom: 1rem;
    }
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
      gap: 2rem;
      overflow-x: auto;

      &::-webkit-scrollbar {
        display: none;
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
      gap: 3rem;
      position: relative;

      > :first-child {
        margin-top: 3rem;
      }

      > div {
        height: 5rem;
      }

      > h2 {
        position: absolute;
        top: -3rem;
      }
      
      > button {
        display: flex;
        height: 4rem;
      }

      .outfit-size, .outfit-color {
        padding: 0;
      }
    }

    .boxStars {
      bottom: -3rem;
      top: 1rem !important;
      left: 0;
    }

    .description {
      grid-area: description;
      font-size: 1.5rem;
      flex-direction: row;
      gap: 8rem;
      padding: 2rem;
      margin: 8rem 10rem 0 10rem;

      > :first-child{
        width: 35%;
      }

      > div:nth-of-type(2) {
        margin-top: 1.8rem;
      }

      .routeInfo {
        display: none;
      }
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
      
      > :nth-child(3) {
        margin: 1.8rem 0;
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