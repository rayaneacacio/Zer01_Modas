import { styled } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLACK};
  overflow: hidden;
  
  > div {
    background: ${({ theme }) => theme.COLORS.WHITE};
    height: 100vh;
  }

  > div > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    position: absolute;
    top: 2rem;
  }

  .body-modal > div, .body-modal > button {
    opacity: 0;
    transform: translateX(-1rem);
    animation: toRight 0.5s forwards;
  }
`;