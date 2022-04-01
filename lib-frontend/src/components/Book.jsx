import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Box
      sx={{
        border: "1px solid black",
        width: "230px",
        mb: "40px",
      }}
    >
      <Link to={`/book/${book._id}`}>
        <img
          src={`http://localhost:8080${book.coverImagePath}`}
          alt="cover"
          width="100%"
          height="100%"
          style={{
            border: "1px solid black",
          }}
        />
      </Link>
    </Box>
  );
};

export default Book;
