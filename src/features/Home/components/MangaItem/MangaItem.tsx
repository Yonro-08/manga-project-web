import { useTheme } from "styled-components";

import { Flex, Image, Link, Text } from "components/Custom";
import { StarIcon } from "icons";
import { AllMangaProps } from "types/manga";

const MangaItem = ({ manga }: { manga: AllMangaProps }) => {
  const { endpoint, title, typeManga, url } = manga;

  const theme = useTheme();

  return (
    <Link to={`/manga/${endpoint}?p=about`}>
      <Flex
        $direction="column"
        $align="flex-start"
        $width="156px"
        $height="auto"
        $gap={10}
      >
        <Image
          src={url}
          $width="156px"
          $objectFit="cover"
          $borderRadius="5px"
        />
        <Flex $gap={8}>
          <Text
            $fontSize="12px"
            $lineHeight={1.66}
            $color={theme.colors.textSecondary}
          >
            {typeManga}
          </Text>
          <Flex $gap={2}>
            <Text
              $fontSize="12px"
              $lineHeight={1.66}
              $color={theme.colors.textSecondary}
            >
              9.8
            </Text>
            <StarIcon
              width="12px"
              height="12px"
              fill={theme.colors.textSecondary}
            />
          </Flex>
        </Flex>
        <Text $textColumn={2} $marginBottom={4}>
          {title.russianName}
        </Text>
      </Flex>
    </Link>
  );
};

export default MangaItem;
