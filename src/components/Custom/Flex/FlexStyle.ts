import styled from "styled-components";

import { FlexProps } from "./types";

export const FlexStyle = styled.div<FlexProps>`
  display: flex;
  flex: ${({ $flex }) => $flex};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  flex-direction: ${({ $direction }) => $direction || "row"};
  align-items: ${({ $align }) => $align || "center"};
  justify-content: ${({ $justify }) => $justify || "center"};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : "10px")};
  column-gap: ${({ $columnGap }) => $columnGap && `${$columnGap}px`};
  row-gap: ${({ $rowGap }) => $rowGap && `${$rowGap}px`};

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $padding }) => $padding};
  margin-left: ${({ $marginLeft }) => $marginLeft && `${$marginLeft}px`};
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom && `${$marginBottom}px`};
  border-radius: ${({ $borderRadius }) => $borderRadius};
`;
