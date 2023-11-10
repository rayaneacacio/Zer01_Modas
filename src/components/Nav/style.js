import styled from "styled-components";

export const Container = styled.nav`
  background: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 11.4rem;

  > :first-child {
    padding-left: 2rem;
  }

  button {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: 1.3rem;
  }

  .swiper {
    z-index: 0;
  }

  .swiper-wrapper {
    align-items: center;
  }

  @media(min-width: 1000px) {
    > :first-child {
      padding: 2rem;
    }

    .swiper-wrapper {
      width: 80rem;
    }

    .swiper-slide {
      text-align: center;
    }
    
    button {
      font-size: 1.5rem !important;
    }
  }
`;