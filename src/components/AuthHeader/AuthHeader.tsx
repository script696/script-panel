import { Avatar, Grid, IconButton, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import defaultAvatar from "../../assets/img/avatars/defaultAvatar.png";
import Box from "@mui/material/Box";

const AuthHeader = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Grid container justifyContent="space-between">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: "#fff" }}
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
