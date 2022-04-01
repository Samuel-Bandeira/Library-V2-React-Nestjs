import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FancyGreenButton = () => {
  return (
    <Box
      sx={{
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
        borderRadius: "6px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          color: "white",
        }}
      >
        Want to read
      </Typography>

      <Box
        sx={{
          display: "flex",
          height: "40px",
          justifyContent: "center",
          flexDirection: "column",
          width: "220px",
          position: "absolute",
          left: "220px",
          pl: "10px",
          background: "green",
          borderLeft: "2px solid white",
        }}
      >
        <ArrowDropDownIcon
          sx={{
            color: "white",
          }}
        />
      </Box>
    </Box>
  );
};

export default FancyGreenButton;
