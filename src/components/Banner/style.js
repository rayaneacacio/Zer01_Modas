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
      font-size: 1.5rem;
      text-align: initial;
      width: 10rem;
    }
  }
`;