import { Avatar, Grid, IconButton, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import defaultAvatar from "../../assets/img/avatars/defaultAvatar.png";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../../store/settings/actions";

const AuthHeader = () => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <Box
      component="header"
      sx={{ flexGrow: 1, width: "100%" }}
      position="fixed"
    >
      <Toolbar>
        <Grid container justifyContent="space-between">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: "#fff" }}
            onClick={handleMenuClick}
          >
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <Tooltip title="Open settings">
            <IconButton onClick={() => console.log("click")} sx={{ p: 0 }}>
              <Avatar alt="user avatar" src={defaultAvatar} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Toolbar>
    </Box>
  );
};

export default AuthHeader;
