import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > p {
    font-size: 1.6rem;
    margin: 1rem 0 -2rem 0;
  }

  > label {
    font-size: 1.6rem;;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  }

  select {
    width: 15%;
  }

  .tags {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .textarea {
    width: 100%;
    margin-top: 1.5rem;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    textarea {
      font-size: 1.6rem;
      width: 100%;
      height: 4rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
      margin-top: 1rem;
    }
  }
`;