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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  > p {
    grid-area: name;
    text-transform: uppercase;
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

  @media(min-width: 1000px) {
    font-size: 1.5rem;
    
    > button:first-of-type > svg {
      width: 1.8rem;
      height: 1.8rem;
    }
    
    > button:last-of-type > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;