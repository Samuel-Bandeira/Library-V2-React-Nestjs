import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";

const UpdateAuthor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const { data, isLoading } = useQuery("author", async () => {
    const res = await axios.get(`http://localhost:8080/author/${id}`);
    return res.data;
  });

  const onSubmit = async (data) => {
    await axios.put(`http://localhost:8080/author/${id}`, data);
    navigate("/author");
  };

  if (isLoading) {
    return (
      <Box>
        <Typography variant="h4">Loading!</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "90%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} defaultValue={data.name} />
        <button type="submit">submit</button>
      </form>
    </Box>
  );
};

export default UpdateAuthor;
