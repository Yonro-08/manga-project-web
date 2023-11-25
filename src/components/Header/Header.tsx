import { useTheme } from "styled-components";

import { Box, Container, Flex } from "components/Custom";
import Logo from "components/Logo/Logo";
import HeaderNavLeft from "components/HeaderNavLeft/HeaderNavLeft";
import HeaderNavRight from "components/HeaderNavRight/HeaderNavRight";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      as="header"
      $pos="fixed"
      $top="0"
      $left="0"
      $right="0"
      height="56px"
      $bg={theme.colors.bgPaper}
    >
      <Container>
        <Flex $justify="space-between" $gap="20px">
          <Flex $width="max-content" $gap="16px">
            <Logo />
            <HeaderNavLeft />
          </Flex>
          <Flex $width="max-content">
            <HeaderNavRight />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
