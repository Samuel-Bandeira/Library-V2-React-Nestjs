import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BooksDisplay from "../components/BooksDisplay";

const SearchBook = () => {
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [found, setFound] = useState(false);
  const handleInput = (el) => {
    setInput(el.target.value);
  };

  const getBooks = async () => {
    if (input !== "") {
      const res = await axios.get(`http://localhost:8080/book/?title=${input}`);

      if (Object.keys(res.data).length === 0) {
        setFound(false);
      } else {
        setBooks(res.data);
        setFound(true);
      }
    } else {
      setBooks([]);
    }
  };

  useEffect(() => {
    getBooks();
  }, [input]);

  if (loading) {
    return (
      <Box>
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ border: "1px solid red", width: "90%" }}>
      <Box>{error && <div>{error}</div>}</Box>
      <Box>
        <Typography variant="h2">Search book</Typography>
        <TextField
          type="text"
          value={input}
          onChange={(el) => handleInput(el)}
        />
      </Box>

      <Box>
        {found ? <BooksDisplay books={books}></BooksDisplay> : "No books found"}
      </Box>
    </Box>
  );
};

/* <Box
        style={{
          marginTop: "30px",
        }}
      >
        {found ? (
          <BooksDisplay books={book}></BooksDisplay>
        ) : (
          <Box>Search for a book first</Box>
        )}
      </Box> */

/* 
      const onSubmit = async (data) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/book/?title=${data.title}`
      );
      if (Object.keys(res.data).length === 0) {
        setFound(false);
        setError("no books found");
        return;
      }
      setBook(res.data);
      setFound(true);
      setError(null);
    } catch (err) {
      // console.log("error finding book");
      // console.log(err);
      setError("no books found");
    }
  };
      */

export default SearchBook;
