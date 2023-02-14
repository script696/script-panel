import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import React from "react";

type EditButtonProps = {
	onClick: () => void;
};

export const EditButton = ({ onClick }: EditButtonProps) => {
	return (
		<Button className="button_styles_none" onClick={onClick}>
			<Typography component="span" variant="subtitle1" mr={0.5} className="color_secondary">
				Edit
			</Typography>
			<EditIcon sx={{ fontSize: "0.8rem" }} className="color_secondary" />
		</Button>
	);
};
