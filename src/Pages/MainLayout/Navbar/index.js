import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandLess, ExpandMore, Search } from "@mui/icons-material";
import { menuItems } from "../SideNav/SideNavMenuitems";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import logo from "../../../assets/images/G1.png"
// Styled AppBar component

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  // const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className="headerNav project-thim ">
        <Toolbar className="headerNav-child  ">
          <div className="w-full my-auto">
            <div className="flex justify-around sm:justify-between  ml-auto w-[97%] items-center">
              <div className="flex items-center gap-5">
                <div className="w-[200px] h-[50px]">
                  <img src={logo} alt="img" className="w-[170px] h-[45px]"/>
                </div>
                <div className="relative hidden sm:block ">
                  <input
                    className="p-2 px-16 justify-start rounded-lg outline-none text-gray-500 "
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

            <div className="flex w-[90%] justify-around ml-auto">
              {menuItems.map((items, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredMenuIndex(index)}
                  onMouseLeave={() => setHoveredMenuIndex(null)}
                >
                  <p className="text-white pl-2  font-bold ">{items.text}</p>
                  {items.subItems.length > 0 ? (
                    hoveredMenuIndex === index ? (
                      <ExpandLess sx={{ opacity: open ? 1 : 0 }} />
                    ) : (
                      <ExpandMore sx={{ opacity: open ? 1 : 0 }} />
                    )
                  ) : null}
                  {/* Submenu */}
                  {hoveredMenuIndex === index && (
                    <div
                      className="absolute top-3 right-auto grid grid-cols-2 gap-1 submenu mx-auto text-white p-2 rounded-lg shadow-lg scale-90 z-10"
                      style={{ minWidth: "400px" }}
                    >
                      {items.subItems.map((submenu, subIndex) => (
                        <Link
                          to={submenu.link}
                          key={subIndex}
                          className="block"
                        >
                          <p className=" hover:text-green-600  ">
                            {submenu.text}
                          </p>
                          <Divider className="bg-[#4ad3e970]"/>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

