import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { Avatar, Grid, ListItemAvatar, ListItemText } from "@mui/material";
import { Logo } from "../../components";

const drawerWidth = 240;

const navItems = [
  {
    title: "Home",
    link: "/home",
    icon: HomeIcon,
  },
  {
    title: "Users",
    link: "/users",
    icon: Diversity3Icon,
  },
  {
    title: "Projects",
    link: "/Love",
    icon: AccountTreeIcon,
  },
];

const settingItems = [
  {
    title: "Profile",
    link: "/profile",
    icon: PersonIcon,
  },
  {
    title: "Setting",
    link: "/settings",
    icon: HomeIcon,
  },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Grid container direction="column" py={2} className="grid_drawer">
      <Box display="flex" justifyContent="center">
        <Logo size={50} mb={2} />
      </Box>
      <List sx={{ py: 2, pl: 2 }}>
        {navItems.map(({ title, link, icon: Icon }) => (
          <ListItemButton key={link} component={NavLink} to={link}>
            <ListItemAvatar>
              <Avatar>
                <Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List sx={{ px: 2 }}>
        {settingItems.map(({ title, link, icon: Icon }) => (
          <ListItemButton key={link} component={NavLink} to={link}>
            <ListItemAvatar>
              <Avatar>
                <Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItemButton>
        ))}
      </List>
    </Grid>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { xs: 0, sm: drawerWidth }, flexShrink: { lg: 0 } }}
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            border: "none",
            boxSizing: "border-box",
            width: "70vw",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          "& .MuiDrawer-paper": {
            border: "none",
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navigation;
