export type themeProps = {
  colors: {
    fillLogo: string;
    bgPrimary: string;
    bgBurger: string;
    bgPaper: string;
    bgInverse: string;
    primary: string;
    textPrimary: string;
    textSecondary: string;
    textOnPrimary: string;
    warning: string;
  };
  border: string;
};

const theme = {
  colors: {
    primary: "#1976d2",
    textOnPrimary: "#fff",
    warning: "#ff9800;",
  },
  border: "1px solid hsla(0, 0%, 59%, 0.1)",
};

const darkTheme: themeProps = {
  ...theme,
  colors: {
    fillLogo: "white",
    bgPrimary: "#121212",
    bgBurger: "#171717",
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
    bgBurger: "#222223",
    bgPaper: "#fff",
    bgInverse: "#323232",
    textPrimary: "rgba(0, 0, 0, 0.87)",
    textSecondary: "rgba(0, 0, 0, 0.7)",
    ...theme.colors,
  },
};

export { darkTheme, lightTheme };
