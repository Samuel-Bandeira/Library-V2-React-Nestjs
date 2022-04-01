import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "../Carousels/Carousel";
const Section = ({ categoryTitle, bookCovers }) => {
  return (
    <Box>
      <Box
        sx={{
          background: "white",
          padding: "0px 20px 0px 20px",
          height: "45px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <Typography
            sx={{
              color: "#02598b",
              fontSize: "1.2rem",
            }}
          >
            {categoryTitle}
          </Typography>
        </Link>
      </Box>

      <Box>
        <Carousel bookCovers={bookCovers} />
      </Box>
    </Box>
  );
};

export default Section;
