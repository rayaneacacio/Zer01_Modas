import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  margin: 1rem;

  .mobile, .desktop {
    width: 120%;
    height: 10rem;
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    .select {
      background: none;
      width: 1.8rem;
      height: 100%;
      padding: 0;
      align-self: center;
       
      svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
       }
    }

    > img {
      height: 100%;
      cursor: pointer;
    }

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      > :last-child {
        padding-top: 1rem;
      }
    }
  }

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
    height: 2.5rem;
    overflow: hidden;
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

  .divCount {
    display: flex;
    justify-content: space-between;

    > span {
      display: flex;

      > h3:nth-of-type(2) {
        width: 3rem;
        text-align: center;
      }
    }

    button {
      background: none;
      width: 3rem;
      height: 2.5rem;

      svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
        width: 1.5rem;
        height: 1.5rem;
      }
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
      height: 11rem;
      display: flex;
      position: relative;

      > div {
        width: 50%;
        gap: 1rem;

        > :last-child {
          padding: 0;
        }
      }

      .divCount button {
        width: 5rem;
        height: 2.5rem;
      }

      .title {
        height: 2rem;
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

  @media(min-width: 1400px) {
    .desktop > div {
      width: 80%;
    }
  }
`;