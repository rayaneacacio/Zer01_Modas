import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  img {
    width: 20rem;
    height: 20rem;
  }
  
  @media(min-width: 1000px) {
    font-size: 1.6rem !important;
  }
`;