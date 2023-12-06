import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  font-size: 1.6rem;

  > h3 {
    margin: 14rem 3rem 0;
  }

  h3, h2 {
    font-size: 2rem;
  }

  @media(min-width: 1000px) {
    > h3 {
      margin: 18rem 20rem 0;
    }
  }

  @media(min-width: 1400px) {
    > h3 {
      margin-left: 25rem;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  > div {
    margin: 3rem;
  }

  .value {
    background: ${({ theme }) => theme.COLORS.GRAY_200};
    font-weight: bold;
    height: 6rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    > span {
      width: 25%;
      text-align: center;
    }
  }

  .more {
    display: grid;
    grid-template-areas: "img title" "img tags";
    justify-content: start;
    gap: 1rem;
    margin: 2rem 0 5rem;

    > img {
      width: 13rem;
      height: 16rem;
      grid-area: img;
    }

    > h3 {
      grid-area: title;
      font-size: 1.7rem;
    }

    > div {
      grid-area: tags;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  textarea {
    background: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 100%;
    height: 10rem;
    border-radius: 8px;
    padding: 1rem;
  }

  svg {
    width: 2.3rem;
    height: 2.3rem;
  }

  .comment {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    padding: 0;
  }

  .buttonComment {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem;
    margin-top: 2rem;
  }

  @media(min-width: 1000px) {
    height: calc(100% - 23rem);
    margin-top: 4rem;
    font-size: 1.7rem;

    > div {
      margin: 0 20rem 0 25rem;
    }
  }
`;