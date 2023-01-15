import { Grid, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../../store/ui/actions";
import { AccountMenu } from "../index";

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
          <AccountMenu />
        </Grid>
      </Toolbar>
    </Box>
  );
};

export default AuthHeader;
