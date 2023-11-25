import { IoIosSearch } from "react-icons/io";

import { Box, Flex, Link } from "components/Custom";
import HeaderList from "components/HeaderList/HeaderList";

const HeaderNavLeft = () => {
  return (
    <Box as="nav" height="100%">
      <HeaderList>
        <li>
          <Link to="catalog">Каталог</Link>
        </li>
        <li>
          <Link to="tops">Топы</Link>
        </li>
        <li>
          <Link to="search">
            <Flex $align="center" $gap="6px">
              <IoIosSearch size={16} strokeWidth={10} /> Поиск
            </Flex>
          </Link>
        </li>
      </HeaderList>
    </Box>
  );
};

export default HeaderNavLeft;
