import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: ${({ theme }) => theme.FONTS.DEFAULT};
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 1.3rem;

    overflow: hidden;

    scroll-behavior: smooth;
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-weight: 300;
  }

  a {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input {
    font-family: ${({ theme }) => theme.FONTS.DEFAULT};
    font-size: 1.5rem;

    width: 90%;

    outline: 0;

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  button {
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.DEFAULT};
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.COLORS.BLACK};
  }

  @keyframes toTop {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes forBottom {
    to {
      opacity: 1;
      transform: translateY(0.2rem);
    }
  }

  @keyframes rotate180 {
    to {
      transform: rotateX(180deg);
    }
  }

  @keyframes toRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes toLeft {
    to {
      transform: translateX(-1rem);
    }
  }
`;