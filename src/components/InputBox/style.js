import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 3.7rem;
  padding: 1.3rem 1.5rem 1.3rem 3rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h3 {
    font-weight: 400;
  }

  @media(min-width: 1000px) {
    height: 4.2rem;
  }
`;