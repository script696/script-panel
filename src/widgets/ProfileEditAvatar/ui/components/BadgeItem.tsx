import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/material";
import React from "react";

const BadgeItem = () => {
	return (
		<Box
			className="gear"
			sx={{
				background: "#fff",
				border: "2px solid #78909C",
				borderRadius: "50%",
				height: "200%",
				width: "200%",
			}}
		>
			<SettingsIcon sx={{ height: "100%", width: "100%" }} />
		</Box>
	);
};

export default BadgeItem;
