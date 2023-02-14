import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type PanelEditRowProps = {
	title: string;
	onChangeEditMode?: () => void;
	children?: ReactNode;
};

export const PanelTitleBox = ({ title, children }: PanelEditRowProps) => {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			sx={{
				background: "#fff",
				borderRadius: "3px",
				boxSizing: "border-box",
			}}
			pl={2}
		>
			<Typography component="span" variant="subtitle1" className="color_secondary">
				{title}
			</Typography>
			{children}
		</Box>
	);
};
