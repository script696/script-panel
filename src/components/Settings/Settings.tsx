import { Grid, IconButton, SwipeableDrawer } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";

import ThemeCheckbox from "../ThemeCheckbox/ThemeCheckbox";
import { changeSettingsStatus, toggleColorMode } from "../../app/store/ui/actions";

type SettingsProps = {
	isSettingsOpen: boolean;
	onChangeSettingsStatus: (newStatus: boolean) => void;
};

const Settings = ({ onChangeSettingsStatus, isSettingsOpen }: SettingsProps): JSX.Element => {
	const dispath = useDispatch();

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
			className="grid_dark"
			justifyContent="center"
			alignItems="center"
		>
			<Grid container justifyContent="space-between" alignItems="center">
				<IconButton edge="start" aria-label="settings" onClick={handleChangeSettingsStatus}>
					<ClearIcon sx={{ color: "#fff", fontSize: "2rem" }} />
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

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		onChangeSettingsStatus(open);
	};

	return (
		<Box component="section" sx={{ flexShrink: { lg: 0 }, width: 0 }}>
			<SwipeableDrawer
				anchor={anchor}
				open={isSettingsOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				sx={{
					"& .MuiDrawer-paper": {
						border: "none",
						boxSizing: "border-box",
						width: { lg: "250px", md: "25vw", sm: "35vw", xs: "100vw" },
					},
				}}
			>
				{drawer}
			</SwipeableDrawer>
		</Box>
	);
};

export default Settings;
