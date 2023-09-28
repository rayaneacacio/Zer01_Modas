import { styled } from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  opacity: 0;
  transform: translateX(-1rem);
  animation: toRight 0.5s forwards;

  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    position: absolute;
    top: 2rem;
  }
`;