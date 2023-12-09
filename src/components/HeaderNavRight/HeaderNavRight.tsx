import { useTheme } from "styled-components";

import { Button, Flex, Link, Text } from "components/Custom";
import HeaderList from "components/HeaderList/HeaderList";
import SwitchTheme from "components/SwitchTheme/SwitchTheme";
import { SettingIcon } from "icons";

const HeaderNavRight = () => {
  const theme = useTheme();

  return (
    <Flex $height="100%" $gap={16}>
      <Flex as="nav" $height="100%" $gap={0}>
        <HeaderList>
          <li>
            <Link to="bookmark">Закладки</Link>
          </li>
        </HeaderList>
      </Flex>
      <SwitchTheme />
      <Button $fillHover={theme.colors.primary}>
        <SettingIcon
          fill={theme.colors.textSecondary}
          width="24px"
          height="24px"
        />
      </Button>
      <Button
        $backgroundColor={theme.colors.primary}
        $padding="8px 16px"
        $borderRadius="24px"
      >
        <Text $color={theme.colors.textOnPrimary}>Войти</Text>
      </Button>
    </Flex>
  );
};

export default HeaderNavRight;
