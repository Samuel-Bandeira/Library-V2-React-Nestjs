import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./Cards/BookCard";
import ExtraInfoCard from "./Cards/ExtraContentCard";
import SocialMediaCard from "./Cards/SocialMediaCard";
const LeftContent = ({ book, author }) => {
  return (
    <Box
      sx={{
        minWidth: "310px",
      }}
    >
      <BookCard book={book} author={author} />
      {/* <Box
        sx={{
          mt: "20px",
        }}
      >
        <ExtraInfoCard />
      </Box> */}
      <Box
        sx={{
          pt: "20px",
        }}
      >
        <SocialMediaCard />
      </Box>
    </Box>
  );
};

export default LeftContent;
