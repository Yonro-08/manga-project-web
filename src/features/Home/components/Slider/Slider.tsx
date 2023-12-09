import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import { AllMangaProps } from "types/manga";
import MangaItem from "../MangaItem/MangaItem";

import "swiper/css";
import "swiper/css/free-mode";

interface SliderProps {
  data: AllMangaProps[] | undefined;
}

const Slider: FC<SliderProps> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={4}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {data &&
        data.map((manga, index) => {
          return (
            <SwiperSlide key={index} style={{ width: "max-content" }}>
              <MangaItem manga={manga} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
