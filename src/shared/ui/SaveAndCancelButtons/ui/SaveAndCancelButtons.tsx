import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Button } from "@mui/material";
import React from "react";

type SaveAndCancelButtonsProps = {
	isSubmitDisabled: boolean;
	onCancelClick: () => void;
};
const SaveAndCancelButtons = ({ onCancelClick, isSubmitDisabled }: SaveAndCancelButtonsProps) => {
	return (
		<Box display="flex" columnGap={2} alignItems="center" justifyContent="center">
			<LoadingButton
				type="submit"
				variant="contained"
				color="inherit"
				className="color_secondary"
				disabled={isSubmitDisabled}
				loading={false}
				sx={{ my: 2, textTransform: "none" }}
			>
				Update Address
			</LoadingButton>
			<Button onClick={onCancelClick} className="style_ghost">
				Cancel
			</Button>
		</Box>
	);
};

export default SaveAndCancelButtons;
