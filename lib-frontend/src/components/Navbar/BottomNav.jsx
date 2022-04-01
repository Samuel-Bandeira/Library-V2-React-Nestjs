import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BottomNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggle, setToggle] = useState(false);
  const open = Boolean(anchorEl);

  const openDrawer = () => {
    setToggle(true);
  };

  const closeDrawer = () => {
    setToggle(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button
        onClick={handleClick}
        sx={{
          color: "black",
          width: "50%",
          textTransform: "none",
          fontSize: "16px",
        }}
      >
        Browse
        <ExpandMoreIcon
          sx={{
            fontSize: "16px",
          }}
        />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Button
        onClick={handleClick}
        sx={{
          color: "black",
          width: "50%",
          textTransform: "none",
          fontSize: "16px",
        }}
      >
        More
        <ExpandMoreIcon
          sx={{
            fontSize: "16px",
          }}
        />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>ONe</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default BottomNav;
