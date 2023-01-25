import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { Box, ButtonBase } from "@mui/material";

import React, { ReactNode } from "react";

type ModalPopupProps = {
	isModalPopupOpen: boolean;
	onCloseModalPopup: () => void;
	children: ReactNode;
	customStyles?: Record<string, string>;
};

const ModalPopup = ({ children, isModalPopupOpen, onCloseModalPopup, customStyles }: ModalPopupProps) => {
	const gridModalPopupOpenTemplateStyles = {
		background: "#fff",
		border: "3px solid #78909C",
		borderRadius: "10px",
		boxSizing: "border-box",
		left: "50%",
		maxWidth: "800px",
		minHeight: "80vh",
		padding: "15px",
		position: "absolute",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: "80vh",
		...customStyles,
	};

	return (
		<Modal
			open={isModalPopupOpen}
			onClose={onCloseModalPopup}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={gridModalPopupOpenTemplateStyles}>
				<Box display="flex" justifyContent="flex-end">
					<ButtonBase onClick={onCloseModalPopup}>
						<HighlightOffIcon />
					</ButtonBase>
				</Box>
				{children}
			</Box>
		</Modal>
	);
};

export default ModalPopup;
