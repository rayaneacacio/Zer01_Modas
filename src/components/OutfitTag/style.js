import styled from "styled-components";

export const Container = styled.div`
  div {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
    display: flex;
    align-items: center;
  }
  
  .boxNewTag {
    width: 70%;
  }
  
  input, button {
    background: none;
  }
`;