import React, { useState } from "react";
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <List>
        <ListItem>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
            <Button color="inherit" fullWidth>Home</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/web"}>
            <Button color="inherit" fullWidth>Webinar</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/login"}>
            <Button color="inherit" fullWidth>Login</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/signup"}>
            <Button color="inherit" fullWidth>Sign Up</Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Visionaries
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </div>
  );
};

export default Navbar;
