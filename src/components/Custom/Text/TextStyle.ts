import styled, { css } from "styled-components";

import { TextProps } from "./types";

const TextStyle = styled.p<TextProps>`
  height: ${({ $height }) => $height};
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom && `${$marginBottom}px`};
  padding: ${({ $padding }) => $padding};
  color: ${({ $color, theme }) => $color || theme.colors.textPrimary};
  font-size: ${({ $fontSize }) => $fontSize || "14px"};
  line-height: ${({ $lineHeight }) => $lineHeight || 1.2};
  font-weight: ${({ $weight }) => $weight || "400"};
  overflow: hidden;

  ${({ $textColumn }) => {
    if (!$textColumn) return;
    return css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${$textColumn};
    `;
  }}

  ${({ $variant }) => {
    switch ($variant) {
      case "fs16":
        return css`
          font-size: 16px;
          line-height: 1.2;
        `;
      case "fs12":
        return css`
          font-size: 12px;
          line-height: 1.66;
        `;
      case "mangaStats":
        return css`
          font-size: 16px;
          line-height: 24px;
          color: ${({ theme }) => theme.colors.textSecondary};
        `;

      default:
        return;
    }
  }}

  ${({ $hover }) => {
    return (
      $hover &&
      css`
        &:hover {
          background-color: hsla(0, 0%, 55%, 0.1);
        }
      `
    );
  }}
`;

export default TextStyle;
