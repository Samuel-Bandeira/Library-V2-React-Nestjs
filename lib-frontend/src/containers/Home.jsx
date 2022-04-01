import React, { useEffect, useState } from "react";
import BooksDisplay from "../components/BooksDisplay";
import { Box, Button, Typography } from "@mui/material";
// import { getNewestBooks } from "../api/bookApi";
import * as api from "../api/bookApi";
import { useQuery } from "react-query";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Carousel from "../components/Carousels/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../components/Section/Section";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselCards from "../components/Carousels/CarouselCards";

// import "./styles.css";
const Home = () => {
  const booksByCategory = [
    {
      category: "Books for march",
      books: [
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
      ],
    },
    {
      category: "Books We Love",
      books: [
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
      ],
    },
    {
      category: "Recently Returned",
      books: [
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
      ],
    },
    {
      category: "Romance",
      books: [
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
      ],
    },
    {
      category: "Kids",
      books: [
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
      ],
    },
  ];
  const img =
    "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg";

  const [newestBooks, setNewestBooks] = useState();
  const { data, isLoading, isError } = useQuery(
    "newestBooks",
    api.getNewestBooks
  );

  if (isLoading) {
    return <h1>Loading Users...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #babbae",
      }}
    >
      {/* <Box>
        <Typography
          sx={{
            fontSize: "30px",
            mb: "20px",
            // color: "#1976d2",
          }}
        >
          Welcome to Mybrary
        </Typography>
      </Box> */}
      <Box
        sx={{
          background: "white",
        }}
      >
        <Box
          sx={{
            p: "30px 20px 20px 20px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
              }}
            >
              Welcome to Open library
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            pb: "40px",
          }}
        >
          <CarouselCards />
        </Box>
      </Box>
      <Box>
        {booksByCategory.map((element, index) => (
          <Section
            key={index}
            categoryTitle={element.category}
            bookCovers={element.books}
          />
        ))}
      </Box>
      <Box
        sx={{
          height: "400px",
        }}
      ></Box>
    </Box>
  );
};

export default Home;

/* 
{" "}
      <Typography
        variant="h4"
        sx={{
          mb: "20px",
          fontSize: "clamp(2rem, 2.5vw, 6rem)",
        }}
      >
        Recent Added Books:
      </Typography>
      <BooksDisplay books={data} />
*/
