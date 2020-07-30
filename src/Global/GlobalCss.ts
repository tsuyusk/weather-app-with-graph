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
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
  button {
    cursor: pointer;
  }
`;
