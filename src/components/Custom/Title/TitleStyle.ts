import styled, { css } from "styled-components";

import { TitleProps } from "./types";

const TitleStyle = styled.h3<TitleProps>`
  display: inline-block !important;
  height: auto;
  padding-left: ${({ $paddingLeft }) => $paddingLeft};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  color: ${({ $color }) => $color || "#fafcfc"};
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  font-weight: ${({ $weight }) => $weight || "700"};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "0.8px"};
  line-height: normal;
  font-style: normal;
  text-transform: ${({ $textTransform }) => $textTransform};

  ${({ $textColumn }) => {
    if (!$textColumn) return;
    return css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: ${$textColumn};
    `;
  }}

  ${({ as }) => {
    switch (as) {
      case "h1":
        return css`
          font-size: 36px;
          font-weight: 600;
          letter-spacing: 1.8px;
        `;
      case "h2":
        return css`
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 1.2px;
        `;
      case "h4":
        return css`
          font-size: 14px;
          font-weight: 400;
          line-height: 1.2;
        `;
      case "h5":
        return css`
          font-size: clamp(16px, 2.5vw, 20px);
          font-weight: 500;
          line-height: 1.334;
        `;

      default:
        return;
    }
  }}
`;

export default TitleStyle;
