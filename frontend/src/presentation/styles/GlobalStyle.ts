import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.font.sans};
    color: ${({ theme }) => theme.colors.text};
    background: linear-gradient(
      165deg,
      ${({ theme }) => theme.colors.bg} 0%,
      ${({ theme }) => theme.colors.bgGradientEnd} 45%,
      #e0e7ef 100%
    );
    background-attachment: fixed;
  }

  #root {
    min-height: 100vh;
  }
`;
