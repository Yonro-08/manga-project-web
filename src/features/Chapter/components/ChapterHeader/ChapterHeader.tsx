import { useTheme } from "styled-components";
import { useSearchParams } from "react-router-dom";

import { useManga } from "hooks/zustand/useManga";

import { Box, Container, Flex, Select, Title } from "components/Custom";
import Logo from "components/Logo";
import HeaderList from "components/HeaderList/HeaderList";
import { ArrowLeft, ArrowRight } from "icons";

const ChapterHeader = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const chapterQuery = searchParams.get("chapter");
  const { manga } = useManga();

  // const sortFunction = (a: any, b: any) => {};

  console.log(
    manga?.chapters.sort((a, b) => {
      if (a.chapterNum > b.chapterNum) {
        return 1;
      }
      if (a.chapterNum < b.chapterNum) {
        return -1;
      }
      return 0;
    })
  );

  return (
    <Box
      as="header"
      $position="fixed"
      $top="0"
      $left="0"
      $right="0"
      $width="100vw"
      $height="56px"
      $background={theme.colors.bgPaper}
    >
      <Container>
        <Flex $justify="space-between" $height="100%">
          <Flex $height="100%">
            <Logo />
            <HeaderList>
              <li>
                <Title>{manga?.title?.russianName}</Title>
              </li>
            </HeaderList>
          </Flex>
          <Flex $height="70%">
            <HeaderList>
              <li>
                <ArrowLeft
                  width="24px"
                  height="24px"
                  fill={theme.colors.textPrimary}
                />
              </li>
              <li>
                <Select>
                  {manga?.chapters
                    .sort((a, b) => Number(a.chapterNum) - Number(b.chapterNum))
                    .map((chapter) => {
                      return (
                        <option key={chapter._id} value={chapter.chapterNum}>
                          {chapter.chapterNum}
                        </option>
                      );
                    })}
                </Select>
              </li>
              <li>
                <ArrowRight
                  width="24px"
                  height="24px"
                  fill={theme.colors.textPrimary}
                />
              </li>
            </HeaderList>
          </Flex>
          <Box></Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ChapterHeader;
