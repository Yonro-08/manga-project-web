import { FC } from "react";
import styled from "styled-components";

interface ChapterImageProps {
  src: string;
}

const ChapterImageStyle = styled.img.attrs<ChapterImageProps>(({ src }) => ({
  src,
}))`
  width: 100%;
`;

const ChapterImage: FC<ChapterImageProps> = (props) => {
  return <ChapterImageStyle {...props} />;
};

export default ChapterImage;
