import { Box } from "@mui/system";
import React from "react";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          border: "1px solid black",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Container;
