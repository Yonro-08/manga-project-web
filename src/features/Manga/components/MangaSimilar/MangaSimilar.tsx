import { useTheme } from "styled-components";

import { Box, Button, Flex, Text } from "components/Custom";
import MangaRec from "components/MangaRec/MangaRec";

const MangaSimilar = () => {
  const theme = useTheme();

  return (
    <Box $width="250px" className="mangaSimilar">
      <Flex
        $width="100%"
        $align="center"
        $justify="space-between"
        $marginBottom={16}
      >
        <Text
          $fontSize="20px"
          $lineHeight={1.43}
          $color={theme.colors.textPrimary}
        >
          Похожее
        </Text>
        <Button>
          <Text $fontSize="15px" $color={theme.colors.primary}>
            Добавить
          </Text>
        </Button>
      </Flex>
      <MangaRec
        title="Безграничные пассивные навыки"
        src="http://localhost:8080/uploads/the_seven_deadly_sins/poster.jpg"
        subtitle="Похож по сюжету"
      />
    </Box>
  );
};

export default MangaSimilar;
