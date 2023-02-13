import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/material";
import React from "react";

import { useAppSelector } from "../../../../../shared/lib/hooks";

const BadgeItem = () => {
	const { colorMode } = useAppSelector((state) => state.WidgetsReducer);
	return (
		<Box
			className="gear"
			sx={{
				background: "#fff",
				border: `2px solid ${colorMode === "dark" ? "#78909C" : "#a49c93"}`,
				borderRadius: "50%",
				height: "200%",
				width: "200%",
			}}
		>
			<SettingsIcon sx={{ height: "100%", width: "100%" }} className="color_contrastText" />
		</Box>
	);
};

export default BadgeItem;
