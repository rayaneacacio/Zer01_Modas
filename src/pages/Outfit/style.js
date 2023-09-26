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
`;

export const Main = styled.main`
  height: calc(100% - 16rem);
  padding-bottom: 4rem;
  margin-top: 12rem;
  overflow-y: auto;

  .about, .description, .reviews {
    margin: 0 1rem;
  }

  img {
    width: 100%;
    height: 42rem;
    object-fit: cover;
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
`;