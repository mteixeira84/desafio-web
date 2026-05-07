import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppDependenciesProvider } from "./presentation/context/AppDependenciesContext";
import { App } from "./presentation/App";
import { GlobalStyle } from "./presentation/styles/GlobalStyle";
import { theme } from "./presentation/styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppDependenciesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppDependenciesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
