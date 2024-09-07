import {AppBar,Box,
  Button,IconButton,Toolbar,Typography,} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Visionaries
            </Typography>
            <Button>
              <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                Home
              </Link>
            </Button>
            <Button>
              <Link style={{ textDecoration: "none", color: "white" }} to={"/web"}>
                Webinar
              </Link>
            </Button>
            
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
