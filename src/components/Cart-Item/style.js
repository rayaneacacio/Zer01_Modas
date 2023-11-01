import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  margin: 1rem;

  .mobile, .desktop {
    width: 120%;
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    .select {
      background: none;
      width: 1.6rem;
      padding: 0;
       
      svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
       }
    }

    > img {
      width: 7rem;
    }

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
  }

  .slide2 {
    width: 50rem;
    height: 10rem;
    padding-left: 7rem;
    display: flex;
    align-items: flex-end;
  }

  button {
    background: ${({ theme }) => theme.COLORS.RED};
    width: 100%;
    height: 10rem;
    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      width: 3rem;
      height: 3rem;
    }
  }

  .desktop {
    display: none;
  }

  @media(min-width: 1000px) {
    .swiper {
      display: none;
    }

    .desktop {
      width: 90%;
      display: flex;
      position: relative;

      .select {
        height: 11rem;
      }

      > img {
        width: 8rem;
      }

      > div {
        gap: 1rem;

        > :first-child {
          width: 25rem;
        }
      }

      span {
        display: flex;
        justify-content: space-between;
      }

      .remove {
        display: block;
        background: none;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        right: 0;
        
        > svg {
          color: ${({ theme }) => theme.COLORS.BLACK};
        }
      }
    }
  }
`;