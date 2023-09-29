import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  display: grid;
  grid-template-areas:
    "buttonCheck name buttonEdit"
    "buttonCheck addressInfo buttonEdit";
  justify-content: start;
  grid-template-columns: 1fr 6fr;
  row-gap: 0.5rem;
  
  cursor: pointer;

  > p {
    grid-area: name;
  }

  > button:first-of-type {
    grid-area: buttonCheck;
  }

  > div {
    grid-area: addressInfo;
  }

  > button:last-of-type {
    grid-area: buttonEdit;
  }

  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`;