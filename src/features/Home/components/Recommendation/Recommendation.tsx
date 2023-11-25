import { Box } from "components/Custom";
import Slider from "../Slider/Slider";

const Recommendation = () => {
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
    <Box as="section" $marginBottom="16px">
      <Slider data={data} />
    </Box>
  );
};

export default Recommendation;
