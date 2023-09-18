import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;

  overflow: hidden;

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
      display: flex;
      align-items: center;

      > svg {
        width: 3rem;
        height: 3rem;
      }
    }

    > h3 {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-size: 2rem;
      margin-left: 1rem;
    }
  }

  footer {
    height: 9rem;
    margin-top: 2rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 20.3rem);
  margin-top: 21rem;

  opacity: 0;
  transform: translateX(-0.5rem);
  animation: toRight 0.5s forwards;

  overflow-x: hidden;
  overflow-y: auto;

  .info {
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.2rem;

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

  .compra {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    > span {
      display: flex;
      justify-content: space-between;
    }

    .value {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
    }
  }

  > button {
    background: ${({ theme }) => theme.COLORS.GRAY_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 95%;
    padding: 1rem;
    margin: 1rem;
  }
`;