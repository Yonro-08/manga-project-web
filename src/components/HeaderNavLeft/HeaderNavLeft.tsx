import { useTheme } from "styled-components";

import { Box, Flex, Link } from "components/Custom";
import HeaderList from "components/HeaderList/HeaderList";
import { SearchIcon } from "icons";

const HeaderNavLeft = () => {
  const theme = useTheme();

  return (
    <Box as="nav" $height="100%">
      <HeaderList>
        <li>
          <Link to="catalog">Каталог</Link>
        </li>
        <li>
          <Link to="tops">Топы</Link>
        </li>
        <li>
          <Flex $align="center" $gap={6}>
            <SearchIcon
              width="16px"
              height="16px"
              fill={theme.colors.textPrimary}
            />{" "}
            Поиск
          </Flex>
        </li>
      </HeaderList>
    </Box>
  );
};

export default HeaderNavLeft;
