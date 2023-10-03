import styled from "styled-components";

export const Container = styled.div`
  .body-modal {
    background: ${({ theme }) => theme.COLORS.BLACK};
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    overflow: hidden;
  }
  
  .body-modal > :first-child {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
    height: 8.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;

    display: flex;
    align-items: flex-end; 
    justify-content: center;
  }

  .body-modal > :nth-child(2) {
    background: ${({ theme }) => theme.COLORS.WHITE};
    height: calc(100% - 10.5rem);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-top: 6rem;
  }

  .boxInput {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 0 5rem;
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
    .body-modal {
      height: 100%;
    }

    .body-modal > :first-child {
      height: 5rem;
      padding: 0;
    }
  }
`;