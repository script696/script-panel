import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";

const drawerWidth = 240;

const navItems = [
  {
    title: "Home",
    link: "/",
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
    link: "/users",
    icon: HomeIcon,
  },
];

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <List sx={{ px: 2 }}>
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
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
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
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/*<Box*/}
      {/*  component="main"*/}
      {/*  sx={{*/}
      {/*    flexGrow: 1,*/}
      {/*    width: { sm: `calc(100% - ${drawerWidth}px)` },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Toolbar />*/}
      {/*  <Typography paragraph>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
      {/*    eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus*/}
      {/*    dolor purus non enim praesent elementum facilisis leo vel. Risus at*/}
      {/*    ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum*/}
      {/*    quisque non tellus. Convallis convallis tellus id interdum velit*/}
      {/*    laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed*/}
      {/*    adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies*/}
      {/*    integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate*/}
      {/*    eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo*/}
      {/*    quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat*/}
      {/*    vivamus at augue. At augue eget arcu dictum varius duis at consectetur*/}
      {/*    lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien*/}
      {/*    faucibus et molestie ac.*/}
      {/*  </Typography>*/}
      {/*  <Typography paragraph>*/}
      {/*    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est*/}
      {/*    ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar*/}
      {/*    elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse*/}
      {/*    sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat*/}
      {/*    mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis*/}
      {/*    risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas*/}
      {/*    purus viverra accumsan in. In hendrerit gravida rutrum quisque non*/}
      {/*    tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant*/}
      {/*    morbi tristique senectus et. Adipiscing elit duis tristique*/}
      {/*    sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis*/}
      {/*    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla*/}
      {/*    posuere sollicitudin aliquam ultrices sagittis orci a.*/}
      {/*  </Typography>*/}
      {/*</Box>*/}
    </Box>
  );
};

export default MainLayout;
