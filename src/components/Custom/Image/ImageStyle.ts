import { styled } from "styled-components";

import { ImageProps } from "./types";

const ImageStyle = styled.img.attrs<ImageProps>(({ src }) => ({
  src,
}))`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "100%"};
  object-fit: ${({ $fit }) => $fit || "cover"};
`;

export default ImageStyle;
