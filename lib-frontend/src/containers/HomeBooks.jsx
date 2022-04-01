import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BooksDisplay from "../components/BooksDisplay";
import { Box, Typography } from "@mui/material";
import { getBooks } from "../api/bookApi";

const HomeBooks = () => {
  const [books, setBooks] = useState([]);
  const fetchBook = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };
  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <Box
      sx={{
        width: "90%",
      }}
    >
      <h1>Home Books</h1>
      <BooksDisplay books={books} />
    </Box>
  );
};

export default HomeBooks;
