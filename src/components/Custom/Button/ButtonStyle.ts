import styled from "styled-components";

import { ButtonProps } from "./types";

const ButtonStyle = styled.button<ButtonProps>`
  width: max-content;
  height: max-content;
  padding: ${({ $padding }) => $padding};
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg || "transparent"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  cursor: pointer;

  &:hover {
    svg {
      fill: ${({ $fillHover }) => $fillHover};
    }
  }
`;

export default ButtonStyle;
