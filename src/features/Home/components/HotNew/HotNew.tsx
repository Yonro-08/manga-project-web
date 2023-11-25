import { Box, Button, Container, Flex, Text, Title } from "components/Custom";
import Slider from "../Slider/Slider";
import { useTheme } from "styled-components";

const HotNew = () => {
  const theme = useTheme();
  const data = [
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
    {
      src: "assets/images/StarGeneral.jpg",
      mangaType: "StarGeneral.jpg",
      mangaRating: "8.7",
      mangaTitle: "Регрессия Сильнейшего Мастера",
    },
  ];

  return (
    <Box as="section" $padding="24px 0px 16px">
      <Container>
        <Flex $justify="space-between" $marginBottom="16px">
          <Title as="h5">Горячие новинки</Title>
          <Button>
            <Text $variant="fs16" color={theme.colors.primary}>
              Больше
            </Text>
          </Button>
        </Flex>
        <Slider data={data} />
      </Container>
    </Box>
  );
};

export default HotNew;
