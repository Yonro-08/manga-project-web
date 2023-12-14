import { useTheme } from "styled-components";

import { Flex, Image, Text } from "components/Custom";
import { StarIcon } from "icons";
import { MangaShortProps } from "types/manga";
import { Link } from "react-router-dom";
import { MangaItemStyle } from "./MangaItemStyle";

const MangaItem = ({
  manga,
  width,
}: {
  manga: MangaShortProps;
  width?: string;
}) => {
  const { endpoint, title, typeManga, url } = manga;

  const theme = useTheme();

  return (
    <Link to={`/manga/${endpoint}?p=about`}>
      <MangaItemStyle $width={width}>
        <Image src={url} $borderRadius="5px" />
        <Flex $justify="start" $gap={8}>
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
      </MangaItemStyle>
    </Link>
  );
};

export default MangaItem;
