import { styled } from "styled-components";

import { BoxProps } from "./types";

const BoxStyle = styled.div<BoxProps>`
  position: ${({ $pos }) => $pos};
  top: ${({ $top }) => $top};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  display: ${({ display }) => display};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  row-gap: ${({ $rowGap }) => $rowGap};
  column-gap: ${({ $columnGap }) => $columnGap};
  width: ${({ width }) => width};
  min-height: ${({ $mH }) => $mH};
  height: ${({ height }) => height};
  margin-top: ${({ $marginTop }) => $marginTop};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  padding: ${({ $padding }) => $padding};
  background: ${({ $bg }) => $bg};
  border: ${({ $border }) => $border};
  border-bottom: ${({ $borderBottom }) => $borderBottom};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  filter: ${({ filter }) => filter};
  z-index: ${({ $zIndex }) => $zIndex};
`;

export default BoxStyle;
