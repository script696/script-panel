import { Avatar, Box, Grid, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

import { useDispatch } from "react-redux";

import { StaticSideBar } from "shared/ui/StaticSideBar";
import { Logo } from "shared/ui/Logo";

import { useAppSelector } from "shared/lib/hooks";
import { toggleSettingsSidebar } from "app/store/widgets/actions";

import { NAV_ITEMS } from "../constants/constants";

const Navigation = () => {
	const dispatch = useDispatch();
	const { colorMode } = useAppSelector((state) => state.UiReducer);

	const handleSettingsToggle = () => {
		dispatch(toggleSettingsSidebar(true));
	};

	return (
		<StaticSideBar>
			<Grid container direction="column" py={2} className="grid_dark" height="100%">
				<Box display="flex" justifyContent="center">
					<Logo size={50} mb={2} color={colorMode === "dark" ? "#fff" : "#ddbea9"} />
				</Box>
				<List sx={{ pl: 2, py: 2 }}>
					{NAV_ITEMS.map(({ title, link, icon: Icon }) => (
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
					<ListItemButton key="settings" component="button" onClick={handleSettingsToggle}>
						<ListItemAvatar>
							<Avatar>
								<SettingsIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Setting" />
					</ListItemButton>
				</List>
			</Grid>
		</StaticSideBar>
	);
};

export default Navigation;
