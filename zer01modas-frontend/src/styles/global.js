import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root {
    background: ${({ theme }) => theme.COLORS.BLACK};
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

  @media(min-width: 1000px) {
    .modal-disconnect {
      background: rgba(8, 8, 8, 0.64);
      position: fixed;
      top: 0;
      z-index: 2;

      > div {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      > div > div {
        background: ${({ theme }) => theme.COLORS.WHITE};;
        color: ${({ theme }) => theme.COLORS.PURPLE};
        width: 40rem;
        height: 18rem;
        font-size: 2rem;
        text-align: center;
        padding-top: 5rem;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        opacity: 0;
        transform: translateY(1rem);
        animation: toTop 0.3s forwards;
      }

      button {
        background: ${({ theme }) => theme.COLORS.GRAY_700};
        font-size: 1.5rem;
        padding: 0.7rem 1.5rem;
        border-radius: 3px;
        margin-top: 3rem;
      }

      button:last-of-type {
        background: ${({ theme }) => theme.COLORS.PURPLE};
        margin-left: 2rem;
      }
    }
  }
`;