import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import AuthorCard from "../components/AuthorCard";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Author = () => {
  const { data, isLoading } = useQuery("authors", async () => {
    const res = await axios.get("http://localhost:8080/author");
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
      <Typography variant="h4">Authors</Typography>
      <Box sx={{ mt: "20px" }}>
        {/* <AuthorCard authors={data} /> */}
        {data.map((author) => {
          if (author.name !== undefined && author.name !== "") {
            // console.log(author.name);
            return (
              <AuthorCard
                key={author._id}
                author={author}
                type="see"
              ></AuthorCard>
            );
          }
        })}
      </Box>
      
    </Box>
  );
};

export default Author;
