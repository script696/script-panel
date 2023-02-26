import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const DeleteButton = () => {
	return (
		<Box
			position="absolute"
			left="0"
			top="5%"
			zIndex={100}
			width="100%"
			display="flex"
			justifyContent="flex-end"
		>
			<Button
				className="button_styles_none button_right"
				sx={{
					"&:hover": { opacity: "1" },
					opacity: "0.7",
					position: "relative",
					right: "-100%",
					transition: "0.4s",
				}}
			>
				<DeleteIcon />
			</Button>
		</Box>
	);
};

export default DeleteButton;
