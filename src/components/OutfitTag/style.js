import styled from "styled-components";

export const Container = styled.div`
  div {
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
    display: flex;
    align-items: center;
  }
  
  .boxNewTag {
    padding-top: 0;
  }
  
  input, button {
    background: none;
  }
  
  @media(min-width: 1000px) {
    input {
      font-size: 1.7rem;
    }
  }
`;