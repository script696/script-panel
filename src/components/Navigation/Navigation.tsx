import { NavLink } from "react-router-dom";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HomeIcon from "@mui/icons-material/Home";
import {
  Avatar,
  Box,
  Drawer,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";

import { Logo } from "..";
import { useAppSelector } from "../../hooks";
import { changeSettingsStatus, toggleMobileMenu } from "../../store/ui/actions";
import { ProtectedRotes } from "../../utils/routes/routes";

const drawerWidth = 240;

const navItems = [
  {
    icon: HomeIcon,
    link: ProtectedRotes.HOME,
    title: "Home",
  },
  {
    icon: Diversity3Icon,
    link: ProtectedRotes.USERS,
    title: "Users",
  },
  {
    icon: AccountTreeIcon,
    link: ProtectedRotes.PROJECTS,
    title: "Projects",
  },
];

const Navigation = () => {
  const { isMobileMenuOpen, colorMode } = useAppSelector(
    (state) => state.UiReducer,
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
      <List sx={{ pl: 2, py: 2 }}>
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
              <SettingsIcon />
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
        flexShrink: { lg: 0 },
        width: { sm: drawerWidth, xs: 0 },
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
          "& .MuiDrawer-paper": {
            border: "none",
            boxSizing: "border-box",
            width: "70vw",
          },
          display: { sm: "none", xs: "block" },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            border: "none",
            boxSizing: "border-box",
            width: drawerWidth,
          },
          display: {
            sm: "block",
            xs: "none",
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
