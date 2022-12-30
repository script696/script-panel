import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar, Grid, ListItemAvatar, ListItemText } from "@mui/material";
import { Logo } from "../index";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import {
  changeSettingsStatus,
  toggleMobileMenu,
} from "../../store/settings/actions";

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

const Navigation = () => {
  const { isMobileMenuOpen, colorMode } = useAppSelector(
    (state) => state.SettingsReducer
  );

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleMobileMenu());
  };

  const handleSettingsToggle = () => {
    dispatch(changeSettingsStatus(true));
  };

  const drawer = (
    <Grid container direction="column" py={2} className="grid_drawer">
      <Box display="flex" justifyContent="center">
        <Logo
          size={50}
          mb={2}
          color={colorMode === "dark" ? "#fff" : "#ddbea9"}
        />
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
        <ListItemButton
          key="settings"
          component="button"
          onClick={handleSettingsToggle}
        >
          <ListItemAvatar>
            <Avatar>
              <HomeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Setting" />
        </ListItemButton>
      </List>
    </Grid>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { xs: 0, sm: drawerWidth },
        flexShrink: { lg: 0 },
      }}
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={isMobileMenuOpen}
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
