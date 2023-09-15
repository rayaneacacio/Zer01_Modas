import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  
  position: absolute;
  top: 0;

  > :first-child {
    background: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.1rem;

    width: 100%;
    height: 3.3rem;

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
    height: 16rem;

    padding: 1.5rem;

    display: grid;
    grid-template-areas: "logo buttons" "input input";
    align-items: center;
    justify-content: space-around;

    > img {
      grid-area: logo;
      width: 20rem;
    }

    .boxButtons {
      grid-area: buttons;

      display: flex;
      gap: 1.1rem;

      .firstButton {
        width: 9.3rem;

        padding-left: 1.3rem;
        
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          animation: ${({ $pathname }) => $pathname === "/" && "rotate180 0.3s reverse forwards"};
        }
      }

      button {
        width: 3.2rem;
        position: relative;

        span {
          background: ${({ theme }) => theme.COLORS.PURPLE};

          width: 1.4rem;
          height: 1.4rem;

          border-radius: 50%;

          position: absolute;
          right: -2px;
          top: 0.9rem;
        }
      }
    }

    .input {
      grid-area: input;
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

      .boxButtons {
        gap: 5.1rem;

        .firstButton {
          font-size: 1.7rem;
          width: 11.3rem;
        }
      }
    }
  }
`;