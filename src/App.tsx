import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { useThemeZustand } from "hooks/zustand/useThemeZustand";
import GlobalStyle from "./GlobalStyle";
import { AppNavigation } from "./navigation/AppNavigation";
import { darkTheme, lightTheme } from "./theme";

const queryClient = new QueryClient();

const App = () => {
  const { theme } = useThemeZustand();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={AppNavigation} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
