import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import HomeCard from "../Cards/HomeCard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CarouselCards.css";
const CarouselCards = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      navigation={true}
      breakpoints={{
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        767: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }}
    >
      {[1, 2, 3, 4].map((el, key) => (
        <SwiperSlide
          key={key}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "40%",
          }}
        >
          <HomeCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselCards;
