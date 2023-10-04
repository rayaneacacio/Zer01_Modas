import styled from "styled-components";

export const Container = styled.div`
  
  > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};

    label {
      font-size: 1.6rem;
      width: 40%;
      padding-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > label, > label > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

  > div > input {
    width: 30%;
    padding-bottom: 1rem;
  }

  #input-color {
    width: 2.5rem;
    padding: 0;
  }

  #input-image {
    display: none;
  }

  > div > button {
    padding-bottom: 1rem;
  }
`;