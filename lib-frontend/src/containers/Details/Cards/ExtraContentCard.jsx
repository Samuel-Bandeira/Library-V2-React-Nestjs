import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const ExtraInfoCard = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
        }}
      >
        Check nearby libraries
      </Typography>
      <ul>
        <li>
          <Link
            to="/"
            style={{
              fontSize: "14px",
            }}
          >
            Library link
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{
              fontSize: "14px",
            }}
          >
            WorldCat
          </Link>
        </li>
      </ul>
      <Typography
        sx={{
          fontSize: "14px",
        }}
      >
        Buy this book
      </Typography>
      <ul>
        <li>
          <Link to="/">
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Better World Books
            </Typography>
          </Link>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            $3.98 (used) - includes shipping
          </Typography>
        </li>
        <li>
          <Link to="/">
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Amazon
            </Typography>
          </Link>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            $4.99
          </Typography>
        </li>
      </ul>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <ArrowRightIcon />
        <Typography
          sx={{
            fontSize: "14px",
          }}
        >
          More
        </Typography>
      </Box>
    </Paper>
  );
};

export default ExtraInfoCard;
