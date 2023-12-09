import { useTheme } from "styled-components";

import { Box, Flex, Link, Text, Title } from "components/Custom";
import { BookmarkIcon, EyeIcon, HeartIcon, StarIcon } from "icons";

import { useManga } from "hooks/zustand/useManga";

const RightContentHeader = () => {
  const theme = useTheme();
  const { manga } = useManga();

  return (
    <Box
      $width="100%"
      $padding="12px 8px 12px 36px"
      $borderBottom={theme.border}
    >
      <Text $marginBottom={5} $color={theme.colors.textSecondary}>
        {manga?.title.englishName}{" "}
        {manga?.title?.otherName && `/ ${manga?.title?.otherName}`}
      </Text>
      <Flex
        $align="flex-end"
        $justify="start"
        $gap={8}
        $marginBottom={10}
        $width="100%"
      >
        <Title $fontSize="clamp(24px, 2.1vw, 32px)" $weight="500">
          {manga?.title.russianName}
          <Link to="" $marginLeft={8}>
            <Text $fontSize="16px" $color={theme.colors.textSecondary}>
              [{manga?.status}]
            </Text>
          </Link>
        </Title>
      </Flex>
      <Flex
        $flexWrap="wrap"
        $justify="start"
        $columnGap={22}
        $rowGap={16}
        $padding="8px 0"
        $width="100%"
      >
        <Flex $gap={4}>
          <StarIcon width="20px" height="20px" fill="#ff9800" />
          <Text $fontSize="16px" $lineHeight={1.43}>
            8.5(голосов: 694)
          </Text>
        </Flex>
        <Flex $gap={8}>
          <HeartIcon
            width="16px"
            height="16px"
            fill={theme.colors.textSecondary}
          />
          <Text $variant="mangaStats">51.4 K</Text>
        </Flex>
        <Flex $gap={8}>
          <EyeIcon
            width="16px"
            height="16px"
            fill={theme.colors.textSecondary}
          />
          <Text $variant="mangaStats">406.1 K</Text>
        </Flex>
        <Flex $gap={8}>
          <BookmarkIcon
            width="16px"
            height="16px"
            fill={theme.colors.textSecondary}
          />
          <Text $variant="mangaStats">5.3 K</Text>
        </Flex>
        <Text $variant="mangaStats">{manga?.typeManga}</Text>
        <Text $variant="mangaStats">{manga?.year}</Text>
      </Flex>
    </Box>
  );
};

export default RightContentHeader;
