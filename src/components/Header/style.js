import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  
  position: absolute;
  top: 0;

  > :first-child {
    background: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 0.8rem;

    width: 100%;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    position: relative;

    ul {
      display: flex;
      gap: 1.5rem;
    }
  }

  > :nth-child(2) {
    background: ${({ theme }) => theme.COLORS.BLACK};

    width: 100%;
    height: 10rem;

    padding: 1.5rem;

    display: grid;
    grid-template-areas: "logo buttons" "input input";
    align-items: center;
    justify-content: space-around;
    row-gap: 0.5rem;

    > img {
      grid-area: logo;
      width: 10rem;
      height: 3.2rem;
    }
  }

  .boxButtons {
    grid-area: buttons;

    display: flex;
    gap: 1.1rem;

    > aside {
      display: none;
    }

    > button {
      width: 3.2rem;
      position: relative;

      span {
        background: ${({ theme }) => theme.COLORS.PURPLE};

        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;

        position: absolute;
        right: -2px;
        top: 13px;
      }
    }
  }

  .firstButton {
    width: 9.3rem !important;

    padding-left: 1.3rem;
        
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      animation: ${({ $pathname }) => $pathname === "/" && "rotate180 0.3s reverse forwards"};
    }
  }

  .input {
    grid-area: input;
  }

  .buttonBackHome {
    display: none;
  }
  
  @media(min-width: 1000px) {
    > :first-child {
      font-size: 1.3rem;
      justify-content: center;

      ul {
        position: absolute;
        right: 11.1rem;
        gap: 3.9rem;
      }
    }

    > :nth-child(2) {
      height: 9.9rem;

      grid-template-columns: 1fr 52.1rem 1fr;
      grid-template-areas: "logo input buttons";
      justify-items: center;

      > img {
        width: 15.4rem;
        height: 5.1rem;
      }
    }

    .boxButtons {
      position: relative;
      z-index: 2;
      gap: 3rem;

      > button {
        z-index: -1;
      }

    }

    .firstButton {
      font-size: 1.7rem;
      width: 11.3rem !important;
    }

    .buttonBackHome {
      display: block;
      background: none;
      height: 5.5rem;

      svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`;