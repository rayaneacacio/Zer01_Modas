import styled from "styled-components";

export const Container = styled.div`
  .body-modal {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  .body-modal > :first-child {
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
    height: 7rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
    margin: 0 0 13rem 0;

    display: flex;
    align-items: center; 
    justify-content: center;
  }

  .body-modal > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 0 5rem;
  }

  .boxInput {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    height: 6rem;

    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};

    > input {
      width: 100%;
      padding: 1rem 0;
    }
  }

  button {
    width: 80%;
    height: 4rem;
    align-self: center;
  }

  button:first-of-type {
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 5rem;
  }

  @media(min-width: 1000px) {
    .body-modal > :first-child {
      margin-bottom: 7rem;
    }
  }
`;