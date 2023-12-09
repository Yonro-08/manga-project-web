import { styled } from "styled-components";

import { BoxProps } from "./types";

const BoxStyle = styled.div.attrs<BoxProps>(({ className }) => ({
  className,
}))`
  /* position */
  position: ${({ $position }) => $position};
  top: ${({ $top }) => $top};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};

  /* display */
  display: ${({ $display }) => $display};

  /* display flex */
  flex: ${({ $flex }) => $flex};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
  row-gap: ${({ $rowGap }) => $rowGap && `${$rowGap}px`};
  column-gap: ${({ $columnGap }) => $columnGap && `${$columnGap}px`};

  /* other */
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  margin-top: ${({ $marginTop }) => $marginTop && `${$marginTop}px`};
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom && `${$marginBottom}px`};
  padding: ${({ $padding }) => $padding};

  background: ${({ $background }) => $background};
  border: ${({ $border }) => $border};
  border-bottom: ${({ $borderBottom }) => $borderBottom};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  filter: ${({ $filter }) => $filter};
  z-index: ${({ $zIndex }) => $zIndex};
  cursor: ${({ $cursor }) => $cursor};
`;

export default BoxStyle;
