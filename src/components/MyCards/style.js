import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .card {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

    > h2 {
      font-size: 1.7rem;
    }

    > div {
      display: flex;
      justify-content: space-between;
    }

    > div > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media(min-width: 1000px) {
    .card {
      width: 60%;
      flex-direction: row;
      gap: 5rem;

      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
      border-radius: 8px;

      > h2 {
        padding-top: 1rem;
      }

      > div {
        width: 70%;
      }

      > div > div {
        gap: 1rem;
      }
    }
  }
`;