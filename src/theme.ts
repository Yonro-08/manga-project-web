export type themeProps = {
  colors: {
    fillLogo: string;
    bgPrimary: string;
    bgPaper: string;
    bgInverse: string;
    primary: string;
    textPrimary: string;
    textSecondary: string;
    textOnPrimary: string;
  };
  font: string;
};

const theme = {
  font: "Exo 2",
  colors: {
    primary: "#1976d2",
    textOnPrimary: "#fff",
  },
};

const darkTheme: themeProps = {
  ...theme,
  colors: {
    fillLogo: "white",
    bgPrimary: "#121212",
    bgPaper: "#171717",
    bgInverse: "#fff",
    textPrimary: "#f5f5f5",
    textSecondary: "hsla(0, 0%, 100%, 0.64)",
    ...theme.colors,
  },
};
const lightTheme: themeProps = {
  ...theme,
  colors: {
    fillLogo: "black",
    bgPrimary: "#f7f7f7",
    bgPaper: "#fff",
    bgInverse: "#323232",
    textPrimary: "rgba(0, 0, 0, 0.87)",
    textSecondary: "rgba(0, 0, 0, 0.7)",
    ...theme.colors,
  },
};

export { darkTheme, lightTheme };
