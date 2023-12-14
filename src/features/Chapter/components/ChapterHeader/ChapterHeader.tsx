import { useTheme } from "styled-components";
import { useSearchParams } from "react-router-dom";

import { useManga } from "hooks/zustand/useManga";

import { Box, Container, Flex, Link, Text } from "components/Custom";
import Logo from "components/Logo";
import HeaderList from "components/HeaderList/HeaderList";
import { ArrowLeft, ArrowRight } from "icons";
import DropDown from "../DropDown/DropDown";
import { ChapterHeaderStyle } from "./ChapterHeaderStyle";

const ChapterHeader = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const chapterQuery = searchParams.get("chapter");
  const { manga } = useManga();

  // const sortFunction = (a: any, b: any) => {};

  return (
    <ChapterHeaderStyle>
      <Container>
        <Flex $justify="space-between" $height="100%">
          <Flex $height="100%">
            <Logo />
            <HeaderList>
              <li>
                <Link to={`/manga/${manga?._id}`}>
                  <Text $fontSize="12px" $color="#bebaac">
                    {manga?.title?.russianName}
                  </Text>
                </Link>
              </li>
            </HeaderList>
          </Flex>
          <Flex $height="70%">
            <HeaderList $padding="6px">
              <li>
                <ArrowLeft width="24px" height="24px" fill="#bebaac" />
              </li>
              {manga && <DropDown options={manga?.chapters} />}
              <li>
                <ArrowRight width="24px" height="24px" fill="#bebaac" />
              </li>
            </HeaderList>
          </Flex>
          <Box></Box>
        </Flex>
      </Container>
    </ChapterHeaderStyle>
  );
};

export default ChapterHeader;
