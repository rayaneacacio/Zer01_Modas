import styled from "styled-components";

export const Container = styled.div`
  
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};

    label {
      font-size: 1.6rem;
      padding-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    > label, > label > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      width: 40%;
    }
  }

  > div > input {
    width: 30%;
  }

  #input-color {
    width: 2.5rem;
  }

  #input-image, #input-newImage {
    display: none;
  }

  > div > button {
    padding-bottom: 1rem;
  }
`;