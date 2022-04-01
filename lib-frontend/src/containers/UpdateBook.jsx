import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BookForm from "../components/BookForm";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../components/Loading";

const UpdateBook = () => {
  const [sucess, setSuccess] = useState(false);
  const { id } = useParams();

  const { data, isLoading } = useQuery("book", async () => {
    const res = await axios.get(`http://localhost:8080/book/${id}`);
    return res.data;
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <Box sx={{ width: "90%" }}>
      <h1>Update Book</h1>
      <BookForm
        setSuccess={setSuccess}
        action="put"
        bookId={id}
        bookInfo={data}
      />
    </Box>
  );
};

export default UpdateBook;
