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

    .boxButtons {
      justify-content: flex-end;
      margin-top: 0.1rem;
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