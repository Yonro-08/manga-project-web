import { useTheme } from "styled-components";

import { Button, Container, Flex, Text, Title } from "components/Custom";
import Slider from "../Slider/Slider";
import useFetchAllManga from "hooks/query/useFetchAllManga";
import { HotNewContainerStyle, HotNewStyle } from "./HotNewStyle";

const HotNew = () => {
  const theme = useTheme();
  const { data, isLoading } = useFetchAllManga();

  return (
    <HotNewStyle>
      <Container $padding="0px 5px">
        <HotNewContainerStyle>
          <Title as="h5" $color={theme.colors.textPrimary}>
            Горячие новинки
          </Title>
          <Button>
            <Text $fontSize="16px" $color={theme.colors.primary}>
              Больше
            </Text>
          </Button>
        </HotNewContainerStyle>
        {!isLoading && data && (
          <Slider data={data} width="clamp(80px, 24vw, 156px)" />
        )}
      </Container>
    </HotNewStyle>
  );
};

export default HotNew;
