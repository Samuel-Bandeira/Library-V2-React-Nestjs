import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { postAuthor } from "../api/authorApi";
import { useNavigate } from "react-router-dom";

const NewAuthor = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await postAuthor(data);
    if (res.status === 201) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Add Author</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewAuthor;
