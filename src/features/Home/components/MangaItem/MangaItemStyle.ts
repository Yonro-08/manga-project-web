import styled from "styled-components";

interface Props {
  $width?: string;
}

export const MangaItemStyle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: ${({ $width }) => $width || "156px"};
  height: auto;

  @media (max-width: 600px) {
    width: ${({ $width }) => $width || "136px"};
  }
`;

interface MangaItemImageProps {
  src?: string;
}

export const MangaItemImage = styled.img.attrs<MangaItemImageProps>(
  ({ src }) => ({ src })
)``;
