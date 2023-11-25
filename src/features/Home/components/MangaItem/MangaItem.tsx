import { Flex, Image, Text, Title } from "components/Custom";
import { useTheme } from "styled-components";

export interface MangaItemProps {
  src: string;
  mangaType: string;
  mangaRating: string;
  mangaTitle: string;
}

const MangaItem = ({ item }: { item: MangaItemProps }) => {
  const theme = useTheme();

  return (
    <Flex direction="column" $width="156px" $height="auto" $gap="10px">
      <Image src={item.src} $fit="contain" />
      <Flex>
        <Text $variant="fs12" color={theme.colors.textSecondary}>
          {item.mangaType}
        </Text>
        <Text $variant="fs12" color={theme.colors.textSecondary}>
          {item.mangaRating}
        </Text>
      </Flex>
      <Title
        as="h4"
        $textColumn={2}
        $marginBottom="8px"
        color={theme.colors.textPrimary}
      >
        {item.mangaTitle}
      </Title>
    </Flex>
  );
};

export default MangaItem;
