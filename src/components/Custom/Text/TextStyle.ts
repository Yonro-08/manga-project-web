import styled, { css } from "styled-components";

import { TextProps } from "./types";

const TextStyle = styled.p<TextProps>`
  max-width: ${({ $mW }) => $mW};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  color: ${({ color }) => color || "#fafcfc"};
  font-size: ${({ size }) => size || "14px"};
  font-weight: ${({ $weight }) => $weight || "400"};

  ${({ $variant }) => {
    switch ($variant) {
      case "fs16":
        return css`
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
        `;
      case "fs12":
        return css`
          font-size: 12px;
          font-weight: 400;
          line-height: 1.66;
        `;
      case "fs11":
        return css`
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 4.4px;
        `;

      default:
        return;
    }
  }}
`;

export default TextStyle;
