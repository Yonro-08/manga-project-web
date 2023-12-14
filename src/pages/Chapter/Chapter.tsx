import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { Container } from "components/Custom";
import ChapterHeader from "features/Chapter/components/ChapterHeader/ChapterHeader";
import { ChapterContainerStyle, ChapterStyle } from "./ChapterStyle";
import {
  ChapterButton,
  ChapterImage,
  handleTransitionPagesNext,
  handleTransitionPagesPrev,
} from "features/Chapter";

import { useManga } from "hooks/zustand/useManga";
import useFetchManga from "hooks/query/useFetchManga";

const Chapter = () => {
  const { endpoint } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuery = Number(searchParams.get("page")) || 0;
  const chapterQuery = Number(searchParams.get("chapter")) || 0;

  const { getManga } = useManga();
  const { data, isLoading } = useFetchManga(endpoint);

  useEffect(() => {
    getManga(data);
  }, [isLoading]);

  const chapter = data?.chapters.filter(
    (chapter) => chapter.chapterNum === chapterQuery
  )[0];

  return (
    <>
      <ChapterHeader />
      <ChapterStyle>
        <Container $maxWidth="900px">
          <ChapterContainerStyle>
            {!isLoading && chapter && (
              <>
                {!(
                  chapterQuery === data?.chapters[0].chapterNum &&
                  pageQuery === 1
                ) && (
                  <ChapterButton
                    to={handleTransitionPagesPrev(
                      pageQuery,
                      chapterQuery,
                      endpoint
                    )}
                    $left="0"
                    $right="70%"
                  />
                )}
                <ChapterImage
                  src={chapter?.chapterImage[+pageQuery - 1] || ""}
                />
                <ChapterButton
                  to={handleTransitionPagesNext(
                    pageQuery,
                    chapterQuery,
                    endpoint,
                    data,
                    chapter
                  )}
                  $left="70%"
                  $right="0"
                />
              </>
            )}
          </ChapterContainerStyle>
        </Container>
      </ChapterStyle>
    </>
  );
};

export default Chapter;
