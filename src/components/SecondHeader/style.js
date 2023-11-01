import styled from "styled-components";

export const Container = styled.header`
  > header > div > img  {
    display: none;
  }

  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    position: absolute;
    top: 3.2rem;
    z-index: 1;
    display: none;

    svg {
      height: 3.5rem;
      width: 2.5rem;
    }
  }

  @media(min-width: 1000px) {
    > header > :nth-child(2) {
      padding-top: 1.5rem;

      img {
        display: block;
      }

      .input {
        display: flex;
      }
    }

    > button {
      color: ${({ theme }) => theme.COLORS.BLACK};
      top: 17rem;
      left: 3rem;
      display: block;
      
      svg {
        width: 2.5rem;
      }
    }
  }
  
  @media(min-width: 1400px) {
    > button {
      left: 20rem;
    }
  }
`;