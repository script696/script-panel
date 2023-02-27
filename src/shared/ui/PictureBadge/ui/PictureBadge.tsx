import SettingsIcon from "@mui/icons-material/Settings";

import { Box } from "@mui/material";
import React from "react";

type BadgeProps = {
	colorMode: string;
};
const PictureBadge = ({ colorMode }: BadgeProps) => {
	return (
		<Box
			className="gear"
			sx={{
				background: "#fff",
				border: `2px solid ${colorMode === "dark" ? "#415a77" : "#4A403A"}`,
				borderRadius: "50%",
				height: "200%",
				width: "200%",
			}}
		>
			<SettingsIcon sx={{ height: "100%", width: "100%" }} className="color_secondary" />
		</Box>
	);
};

export default PictureBadge;
