import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

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

  .slides {
    display: flex;

    img {
      width: 100%;
      height: 42rem;
      object-fit: cover;
    }

    .previews {
      background: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem 0 0 1rem;

      img {
        width: 5rem;
        height: 7rem;
      }
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

      .stars {
        position: absolute;
        right: 1rem;
      }
    }

    > h2 {
      font-size: 1.5rem;
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

    h2 {
      color: ${({ theme }) => theme.COLORS.BLACK};
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;