import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: boolean;
    background: string;
    text: string;
  }
}
