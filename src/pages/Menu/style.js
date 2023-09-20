import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLACK};
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > header {
    position: relative;

    > :nth-child(2) {
      padding-top: 0;
      margin-top: 0.4rem;

      .firstButton svg {
        animation: rotate180 0.3s forwards;
      }

      .input {
        display: none;
      }
    }
  }

  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    padding-left: 1.5rem;

    opacity: 0;
    animation: forBottom 0.5s forwards 0.1s;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;