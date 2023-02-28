import React from "react";

import { Box, Button, Typography } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

type ConfirmDeleteModalProps = {
	onConfirmDelete: () => void;
	onCloseModal: () => void;
};
const ConfirmDeleteModalContent = ({ onCloseModal, onConfirmDelete }: ConfirmDeleteModalProps) => {
	return (
		<Box display="flex" flexDirection="column" flexGrow={1}>
			<Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
				<Typography component="p" variant="h4" className="color_secondary" textAlign="center">
					Are you sure you want to delete?
				</Typography>
			</Box>
			<Box display="flex" justifyContent="center" alignItems="center" columnGap={2}>
				<LoadingButton
					onClick={onConfirmDelete}
					type="button"
					variant="contained"
					color="inherit"
					className="color_secondary"
					disabled={false}
					loading={false}
					sx={{ my: 2, width: "6rem" }}
				>
					Delete
				</LoadingButton>
				<Button onClick={onCloseModal} className="style_ghost" sx={{ width: "6rem" }}>
					Cancel
				</Button>
			</Box>
		</Box>
	);
};

export default ConfirmDeleteModalContent;
