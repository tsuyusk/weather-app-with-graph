import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
