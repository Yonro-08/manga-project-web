import styled from "styled-components";

import { ButtonProps } from "./types";

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $padding }) => $padding};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};
  border: ${({ $border }) => $border || "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  cursor: pointer;

  &:hover {
    svg {
      fill: ${({ $fillHover }) => $fillHover};
    }
  }
`;

export default ButtonStyle;
