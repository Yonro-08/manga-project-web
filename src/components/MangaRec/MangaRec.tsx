import { Flex, Image, Text } from "components/Custom";
import { useTheme } from "styled-components";

interface MangaRecProps {
  src: string;
  title: string;
  subtitle: string;
}

const MangaRec = ({ src, title, subtitle }: MangaRecProps) => {
  const theme = useTheme();
  return (
    <Flex $width="100%" $gap={12}>
      <Image src={src} $width="60px" />
      <Flex $direction="column" $align="flex-start" $gap={5}>
        <Text $fontSize="16px" $weight="600" $textColumn={2}>
          {title}
        </Text>
        <Text $color={theme.colors.textSecondary} $lineHeight={1.43}>
          {subtitle}
        </Text>
      </Flex>
    </Flex>
  );
};

export default MangaRec;
