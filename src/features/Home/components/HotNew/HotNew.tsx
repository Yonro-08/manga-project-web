import { useTheme } from "styled-components";

import { Box, Button, Container, Flex, Text, Title } from "components/Custom";
import Slider from "../Slider/Slider";
import useFetchAllManga from "hooks/query/useFetchAllManga";

const HotNew = () => {
  const theme = useTheme();
  const { data, isLoading } = useFetchAllManga();

  return (
    <Box as="section" $width="100vw" $padding="24px 0px 16px">
      <Container $padding="0px 5px">
        <Flex
          $width="100%"
          $justify="space-between"
          $marginBottom={16}
          $padding="0px 7px"
        >
          <Title as="h5" $color={theme.colors.textPrimary}>
            Горячие новинки
          </Title>
          <Button>
            <Text $fontSize="16px" $color={theme.colors.primary}>
              Больше
            </Text>
          </Button>
        </Flex>
        {!isLoading && <Slider data={data} />}
      </Container>
    </Box>
  );
};

export default HotNew;
