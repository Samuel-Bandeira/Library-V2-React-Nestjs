import { Box } from "@mui/system";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

const Dot = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <CircleIcon
        sx={{
          fontSize: "3px",
        }}
      />
    </Box>
  );
};

export default Dot;
