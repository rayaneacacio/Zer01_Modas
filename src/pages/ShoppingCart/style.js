import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;

  overflow-y: hidden;

  > header > :nth-child(2) {
    padding-top: 0.1rem;
    
    .input {
      display: none;
    }
  }

  > div {
    background: white;
    width: 100%;
    padding-bottom: 1rem;

    position: absolute;
    top: 13rem;

    > button {
      color: ${({ theme }) => theme.COLORS.BLACK};
      display: flex;
      font-size: 1.7rem;
      align-items: center;
      margin: 1rem;
    }

    > h3 {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-size: 2rem;
      margin-left: 1rem;
    }
  }

  > footer {
    height: 9rem;
  }
`;

export const Main = styled.main`
  height: calc(100vh - 28.3rem);
  margin-top: 20rem;
  padding: 1rem;

  opacity: 0;
  animation: toRight 0.5s forwards;

  overflow-y: auto;

  > div {
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.3rem;

    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    > svg {
      width: 2rem;
      height: 2rem;
    }
  }

  > span {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > p {
      display: flex;
      justify-content: space-between;
    }

    > h3 {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
    }

    > button {
      background: ${({ theme }) => theme.COLORS.GRAY_700};
      color: ${({ theme }) => theme.COLORS.WHITE};
      padding: 1rem;
    }
  }
`;