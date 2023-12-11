import styled from "styled-components";

export const Container = styled.div`
  .carrossel-imgs {
    height: 12rem;
    padding-bottom: 2rem;

    img {
      width: 100%;
      height: 150%;
      object-fit: contain;
    }
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
      width: 92rem;
      height: 25rem;

      img {
        object-fit: cover;
      }
    }

    .swiper-pagination-bullet {
      height: 1rem;
      width: 1rem;
    }

    .swiper-nav {
      width: 96rem;
      padding-left: 4.5rem;
      margin: 2rem 0 5rem;
    }
    
    button > h2 {
      font-size: 1.8rem;
      width: 12rem;
    }
  }
`;