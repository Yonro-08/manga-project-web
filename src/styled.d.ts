import "styled-components";

import { themeProps } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends themeProps {}
}
