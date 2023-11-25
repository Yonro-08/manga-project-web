import { useTheme } from "styled-components";

import { Link } from "components/Custom";
import LogoStyle from "./LogoStyle";

const Logo = () => {
  const theme = useTheme();

  return (
    <LogoStyle>
      <Link to={"/"} $width="32px" $height="32px">
        <svg focusable="false" viewBox="0 0 496 512" aria-hidden="true">
          <path
            fill={theme.colors.fillLogo}
            d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
          ></path>
        </svg>
      </Link>
    </LogoStyle>
  );
};

export default Logo;
