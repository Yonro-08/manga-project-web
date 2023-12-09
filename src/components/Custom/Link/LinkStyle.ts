import styled from "styled-components";
import { Link } from "react-router-dom";

import LinkProps from "./types";

const LinkStyle = styled(Link)<LinkProps>`
  display: inline-block;
  width: max-content;
  height: max-content;
  margin-left: ${({ $marginLeft }) => $marginLeft && `${$marginLeft}px`};
  padding: ${({ $padding }) => $padding};
  color: inherit;
  font-size: ${({ $size }) => $size};
  line-height: ${({ $lineHeight }) => $lineHeight};
  text-decoration: none;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: ${({ $borderRadius }) => $borderRadius};
`;

export default LinkStyle;
