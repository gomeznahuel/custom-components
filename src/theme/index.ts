import { createGlobalStyle } from "styled-components";

export const Theme = {
  colors: {
    primary: "#474341",
    secondary: "#F5F5F5",
    accent: "#FC9A1D",
    success: "#00C853",
    warning: "#FFC107",
    error: "#D50000",
  },
  fonts: {
    primary: "Poppins",
    secondary: "Roboto",
  },
  fontSizes: {
    small: "1.2rem",
    medium: "1.4rem",
    large: "1.6rem",
    xlarge: "2rem",
    xxlarge: "2.4rem",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
  }

  html {
      font-size: 62.5%;
  }

  body {
      font-family: ${Theme.fonts.primary};
      font-size: ${Theme.fontSizes.medium};
      font-weight: ${Theme.fontWeights.regular};
  }

  h1, h2, h3, h4, h5, h6 {
      font-family: ${Theme.fonts.secondary};
      font-weight: ${Theme.fontWeights.bold};
  }

  a {
      color: ${Theme.colors.primary};
      text-decoration: none;
  }

  a:hover {
      color: ${Theme.colors.accent};
  }
`;
