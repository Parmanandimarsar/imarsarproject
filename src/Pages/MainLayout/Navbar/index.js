import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Search } from "@mui/icons-material";

// Styled AppBar component


const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className="headerNav project-thim">
        <Toolbar className="headerNav-child">
          <div className="flex justify-around sm:justify-between  ml-[10%] w-[100%]  items-center">
            <div className="flex items-center gap-5">
            <div>
              <img src="" alt="img" />
            </div>
            <div className="relative hidden sm:block ">
              <input className="p-2 px-16 justify-start rounded-lg outline-none text-gray-500 " 
              placeholder="Search"
              />
              <Search className="absolute top-2 right-3  z-[1500] text-gray-500 "></Search>
            </div>
            </div>
            <div className="flex items-center">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>LogOut</MenuItem>
              </Menu>
              <p className="text-[14px] hidden sm:block ">Parmanand Maurya</p>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
