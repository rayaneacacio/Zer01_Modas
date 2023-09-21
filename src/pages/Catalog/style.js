import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > nav {
    margin-top: 12rem;
  }

  > div {
    height: 8rem;
    padding: 1rem 1rem 0 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .buttonDisplayRange {
    height: 100%;
    margin-left: 9rem;
    transform: translateX(1rem);
  }

  .range {
    width: 15rem;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    transform: translateX(2rem);
    animation: toLeft 0.5s forwards;

    display: none;

    > span {
      position: absolute;
      top: -8px;

      > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        transform: rotateX(180deg);
        height: 2rem;
        width: 3.5rem;
      }

      > p {
        font-size: 1.4rem;
        font-weight: bold;
        position: absolute;
        top: 7px;
      }
    }

    > input {
      width: 100%;
      margin: 1.5rem 1rem 0 0;
      cursor: pointer;

      &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        /* height: 5px; */
      }

      /* &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: blue;
      } */
    }
  }

  .rangeButton {
    color: ${({ theme }) => theme.COLORS.PURPLE};
    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 1.3rem;
    width: 15rem;
  }
`;

export const Main = styled.main`
  height: calc(100% - 25rem);
  overflow-y: auto;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem;
  }
`;