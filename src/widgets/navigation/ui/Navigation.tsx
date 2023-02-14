import { Box, Grid, List, ListItemButton, ListItemText } from "@mui/material";

import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

import { useDispatch } from "react-redux";

import { StaticSideBar } from "shared/ui/StaticSideBar";
import { Logo } from "shared/ui/SvgLoader";
import { useAppSelector } from "shared/lib/hooks";
import { toggleSettingsSidebar } from "app/store/widgets/actions";
import { ReactComponent as LoginPromoSvg } from "app/assets/svg/logo.svg";

import { NAV_ITEMS } from "../constants/constants";

const Navigation = () => {
	const dispatch = useDispatch();
	const { colorMode } = useAppSelector((state) => state.UiReducer);

	const handleSettingsToggle = () => {
		dispatch(toggleSettingsSidebar(true));
	};

	return (
		<StaticSideBar>
			<Grid container direction="column" py={2} className="grid_dark" height="100%" width="100%">
				<Box display="flex" justifyContent="center">
					<Logo size="2rem" mb={2} color={colorMode === "dark" ? "#fff" : "#ddbea9"} svg={LoginPromoSvg} />
				</Box>
				<List sx={{ pl: 2, py: 2 }}>
					{NAV_ITEMS.map(({ title, link, icon: Icon }) => (
						<ListItemButton key={link} component={NavLink} to={link}>
							<Box display="flex" columnGap={"0.9rem"} alignItems="center">
								<Icon sx={{ fontSize: "1.2rem" }} />
								<ListItemText primary={title} />
							</Box>
						</ListItemButton>
					))}
				</List>
				<Box sx={{ flexGrow: 1 }} />
				<List sx={{ pl: 2 }}>
					<ListItemButton key="settings" component="button" onClick={handleSettingsToggle}>
						<Box display="flex" columnGap={1} alignItems="center">
							<SettingsIcon />
							<ListItemText primary="Setting" />
						</Box>
					</ListItemButton>
				</List>
			</Grid>
		</StaticSideBar>
	);
};

export default Navigation;
