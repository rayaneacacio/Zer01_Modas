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

  input, textarea, select {
    font-family: ${({ theme }) => theme.FONTS.DEFAULT};
    font-size: 1.5rem;
    width: 90%;
    outline: 0;
    resize: none;

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

  main {
    height: calc(100% - 11rem);
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0;
    transform: translateX(-0.5rem);
    animation: toRight 0.5s forwards;
    align-content: space-between;
    justify-content: space-between;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.COLORS.BLACK};
  }

  & ::-webkit-scrollbar {
    background: white;
    width: 1.3rem;
  }

  & ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 10px;
    border: 0.3rem solid white;
  }

  dialog {
    background: rgba(8, 8, 8, 0.64);
  }

  .divLoading {
    background: linear-gradient(to right, ${({ theme }) => theme.COLORS.WHITE}, rgb(15 32 40 / 0.44), ${({ theme }) => theme.COLORS.GRAY_200} );
    background-size: 400% 400%;

    animation: loading 2s ease infinite;
    
    cursor: progress;
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

  @keyframes ErrorMessageAnimation {
    to {
      opacity: 1;
      transform: translateY(1.5rem);
    }
  }

  @keyframes loading {
    
    /* from {
      opacity: 1;
    }

    to {
      opacity: 0.5;
    } */

    to {
      background-position: 0% 0%;
    }

    from {
      background-position: 135% 0%;
    }
  }
`;