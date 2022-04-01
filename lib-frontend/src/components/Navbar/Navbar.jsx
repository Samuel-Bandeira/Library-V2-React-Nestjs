import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Tooltip, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BottomNav from "./BottomNav";
/*
{ route: "/author/new", name: "New Author" },
    { route: "/book/new", name: "New Book" },
    { route: "/book/search", name: "Search Book" },
    { route: "/book", name: "Books" },
    { route: "/author", name: "Author" },
*/

const Navbar = ({ routes, menuItems }) => {
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

  const drawerRoutes = [
    {
      name: "My Profile",
      route: "/",
    },
    {
      name: "My Loans",
      route: "/",
    },
    {
      name: "My Lists",
      route: "/",
    },
    {
      name: "My Reading Log",
      route: "/",
    },
    {
      name: "My Reading Stats",
      route: "/",
    },
    {
      name: "Settings",
      route: "/",
    },
    {
      name: "Log out",
      route: "/",
    },
    {
      name: "My Profile",
      route: "/",
    },
    {
      name: "My Profile",
      route: "/",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background:
            "linear-gradient(to bottom,hsl(41.2,47.1%,93.3%),hsl(41.5,48.1%,89.4%))",
          boxShadow: "0 1px 2px rgb(0 0 0 / 15%)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: {
              xs: "space-between",
              md: "normal",
            },
          }}
          // disableGutters={true}
        >
          {/* Mobile */}
          {/* Mobile menu */}
          <Drawer anchor="right" open={toggle} onClose={closeDrawer}>
            <Box
              sx={{
                background: "#d9d9c5",
                height: "100%",
                width: "180px",
              }}
            >
              <List>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <ListItem button onClick={closeDrawer}>
                    <ListItemText
                      primary="Open library"
                      onClick={closeDrawer}
                    />
                  </ListItem>
                </Link>
                <Divider
                  sx={{
                    border: "1px solid #8f7753",
                  }}
                />

                {drawerRoutes.map((item, index) => {
                  if (item.name !== "Mybrary") {
                    return (
                      <Link
                        to={item.route}
                        key={index}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <ListItem button onClick={closeDrawer}>
                          <ListItemText
                            primary={item.name}
                            onClick={closeDrawer}
                          />
                        </ListItem>
                        <Divider />
                      </Link>
                    );
                  }
                })}
              </List>
            </Box>
          </Drawer>
          {/* Mobile logo */}
          <Box
            sx={{
              display: {
                md: "none",
                xs: "block",
              },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Typography variant="h4">Mybrary</Typography>
            </Link>
          </Box>
          {/* Computer */}
          {/* LeftPart */}
          <Box
            sx={{
              alignItems: "center",
              flex: 1,
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                mr: 1,
              }}
            >
              <Link to={routes[0].route} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {routes[0].name}
                </Typography>
              </Link>
            </Box>
            {/* Menu */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "450px",
              }}
            >
              {routes.map((element, index) => {
                if (index !== 0) {
                  return (
                    <Link
                      to={element.route}
                      key={index}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography sx={{ fontSize: "19px", color: "black" }}>
                        {element.name}
                      </Typography>
                    </Link>
                  );
                }
              })}
            </Box>
          </Box>

          {/* LeftPart - userIcon */}
          {/* <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Tooltip title="open settings">
        <IconButton onClick={handleClick}>
          <Avatar alt="avatar" src={img} />
        </IconButton>
      </Tooltip>
    </Box>
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      {menuItems?.map((menuItem, index) => (
        <MenuItem key={index} onClick={handleClose}>
          <Link
            to={menuItem.route}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <Typography sx={{ fontSize: "19px" }}>
              {menuItem.name}
            </Typography>
          </Link>
        </MenuItem>
      ))}
    </Menu> */}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton>
                <SearchIcon
                  sx={{
                    fontSize: "26px",
                    color: "#8f7753",
                  }}
                />
              </IconButton>
            </Box>
            <Box sx={{ display: { md: "none", xs: "block" } }}>
              <IconButton color="inherit" onClick={openDrawer}>
                <MenuIcon sx={{ fontSize: "35px", color: "#8f7753" }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <BottomNav />
    </Box>
  );
};

export default Navbar;
