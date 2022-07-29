import { Router } from "./Router/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "./theme";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};
