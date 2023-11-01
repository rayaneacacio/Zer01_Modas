import styled from "styled-components";

import img_background from "../../assets/background-main-card-secao-novidades.jpg";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.BLACK};

  > main {
    background: url(${img_background});
    background-size: 200%;
    background-position-x: center;
    background-position-y: initial;
    width: 23rem;
    height: 26rem;
    position: relative;

    h2 {
      font-weight: 700;
      position: absolute;
      top: 5.5rem;
      font-size: 1rem;
    }

    p {
      letter-spacing: 0.4rem;
      position: absolute;
      top: 7rem;
      font-size: 0.6rem;
    }

    span {
      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.1rem;
      padding: 0.5rem 1.2rem;
      position: absolute;
      top: 4rem;
      right: 0;
    }
  }
  
  > button {
    color: ${({ theme }) => theme.COLORS.BLACK};
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 10rem;
      height: 10rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    span {
      font-size: 1.2rem;
    }
  }

  @media(min-width: 1000px) {
    > main {
      width: 42rem;
      height: 50rem;

      h2 {
        font-size: 1.7rem;
        top: 9rem;
        left: 1.2rem;
      }

      p {
        font-size: 1.2rem;
        top: 11rem;
        left: 1rem;
        letter-spacing: 0.6rem;
      }

      span {
        font-size: 1.7rem;
        top: 7rem;
        right: 2rem;
        padding: 1rem 1.5rem;
      }
    }

    > button {
      img {
        width: 20rem;
        height: 20rem;
      }

      h2 {
        font-size: 1.8rem;
      }
      
      span {
        font-size: 1.4rem;
      }
    }
  }
`;