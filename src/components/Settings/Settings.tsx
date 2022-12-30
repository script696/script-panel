import { Grid, IconButton, SwipeableDrawer } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThemeCheckbox from "../ThemeCheckbox/ThemeCheckbox";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import {
  changeSettingsStatus,
  toggleColorMode,
} from "../../store/settings/actions";
import ClearIcon from "@mui/icons-material/Clear";

type SettingsProps = {
  isSettingsOpen: boolean;
  onChangeSettingsStatus: (newStatus: boolean) => void;
};

const Settings = ({ onChangeSettingsStatus }: SettingsProps): JSX.Element => {
  const dispath = useDispatch();
  const { isSettingsOpen } = useAppSelector((state) => state.SettingsReducer);

  const handleChangeColorMode = () => {
    dispath(toggleColorMode());
  };

  const handleChangeSettingsStatus = () => {
    dispath(changeSettingsStatus(false));
  };

  const anchor = "right";
  const drawer = (
    <Grid
      container
      direction="column"
      py={2}
      px={2}
      className="grid_drawer"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <IconButton
          edge="start"
          aria-label="settings"
          onClick={handleChangeSettingsStatus}
        >
          <ClearIcon sx={{ fontSize: "2rem", color: "#fff" }} />
        </IconButton>
        <Typography component="h4" variant="h4" textAlign="center">
          Настройки
        </Typography>
      </Grid>
      <Grid item container flexGrow={1} py={4} alignItems="flex-start">
        <Grid item container justifyContent="space-between" alignItems="center">
          <Typography component="span" variant="body1">
            Выбрать тему
          </Typography>
          <ThemeCheckbox defaultChecked onChange={handleChangeColorMode} />
        </Grid>
      </Grid>
    </Grid>
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      onChangeSettingsStatus(open);
    };

  return (
    <Box component="section" sx={{ width: 0, flexShrink: { lg: 0 } }}>
      <SwipeableDrawer
        anchor={anchor}
        open={isSettingsOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          "& .MuiDrawer-paper": {
            border: "none",
            boxSizing: "border-box",
            width: { xs: "100vw", sm: "35vw", md: "25vw", lg: "250px" },
          },
        }}
      >
        {drawer}
      </SwipeableDrawer>
    </Box>
  );
};

export default Settings;
