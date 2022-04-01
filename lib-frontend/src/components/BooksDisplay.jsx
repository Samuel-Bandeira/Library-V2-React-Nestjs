import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const BooksDisplay = ({ books }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          lg: "repeat(4,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2,1fr)",
          xs: "repeat(1,1fr)",
        },
        gap: "20px",
      }}
    >
      {books?.map((book) => (
        <ImageListItem key={book._id}>
          <Link to={`/book/${book._id}`}>
            <img
              src={`http://localhost:8080${book.coverImagePath}`}
              alt="image"
              style={{
                width: "100%",
              }}
            />
          </Link>
        </ImageListItem>
      ))}
    </Box>
  );
};

/*
<ImageList cols={3} gap={70}>
        {books?.map((book) => (
          <ImageListItem key={book._id}>
            <Link to={`/book/${book._id}`}>
              <img
                src={`http://localhost:8080${book.coverImagePath}`}
                alt="image"
                style={{
                  height: "350px",
                  width: "250px",
                }}
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>

*/

/*
<ImageList
      cols={3}
      sx={{
        // border: "1px solid red",
      }}
    >
      {books?.map((book) => (
        <ImageListItem
          key={book._id}
          sx={{
            width: "250px",
            border: "1px solid red",
          }}
        >
          <Link to={`/book/${book._id}`}>
            <img
              src={`http://localhost:8080${book.coverImagePath}`}
              alt="image"
              width="100%"
              height="350px"
            />
          </Link>
        </ImageListItem>
      ))}
    </ImageList> 
*/
export default BooksDisplay;
