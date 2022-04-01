import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftContent from "./LeftContent";
import { useParams } from "react-router-dom";
import RightContent from "./RightContent";
// import RightContent from "./RightContent";
const DetailsMain = () => {
  const [author, setAuthor] = useState();
  const [book, setBook] = useState();
  const { bookId } = useParams();
  const [loading, setLoading] = useState();

  // const queryMultiple = () => {
  //   const res1 = useQuery();
  // };

  const fetchBookAndAuthor = async () => {
    setLoading(true);
    const bookRes = await axios.get(`http://localhost:8080/book/${bookId}`);
    console.log(bookRes.data);
    setBook(bookRes.data);
    if (bookRes) {
      console.log("hello");
      const authorRes = await axios.get(
        `http://localhost:8080/author/${bookRes.data.author}`
      );
      console.log("author:");
      setAuthor(authorRes.data);
      console.log(authorRes.data);
      setLoading(false);
    }
  };

  useState(() => {
    fetchBookAndAuthor();
  }, []);

  if (loading) {
    return "loading...";
  }

  const booksByCategory = [
    {
      category: "Books for march",
      books: [
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: {
            //   xs: "center",
            // },
          }}
        >
          <Box>{book && <LeftContent book={book} author={author} />}</Box>
          <Box>
            <RightContent />
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          height: "400px",
        }}
      />
    </Box>
  );
};

export default DetailsMain;
/* <Box>
        <Section
          categoryTitle="You might also like"
          bookCovers={booksByCategory[0].books}
        ></Section>
      </Box> */
