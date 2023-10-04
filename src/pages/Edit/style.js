import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.COLORS.PURPLE};
    margin: 3rem 5rem;
  }

  > div, > button {
    margin: 0 5rem;
  }

  > button {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem;
    margin-top: 5rem;
  }

  > button:last-of-type {
    background: ${({ theme }) => theme.COLORS.RED};
    margin-top: 2rem;
  }
`;