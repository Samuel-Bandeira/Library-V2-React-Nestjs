import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import AuthorCard from "../components/AuthorCard";
const SingleAuthor = () => {
  const { id } = useParams();
  // console.log(id)

  const { data, isLoading } = useQuery("author", async () => {
    const res = await axios.get(`http://localhost:8080/author/${id}`);
    return res.data;
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Box
      sx={{
        width: "90%",
      }}
    >
      {data && <AuthorCard author={data} type="touch" />}
    </Box>
  );
};

export default SingleAuthor;
