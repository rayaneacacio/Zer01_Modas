import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  display: flex;
  flex-direction: column;
  gap: 4rem;

  > p {
    font-size: 1.6rem;
    margin: 1rem 0 -2rem 0;
  }

  > label {
    font-size: 1.6rem;;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  }

  #sizeLabel {
    margin-top: 2rem;
  }

  select {
    width: 20%;
    margin-left: 1rem;
    cursor: pointer;
  }

  .tags {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .textarea {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    textarea {
      font-size: 1.6rem;
      width: 100%;
      height: 3rem;
      margin-top: 1rem;
    }
  }
`;