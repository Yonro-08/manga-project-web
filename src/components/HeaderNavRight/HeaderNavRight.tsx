import { useTheme } from "styled-components";
import { IoMdSettings } from "react-icons/io";

import { Button, Flex, Link } from "components/Custom";
import HeaderList from "components/HeaderList/HeaderList";
import SwitchTheme from "components/SwitchTheme/SwitchTheme";

const HeaderNavRight = () => {
  const theme = useTheme();

  return (
    <Flex $gap="16px">
      <Flex as="nav" $width="max-content" $height="100%" $gap="0px">
        <HeaderList>
          <li>
            <Link to="bookmark">Закладки</Link>
          </li>
        </HeaderList>
      </Flex>
      <SwitchTheme />
      <Button $fillHover={theme.colors.primary}>
        <IoMdSettings fill={theme.colors.textSecondary} size={24} />
      </Button>
      <Button
        $bg={theme.colors.primary}
        $color={theme.colors.textOnPrimary}
        $padding="8px 16px"
        $borderRadius="24px"
      >
        Войти
      </Button>
    </Flex>
  );
};

export default HeaderNavRight;
