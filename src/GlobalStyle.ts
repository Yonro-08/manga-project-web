import { createGlobalStyle } from "styled-components";

import "@fontsource-variable/exo-2";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Exo 2 Variable', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

@media (max-width: 1024px) {
  .mangaSimilar {
    display: none;
  }
}
`;

export default GlobalStyle;
