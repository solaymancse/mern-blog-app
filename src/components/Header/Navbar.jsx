import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import {  } from './NavbarStyle';


export const Navbar = () => {

  return (
    <Box sx={{ flexGrow: 1 }} mb={5}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HiMenuAlt2 />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       <Link to='/'>
              Mern Blog App
       </Link>
       
          </Typography>
          <Button color="inherit">
            <Link to="/posts/add">Add Post</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
