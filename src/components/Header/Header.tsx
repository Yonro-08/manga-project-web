import { useTheme } from "styled-components";

import { Box, Container, Flex } from "components/Custom";
import Logo from "components/Logo";
import HeaderNavLeft from "components/HeaderNavLeft/HeaderNavLeft";
import HeaderNavRight from "components/HeaderNavRight/HeaderNavRight";

const Header = () => {
  const theme = useTheme();

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
      $zIndex={9}
    >
      <Container>
        <Flex $width="100%" $height="100%" $justify="space-between" $gap={20}>
          <Flex $height="100%" $gap={16}>
            <Logo />
            <HeaderNavLeft />
          </Flex>
          <HeaderNavRight />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
