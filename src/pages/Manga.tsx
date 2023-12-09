import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Container, Flex } from "components/Custom";
import { LeftContent, RightContent } from "features/Manga";

import { useManga } from "hooks/zustand/useManga";
import useFetchManga from "hooks/query/useFetchManga";

const Manga = () => {
  const { endpoint } = useParams();
  const { getManga } = useManga();

  const { data, isLoading } = useFetchManga(endpoint);

  useEffect(() => {
    getManga(data);
  }, [isLoading]);

  return (
    <Box as="section" $width="100vw" $padding="52px 64px">
      <Container>
        {!isLoading && (
          <Flex $width="100%" $gap={0} $align="flex-start">
            <LeftContent src={data?.url} />
            <RightContent />
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default Manga;
