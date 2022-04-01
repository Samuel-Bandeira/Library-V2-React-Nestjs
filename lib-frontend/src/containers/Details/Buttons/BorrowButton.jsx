import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import MessageIcon from "@mui/icons-material/Message";

const FancyButton = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "40px",
          display: "flex",
          borderRadius: "7px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          background: "#1976d2",
          overflow: "hidden",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "white",
            }}
          >
            {"Borrow"}
          </Typography>
        </Box>
        <Box
          sx={{
            borderLeft: "2px solid white",
            width: "220px",
            height: "40px",
            position: "absolute",
            left: "220px",
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
            background: "#1976d2",
            transition: "left ease .2s",
            "&:hover": {
              left: "50px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pr: "15px",
            }}
          >
            <HeadphonesIcon
              sx={{
                color: "white",
                fontSize: "25px",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "white",
              fontSize: "18px",
            }}
          >
            Listen
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "40px",
          display: "flex",
          alignItems: "center",
          background: "#1976d2",
        }}
      >
        <Typography
          sx={{
            display: "none",
            "&:hover": {
              color: "white",
              display: "block",
            },
            color: "white",
          }}
        >
          Listen
        </Typography>
      </Box>
    </Box>
  );
};

export default FancyButton;
