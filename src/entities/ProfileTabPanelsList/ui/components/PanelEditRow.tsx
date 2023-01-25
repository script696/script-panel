import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button } from "@mui/material";
import React from "react";

type PanelEditRowProps = {
	title: string;
	onChangeEditMode: () => void;
};

const PanelEditRow = ({ onChangeEditMode, title }: PanelEditRowProps) => {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			sx={{
				background: "#fff",
				borderRadius: "3px",
				boxSizing: "border-box",
				height: "20px",
			}}
			pl={2}
		>
			<Typography component="span" variant="subtitle1" className="color_secondary">
				{title}
			</Typography>
			<Button className="button_styles_none" onClick={onChangeEditMode}>
				<Typography component="span" variant="subtitle1" mr={0.5} className="color_secondary">
					Edit
				</Typography>
				<EditIcon sx={{ fontSize: "0.8rem" }} />
			</Button>
		</Box>
	);
};

export default PanelEditRow;
