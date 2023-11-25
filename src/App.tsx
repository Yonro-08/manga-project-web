import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle.ts";
import { useAppSelector } from "hooks/redux.ts";
import { AppNavigation } from "./navigation/AppNavigation";

import "./fonts.css";

const App = () => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={AppNavigation} />
    </ThemeProvider>
  );
};

export default App;
