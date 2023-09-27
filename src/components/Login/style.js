import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > :first-child {
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    height: 7rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
    margin: 0 0 7rem 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    h3 {
      font-weight: normal;
      text-align: center;
      width: 100%;
    }
  }

  > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 0 5rem;
  }

  .boxInput {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    > input {
      width: 100%;
      padding-bottom: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
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
`;