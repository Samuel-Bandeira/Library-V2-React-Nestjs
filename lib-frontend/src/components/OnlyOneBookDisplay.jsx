import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import BookCard from "./Cards/BookCard";
import BookDetails from "./Cards/BookDetails";
/* 
`http://localhost:8080/uploads/bookCovers/${book.coverImageName}`
*/
const OnlyOneBookDisplay = ({ book }) => {
  //book={book} author={author}
  return <BookDetails book={book}></BookDetails>;
};

/* 
<div
      style={{
        border: "1px solid black",
        display: "flex",
      }}
    >
      <img
        src={`http://localhost:8080/uploads/bookCovers/${book.coverImageName}`}
        alt="img"
        width={300}
        height={300}
      />
      <div
        style={{
          paddingLeft: "20px",
        }}
      >
        <h2>Title: {book.title}</h2>
        <h4>Description: {book.description}</h4>
        <h4>Author: {author}</h4>
        <div>
          <button
            style={{
              marginRight: "10px",
            }}
            onClick={() => navigate(`/book/update/${book._id}`)}
          >
            Update
          </button>
          <button onClick={() => onClickDelete(book._id)}> delete</button>
        </div>
      </div>
    </div>

*/
export default OnlyOneBookDisplay;
