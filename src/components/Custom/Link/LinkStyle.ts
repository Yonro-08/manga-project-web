import styled from "styled-components";
import { Link } from "react-router-dom";

import LinkProps from "./types";

const LinkStyle = styled(Link)<LinkProps>`
  max-width: ${({ $mW }) => $mW};
  display: block;
  width: max-content;
  height: max-content;
  padding: ${({ $padding }) => $padding};
  color: inherit;
  text-decoration: none;
  text-align: center;
  background-color: ${({ $bg }) => $bg};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  svg {
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
  }
`;

export default LinkStyle;
