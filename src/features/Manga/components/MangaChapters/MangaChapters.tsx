import { Flex } from "components/Custom";
import Chapter from "../Chapter/Chapter";

import { ChapterProps } from "types/manga";

const MangaChapters = ({
  chapters,
  endpoint,
}: {
  chapters: ChapterProps[] | undefined;
  endpoint: string | undefined;
}) => {
  return (
    <Flex $direction="column" $width="100%" $padding="8px 16px" $gap={4}>
      {chapters &&
        chapters.map((chapter, index) => {
          return <Chapter key={index} chapter={chapter} endpoint={endpoint} />;
        })}
    </Flex>
  );
};

export default MangaChapters;
