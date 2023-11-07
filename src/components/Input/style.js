import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border-bottom: 1px solid black;

  h3 {
    font-weight: 400;
  }

  > div {
    font-size: 1.6rem;
    width: 100%;
    display: flex;
    gap: 0.5rem;

    input, span {
      padding: 1rem 0;
    }

    input {
      width: 100%;
    }
  }

  /* input {
    width: 100%;
    padding: 1rem 0;
  } */
  
  @media(min-width: 1000px) {
    h3, div, input {
      font-size: 1.7rem;
    }
  }
`;