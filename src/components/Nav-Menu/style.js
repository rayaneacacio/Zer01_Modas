import styled from "styled-components";

export const Container = styled.aside`
  background: ${({ theme }) => theme.COLORS.BLACK};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 2rem;

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
    left: 2%;
    padding-top: 4rem;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    > button {
      font-size: 1.6rem;
      width: 100%;
    }
    
    .buttonsOnlyMobile {
      display: none;
    }
  }
`;