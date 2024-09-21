import React from "react";
import {
  Box,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const SideNave = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleDrawerOpen = () => setOpen(!open);

  const menuItems = [
    {
      text: "Vehicale Master",
      icon: <MailIcon />,
      subItems: [
        { text: "Vehical-Master", link: "/vehical-master", icon: <MailIcon /> },
        { text: "Letter-Details", link: "/letter-details", icon: <MailIcon /> },
        { text: "Opening-Master", link: "/opening-stocks", icon: <MailIcon /> },
      ],
    },
    {
      text: "Starred",
      icon:<InboxIcon /> ,
      subItems: [
        { text: "Letter-Details", link: "/letter-details", icon: <MailIcon /> },
       
        { text: "Company-Master", link: "/company-master", icon: <MailIcon /> },
      ],
    },
    {
      text: "Starred",
      icon: <MailIcon />,
      subItems: [
        { text: "Letter-Details", link: "/letter-details", icon: <MailIcon /> },
        { text: "Vehical-Master", link: "/vehical-master", icon: <MailIcon /> },
        { text: "Company-Master", link: "/company-master", icon: <MailIcon /> },
      ],
    },
    {
      text: "Starred",
      icon:<InboxIcon /> ,
      subItems: [
        { text: "Letter-Details", link: "/letter-details", icon: <MailIcon /> },
        { text: "Vehical-Master", link: "/vehical-master", icon: <MailIcon /> },
        { text: "Company-Master", link: "/company-master", icon: <MailIcon /> },
      ],
    },
  ];
  const handleDropdownClick = (index) => {
    console.log(index, "index");

    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const handleSubChild = () => {
    setOpenDropdown(null);
    handleDrawerOpen();
  };
  return (
    <Box sx={{ display: "flex", marginBottom: "50px" }}>
      

      {/* Drawer */}
      <Drawer
        className="side-nav"
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            ...(open && { width: drawerWidth }),
            ...(!open && { width: `calc(${theme.spacing(7)} + 1px)` }),
          },
        }}
      >
        <Box
          className="project-thim side-nav-menu-icon"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginLeft: "5px" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Divider />

        {/* Drawer List */}
        <List sx={{ color: "white" }}>
          {menuItems.map((item, index) => 
            
            
            (
            <React.Fragment key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleDropdownClick(index)}
                  sx={{ justifyContent: open ? "initial" : "center" }}
                >
                  <ListItemIcon
                    sx={{ justifyContent: "center", color: "white" }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {/* Toggle icon based on open/close state */}
                  {item.subItems.length > 0 ? (
                    openDropdown === index ? (
                      <ExpandLess sx={{ opacity: open ? 1 : 0 }} />
                    ) : (
                      <ExpandMore sx={{ opacity: open ? 1 : 0 }} />
                    )
                  ) : null}
                </ListItemButton>
              </ListItem>

              {/* Dropdown for sub-items */}
              {item.subItems.length > 0 && (
                <Collapse
                  in={openDropdown === index}
                  timeout="auto"
                  unmountOnExit
                  onClick={handleSubChild}
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItemButton
                        key={subItem}
                        component={Link}
                        to={subItem.link}
                        sx={{
                          pl: 3,
                          justifyContent: open ? "initial" : "center",
                        }}
                        >
                        <ListItemIcon
                        key={subIndex}
                          sx={{ justifyContent: "center", color: "white" }}
                        >
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>

        <Divider />
      </Drawer>
      
    </Box>
  );
};

export default SideNave;
