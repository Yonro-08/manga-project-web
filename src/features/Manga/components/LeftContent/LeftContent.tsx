import { useTheme } from "styled-components";

import { Box, Button, Flex, Image, Text } from "components/Custom";
import DropDown from "components/DropDown/DropDown";

interface LeftContentProps {
  src: string | undefined;
}

const LeftContent = ({ src }: LeftContentProps) => {
  const theme = useTheme();

  return (
    <Box $position="relative" $width="clamp(230px, 33vw, 250px)">
      <Box $position="fixed" $display="flex" $direction="column">
        <Image
          $width="clamp(160px, 33vw, 250px)"
          src={src || "http://localhost:8080/uploads/noposter.jpg"}
          $borderRadius="5px"
        />
        <Flex
          $width="clamp(160px, 33vw, 250px)"
          $direction="column"
          $padding="8px 4px"
        >
          <Button
            $width="100%"
            $padding="8px 16px"
            $backgroundColor={theme.colors.primary}
            $borderRadius="8px"
          >
            <Text $color={theme.colors.textOnPrimary}>Читать</Text>
          </Button>
          <DropDown
            options={["Читаю", "Буду читать", "Прочитано", "Брошено"]}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default LeftContent;
