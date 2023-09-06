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
    font-size: 1.5rem;
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
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

`;