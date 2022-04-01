import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";

const NewBook = () => {
  const [sucess, setSuccess] = useState(false);

  return (
    <Box sx={{ width: "90%" }}>
      {sucess && <div>Book Added!</div>}
      <h1>Add New Book</h1>
      <BookForm setSuccess={setSuccess} action="post" />
    </Box>
  );
};

export default NewBook;
