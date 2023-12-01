import styled from "styled-components";

export const Container = styled.div`
  > h2 {
    margin-bottom: 4rem;
  }
  
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }

  > div:first-of-type {
    margin-bottom: 5rem;


    button {
      margin-top: 2rem;
      margin-left: -2rem;
    }
  }

  > div > div {
    display: flex;
    align-items: center;
  }

  span {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  }

  .divInputsCoupons {
    width: 27rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    gap: 1rem;
    position: relative;
    border-radius: 6px;

    h2 {
      font-size: 1.6rem;
    }

    input {
      background: ${({ theme }) => theme.COLORS.GRAY_200};
      width: 100%;
      padding: 0.5rem 1rem;
      border-radius: 6px;
    }
  }
`;