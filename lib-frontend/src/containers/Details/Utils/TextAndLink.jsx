import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const TextAndLink = ({ font, typographyText, link, linkText }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Typography
        sx={{
          fontSize: `${font}`,
        }}
      >
        {typographyText}
      </Typography>
      <Link
        to={link}
        style={{
          fontSize: `${font}`,
        }}
      >
        {linkText}
      </Link>
    </Box>
  );
};

export default TextAndLink;
