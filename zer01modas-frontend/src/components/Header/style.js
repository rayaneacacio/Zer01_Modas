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
    justify-content: space-between;
    row-gap: 0.5rem;

    > img {
      grid-area: logo;
      width: 9rem;
      height: 3.2rem;
      padding-left: 1rem;
    }

    > img, .input {
      margin-left: 2rem;
    }
  }

  .boxButtons {
    grid-area: buttons;
    height: 3rem;
    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.1rem;

    > aside {
      display: none;
    }

    > button:not(:first-child) {
      width: 3.2rem;
      position: relative;

      span {
        background: ${({ theme }) => theme.COLORS.PURPLE};

        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;

        position: absolute;
        right: -2px;
        top: 2px;
      }
    }
  }

  .firstButton {
    padding-left: 1.3rem;
        
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin: ${({ $isAdmin }) => $isAdmin && "1rem 1.5rem"};

    svg {
      animation: ${({ $pathname }) => $pathname === "/" && "rotate180 0.3s reverse forwards"};
    }
  }

  .input {
    grid-area: input;
    width: 90%;
    height: 3rem;

    > img {
      width: 2.5rem;
      height: 2.5rem;
    }
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
    }

    .input {
      height: 4rem;
    }
  }
`;