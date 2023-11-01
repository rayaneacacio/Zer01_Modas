import styled from "styled-components";

export const Container = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding-top: 5rem;
    padding-bottom: 4.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
    position: relative;

    label {
      font-size: 1.6rem;
      padding-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    label, > label > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      width: 40%;
    }
  }

  .new {
    padding-top: 0;
  }

  input {
    font-size: 1.6rem;
    width: 30%;
  }

  #input-color {
    width: 2.5rem;
    cursor: pointer;
  }

  #input-image, #input-newImage {
    display: none;
  }

  button {
    padding-bottom: 1rem;
  }

  .size {
    width: 100%;
    font-size: 1.6rem;
    position: absolute;
    padding-right: 2rem;
    bottom: 2rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    button {
      background: ${({ theme }) => theme.COLORS.PURPLE};
      color: white;
      padding: 1px 13px;
    }
  }

  .new .size button {
    background: ${({ theme }) => theme.COLORS.GRAY_200};
    color: black;
  }

  @media(min-width: 1000px) {
    label, input {
      font-size: 1.7rem;
    }
    
    .size {
      gap: 1.5rem;
      button {
        padding: 1px 20px;
      }
    }
  }
`;