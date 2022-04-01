import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";

const AuthorCard = ({ author, type }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/author/update/${id}`);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:8080/author/${id}`);
    navigate("/author");
  };

  const detailHandler = (id) => {
    navigate(`/author/${id}`);
  };

  let options;
  if (type === "touch") {
    options = [
      { key: 0, name: "Edit", color: "primary", handler: handleEdit },
      { key: 1, name: "Delete", color: "error", handler: handleDelete },
    ];
  } else if (type === "see") {
    options = [
      { key: 0, name: "Details", color: "primary", handler: detailHandler },
    ];
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        mb: "20px",
        borderRadius: "20px",
        border: "3px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "70px",
            height: "70px",
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "50%",
            mr: "20px",
            border: "3px solid black",
          }}
        />
        <Box>
          <Typography variant="subtitle1" sx={{ color: "gray" }}>
            Name
          </Typography>
          <Typography
            variant="h5"
            sx={{
              "::first-letter": {
                textTransform: "uppercase",
              },
            }}
          >
            {author.name}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "230px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {options.map((option) => {
          return (
            <Button
              key={option.key}
              variant="contained"
              color={option.color}
              size="large"
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
              }}
              onClick={() => option.handler(author._id)}
            >
              {option.name}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default AuthorCard;
