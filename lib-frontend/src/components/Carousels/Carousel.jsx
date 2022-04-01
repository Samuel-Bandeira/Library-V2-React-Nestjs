// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Button } from "@mui/material";

export default ({ bookCovers }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      style={{
        width: "100%",
        height: "280px",
        paddingLeft: "30px",
        paddingTop: "20px",
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        767: {
          slidesPerView: 5,
          slidesPerGroup: 2,
        },
        1200: {
          slidesPerView: 6,
          slidesPerGroup: 3,
        },
      }}
    >
      {bookCovers.map((element) => (
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "140px",
            }}
          >
            <img
              src={element}
              alt="img"
              width="128px"
              style={{
                marginBottom: "10px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                textDecoration: "none",
                width: "140px",
              }}
            >
              Borrow
            </Button>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
