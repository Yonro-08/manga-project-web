import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { Box, Container } from "components/Custom";
import { ChapterButton, ChapterImage } from "features/Chapter";

import useFetchManga from "hooks/query/useFetchManga";
import ChapterHeader from "features/Chapter/components/ChapterHeader/ChapterHeader";
import { useManga } from "hooks/zustand/useManga";

const Chapter = () => {
  const { endpoint } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuery = searchParams.get("page") || "";
  const chapterQuery = searchParams.get("chapter") || "";

  const { getManga } = useManga();
  const { data, isLoading } = useFetchManga(endpoint);

  useEffect(() => {
    getManga(data);
  }, [isLoading]);

  const chapter = data?.chapters.filter(
    (chapter) => chapter.chapterNum === chapterQuery
  )[0];

  const handleTransitionPagesPrev = (
    page: string,
    chapterNum: string
  ): string => {
    if (chapterNum === data?.chapters[0].chapterNum && page === "1") {
      return ``;
    }
    if (page === "1") {
      return `/manga/${endpoint}/chapters?chapter=${
        Number(chapterNum) - 1
      }&page=1`;
    }
    return `/manga/${endpoint}/chapters?chapter=${chapterNum}&page=${
      Number(page) - 1
    }`;
  };

  const handleTransitionPagesNext = (
    page: number,
    chapterNum: string
  ): string => {
    if (
      page === chapter?.chapterImage.length &&
      chapterNum === data?.chapters[data?.chapters.length - 1].chapterNum
    ) {
      return `/manga/${endpoint}/end`;
    }

    if (page === chapter?.chapterImage.length) {
      return `/manga/${endpoint}/chapters?chapter=${
        Number(chapterNum) + 1
      }&page=1`;
    }

    window.scrollTo(0, 0);
    return `/manga/${endpoint}/chapters?chapter=${chapterNum}&page=${
      Number(page) + 1
    }`;
  };

  console.log(
    chapterQuery === data?.chapters[0].chapterNum && pageQuery === "1"
  );

  return (
    <>
      <ChapterHeader />
      <Box as="section" $width="100vw" $marginTop={56}>
        <Container $maxWidth="900px">
          <Box
            $width="100%"
            $position="relative"
            $display="flex"
            $direction="column"
          >
            {!isLoading && (
              <>
                {!(
                  chapterQuery === data?.chapters[0].chapterNum &&
                  pageQuery === "1"
                ) && (
                  <ChapterButton
                    to={handleTransitionPagesPrev(pageQuery, chapterQuery)}
                    $left="0"
                    $right="70%"
                  />
                )}

                <ChapterImage
                  src={chapter?.chapterImage[+pageQuery - 1] || ""}
                />
                <ChapterButton
                  to={handleTransitionPagesNext(+pageQuery, chapterQuery)}
                  $left="70%"
                  $right="0"
                ></ChapterButton>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Chapter;
