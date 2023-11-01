import { styled } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  > button {
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