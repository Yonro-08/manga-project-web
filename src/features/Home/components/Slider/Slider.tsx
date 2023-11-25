import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import MangaItem, { MangaItemProps } from "../MangaItem/MangaItem";

interface SliderProps {
  data: MangaItemProps[];
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
        data.map((item, index) => {
          return (
            <SwiperSlide key={index} style={{ width: "max-content" }}>
              <MangaItem item={item} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
