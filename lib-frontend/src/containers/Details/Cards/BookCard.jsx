import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import MessageIcon from "@mui/icons-material/Message";
import WantToReadButton from "../Buttons/WantToReadButton";
import BorrowButton from "../Buttons/BorrowButton";
const BookCard = ({ book, author }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    console.log(id);
    const res = await axios.delete(`http://localhost:8080/book/${id}`);
    navigate("/book");
  };

  const handleUpdate = (id) => {
    navigate(`/book/update/${id}`);
  };

  const handleViewAuthor = (authorId) => {
    navigate(`/author/${authorId}`);
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          // width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "20px",
          }}
        >
          <Box
            sx={{
              borderRadius: "7px",
              overflow: "hidden",
              height: "285px",
            }}
          >
            <img
              src={`http://localhost:8080${book.coverImagePath}`}
              width="190px"
              alt="bookCover"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "140px",
          }}
        >
          <Box>
            <BorrowButton />
          </Box>

          <Button
            variant="outlined"
            style={{
              textTransform: "none",
              fontSize: "15px",
            }}
          >
            Preview
          </Button>
          <Box>
            <WantToReadButton />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "10px",
            mb: "10px",
          }}
        >
          <Box
            sx={{
              mr: "10px",
              display: "flex",
            }}
          >
            {[0, 1, 2, 3, 4].map(() => (
              <StarIcon
                sx={{
                  color: "gray",
                  fontSize: "30px",
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              borderLeft: "1px solid gray",
              paddingLeft: "10px",
              display: "flex",
            }}
          >
            <MessageIcon />
          </Box>
        </Box>

        <Link to="/">
          <Typography>Add a book note</Typography>
        </Link>
      </Paper>
    </>
  );
};

// <Card
//   sx={{
//     display: "flex",
//     flexDirection: "column",
//   }}
//   elevation={0}
// >
//   <Box>
//     <Typography variant="h3" sx={{ fontWeight: "bold" }}>
//       {book.title}
//     </Typography>
//   </Box>

//   <Box sx={{ display: "flex" }}>
//     <CardMedia
//       alt="image"
//       component="img"
//       sx={{
//         width: "290px",
//         height: "350px",
//       }}
//       image={`http://localhost:8080${book.coverImagePath}`}
//     />
//     <CardContent
//       sx={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h5">
//         <b>Author:</b> {author}
//         {/*error here, maybe on backend*/}
//       </Typography>
//       <Typography variant="h5">
//         <b>Publish Date:</b> {book.publishDate}
//       </Typography>

//       <Typography variant="h5">
//         <b>Page Count:</b> {book.pageCount}
//       </Typography>
//       <Typography variant="h5">
//         <b>Description: </b>
//         {/* {book.description} */}
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
//         libero nisi tenetur id? Minima, aut dolore expedita, doloribus magni
//         quo dolores, optio ad aliquam eaque voluptas provident. Fugiat, nam
//         ex?
//       </Typography>
//       <Box
//         sx={{
//           width: "170px",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             pb: "10px",
//           }}
//         >
//           <Button
//             variant="contained"
//             onClick={() => handleUpdate(book._id)}
//           >
//             Edit
//           </Button>
//           <Button
//             variant="contained"
//             color="error"
//             onClick={() => handleDelete(book._id)}
//           >
//             Delete
//           </Button>
//         </Box>
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//           <Button
//             variant="contained"
//             sx={{ flex: 1 }}
//             onClick={() => handleViewAuthor(book.author)}
//           >
//             Wiew Author
//           </Button>
//         </Box>
//       </Box>
//     </CardContent>
//   </Box>
// </Card>
export default BookCard;
