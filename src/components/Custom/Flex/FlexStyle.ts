import styled from "styled-components";

import { FlexProps } from "./types";

export const FlexStyle = styled.div<FlexProps>`
  position: ${({ $pos }) => $pos};
  top: ${({ $top }) => $top};
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ $align }) => $align || "center"};
  justify-content: ${({ $justify }) => $justify || "stretch"};
  gap: ${({ $gap }) => $gap || "10px"};
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "100%"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  border-radius: ${({ $borderRadius }) => $borderRadius};
`;
