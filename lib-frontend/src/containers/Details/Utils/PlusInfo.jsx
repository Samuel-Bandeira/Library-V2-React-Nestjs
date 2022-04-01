import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const PlusInfo = ({ subject, links }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
          }}
        >
          {`+${subject.toUpperCase()}: `}
        </Typography>
        {links.map((el, index) => (
          <Link key={index} to="/">
            {el + " "}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default PlusInfo;
