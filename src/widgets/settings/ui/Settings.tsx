import { ButtonBase, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import React from "react";

import { ThemeCheckbox } from "shared/ui/ThemeCheckbox";
import { SwipeableSideBar } from "shared/ui/SwipeableSideBar";
import { useAppSelector } from "shared/lib/hooks";

import { toggleColorMode, toggleSettingsSidebar } from "../../../app/store/widgets/actions";

const Settings = () => {
	const dispatch = useDispatch();
	const { isSettingsSidebarOpen } = useAppSelector((state) => state.WidgetsReducer);

	const handleToggleSettingsSidebar = (isSidebarOpen: boolean) => {
		dispatch(toggleSettingsSidebar(isSidebarOpen));
	};

	const handleCloseSettingsSidebar = () => {
		dispatch(toggleSettingsSidebar(false));
	};

	const handleToggleColorMode = () => {
		dispatch(toggleColorMode());
	};

	return (
		<SwipeableSideBar isSideBarOpen={isSettingsSidebarOpen} onToggleSideBar={handleToggleSettingsSidebar}>
			<Grid
				height="100vh"
				container
				direction="column"
				py={2}
				px={2}
				className="grid_dark"
				justifyContent="center"
				alignItems="center"
			>
				<Grid container justifyContent="space-between" alignItems="center">
					<ButtonBase onClick={handleCloseSettingsSidebar}>
						<HighlightOffIcon sx={{ fontSize: "1.5rem" }} />
					</ButtonBase>
					<Typography component="h4" variant="h5" textAlign="center">
						Settings
					</Typography>
				</Grid>
				<Grid item container flexGrow={1} py={4} alignItems="flex-start">
					<Grid item container justifyContent="space-between" alignItems="center">
						<Typography component="span" variant="body1">
							Choose Theme
						</Typography>
						<ThemeCheckbox defaultChecked onChange={handleToggleColorMode} />
					</Grid>
				</Grid>
			</Grid>
		</SwipeableSideBar>
	);
};

export default Settings;
