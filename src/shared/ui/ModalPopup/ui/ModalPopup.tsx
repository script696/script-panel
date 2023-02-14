import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { Box, ButtonBase } from "@mui/material";

import React, { ReactNode } from "react";

type ModalPopupProps = {
	isModalPopupOpen: boolean;
	onCloseModalPopup: () => void;
	children: ReactNode;
	width?: string;
	height?: string;
};

const ModalPopup = ({
	children,
	isModalPopupOpen,
	onCloseModalPopup,
	width = "80vh",
	height = "80vh",
}: ModalPopupProps) => {
	const gridModalPopupOpenTemplateStyles = {
		background: "#fff",
		border: "3px solid #78909C",
		borderRadius: "10px",
		boxSizing: "border-box",
		height: height,
		left: "50%",
		maxHeight: "90vh",
		maxWidth: "800px",
		padding: "15px",
		position: "absolute",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: width,
	};

	return (
		<Modal
			open={isModalPopupOpen}
			onClose={onCloseModalPopup}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={gridModalPopupOpenTemplateStyles} display="flex" flexDirection="column">
				<Box display="flex" justifyContent="flex-end">
					<ButtonBase onClick={onCloseModalPopup}>
						<HighlightOffIcon className="color_contrastText" />
					</ButtonBase>
				</Box>
				{children}
			</Box>
		</Modal>
	);
};

export default ModalPopup;
