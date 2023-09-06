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
`;