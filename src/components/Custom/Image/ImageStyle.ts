import { styled } from "styled-components";

import { ImageProps } from "./types";

const ImageStyle = styled.img.attrs<ImageProps>(({ src }) => ({
  src,
}))`
  width: ${({ $width }) => $width || "100%"};
  object-fit: ${({ $objectFit }) => $objectFit || "cover"};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  aspect-ratio: 1/ 1.5;
`;

export default ImageStyle;
