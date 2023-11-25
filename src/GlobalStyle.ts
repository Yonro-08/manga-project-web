import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: ${(props) => props.theme.font};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  overflow-x: hidden;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyle;
