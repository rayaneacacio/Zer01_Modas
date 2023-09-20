import styled from "styled-components";

export const Container = styled.div`

  .carrossel-imgs {
    height: 12rem;

    img {
      width: 100%;
      height: 100%;
      padding: 0 3rem;

      object-fit: cover;
    }
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.COLORS.BLACK};
  }

  .swiper-nav {
    padding-left: 1rem;
    margin: 1.3rem 0 2rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 3rem;
      height: 3rem;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.BLACK};
      font-family: ${({ theme }) => theme.FONTS.TITLE};
      font-size: 1.4rem;
      text-align: initial;
      width: 9rem;
    }
  }

  @media(min-width: 1000px) {
    .carrossel-imgs {
      width: 98rem;
      height: 25rem;
    }

    .swiper-pagination-bullet {
      height: 1rem;
      width: 1rem;
    }

    .swiper-nav {
      padding-left: 4.5rem;
      margin: 2rem 0 5rem;
    }

    button > h2 {
      font-size: 1.8rem;
      width: 12rem;
    }
  }
`;