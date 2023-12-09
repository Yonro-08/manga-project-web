import { useState } from "react";
import { useTheme } from "styled-components";

import { Button, Flex, Link, Text } from "components/Custom";
import { ArrowDown } from "icons";

interface MangaAboutProps {
  content?: string;
  genres?: string[];
}

const MangaAbout = (props: MangaAboutProps) => {
  const Genres = [
    "Экшен",
    "Элементы юмора",
    "Приключения",
    "Романтика",
    "Сверхъестественное",
    "Фэнтези",
  ];
  const [isShow, setIsShow] = useState<boolean>(false);
  const theme = useTheme();

  return (
    <Flex
      $direction="column"
      $width="100%"
      $align="flex-start"
      $flex={1}
      $padding="8px 16px"
    >
      <Flex
        $direction="column"
        $align="flex-start"
        $gap={8}
        $width="100%"
        $marginBottom={32}
      >
        <Text
          $height={isShow ? "auto" : "100px"}
          $fontSize="16px"
          $lineHeight={1.6}
        >
          {props?.content}
        </Text>
        {!isShow && (
          <Button onClick={() => setIsShow(true)}>
            <ArrowDown
              width="24px"
              height="24px"
              fill={theme.colors.textSecondary}
            />
            <Text $color={theme.colors.textSecondary}>Больше</Text>
          </Button>
        )}
      </Flex>
      <Flex $flexWrap="wrap" $justify="start" $width="100%" $gap={4}>
        {Genres.map((genre, index) => {
          return (
            <Link
              key={index}
              to=""
              $padding="7px 12px"
              $backgroundColor="hsla(240, 4%, 49%, 0.07);"
              $borderRadius="12px"
            >
              {genre}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default MangaAbout;
