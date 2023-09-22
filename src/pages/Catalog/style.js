import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > header > :nth-child(2) {
    padding-top: 0.5rem;

    img {
      display: none;
    }

    .input {
      display: none;
    }
  }

  > button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    position: absolute;
    top: 3rem;

    svg {
      height: 3.5rem;
    }
  }

  .buttonSearch {
    right: 1.5rem;
    svg { height: 3rem; }
  }

  > nav {
    margin-top: 12rem;
  }
`;

export const Main = styled.main`
  height: calc(100% - 17rem);
  overflow-y: auto;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: start;
    gap: 2rem;
    column-gap: 0;
    padding: 1rem;

    opacity: 0;
    transform: translateX(-1rem);
    animation: toRight 0.5s forwards;
  }
`;