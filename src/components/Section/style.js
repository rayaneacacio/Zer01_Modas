import styled from "styled-components";

export const Container = styled.section`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;

  h1 {
    text-align: center;
    white-space: nowrap;
  }

  div {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  }
  
  @media(min-width: 1000px) {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`;