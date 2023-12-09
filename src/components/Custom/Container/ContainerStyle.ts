import styled from "styled-components";

import { ContainerProps } from "./types";

export const ContainerStyle = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || "clamp(1000px, 81vw, 1200px)"};
  height: 100%;
  margin: 0 auto;
  padding: ${({ $padding }) => $padding || "0px 12px"};

  @media (max-width: 1024px) {
    max-width: 100vw;
  }
`;
