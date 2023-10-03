import styled from "styled-components";

export const Container = styled.aside`
  background: ${({ theme }) => theme.COLORS.BLACK};

  display: flex;
  flex-direction: column;
  gap: 3rem;

  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    padding-left: 1.5rem;

    opacity: 0;
    animation: forBottom 0.5s forwards 0.1s;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media(min-width: 1000px) {
    width: 20rem;
    height: 25rem;

    position: absolute;
    top: 2.5rem;
    left: -5rem;
    padding-top: 4rem;

    gap: 1rem;

    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    > button {
      font-size: 1.6rem;
      width: 100%;
    }

    dialog {
      background: rgba(8, 8, 8, 0.64);

      position: fixed;
      top: 0;
      left: 0;

      > div {
        width: 100%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;
        transform: translateY(2rem);
        animation: toTop 0.5s forwards;

        > div{
          background: ${({ theme }) => theme.COLORS.WHITE};
          position: relative;
          width: 40rem;
          height: 63rem;

          box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
      }
    }

    .buttonClose {
      background: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      position: absolute;
      top: 2.5rem;
      right: 2rem;
    }
  }
`;