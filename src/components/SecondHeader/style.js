import styled from "styled-components";

export const Container = styled.header`
  > header > :nth-child(2) {
    padding-top: 0.5rem;

    img {
      display: none;
    }

    .input {
      display: none;
    }
  }

  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    position: absolute;
    top: 3rem;

    svg {
      height: 3.5rem;
    }
  }

  .buttonSearch {
    right: 1.5rem;
    svg { 
      height: 3rem; 
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
      left: 20rem;
      svg {
        width: 2.5rem;
      }
    }

    .buttonSearch {
      display: none;
    }
  }
`;