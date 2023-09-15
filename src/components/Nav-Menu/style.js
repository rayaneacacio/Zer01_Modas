import styled from "styled-components";

export const Container = styled.aside`
  background: ${({ theme }) => theme.COLORS.BLACK};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;

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

  @media(min-width: 1000px) {
    width: 20rem;
    height: 21rem;

    position: absolute;
    top: 3rem;
    left: -6rem;
    padding-top: 4rem;

    gap: 1rem;

    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    > button {
      font-size: 1.6rem;
      width: 100%;
    }
  }
`;