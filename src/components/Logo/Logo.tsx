import { useTheme } from "styled-components";

import { Link } from "components/Custom";
import LogoStyle from "./LogoStyle";
import { LogoIcon } from "icons";

const Logo = () => {
  const theme = useTheme();

  return (
    <LogoStyle>
      <Link to={"/"}>
        <LogoIcon fill={theme.colors.fillLogo} width="32px" height="32px" />
      </Link>
    </LogoStyle>
  );
};

export default Logo;
