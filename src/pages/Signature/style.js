import { styled } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLACK};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  
  > div {
    background: ${({ theme }) => theme.COLORS.WHITE};
    height: calc(100% - 3.5rem);
    margin-top: 3.5rem;
  }

  > div > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    position: absolute;
    top: 6rem;
  }

  .body-modal > div, .body-modal > button {
    opacity: 0;
    transform: translateX(-1rem);
    animation: toRight 0.5s forwards;
  }
`;