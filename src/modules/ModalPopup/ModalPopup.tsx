import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";

import { Box, ButtonBase } from "@mui/material";

import React from "react";

import { useAppSelector } from "../../hooks";

import { setIsModalPopupOpen } from "./store/actions";

type ModalPopupProps = {
	modalPopupContent: React.ElementType;
};

const ModalPopup = ({ modalPopupContent: ModalPopupContent }: ModalPopupProps) => {
	const { isModalPopupOpen } = useAppSelector((state) => state.ModalPopupReducer);
	const dispatch = useDispatch();

	const handleClosePopup = () => {
		dispatch(setIsModalPopupOpen(false));
	};

	const gridModalPopupOpenTemplateStyles = {
		background: "#fff",
		borderRadius: "10px",
		boxSizing: "border-box",
		height: "80vh",
		left: "50%",
		padding: "15px",
		position: "absolute",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: "50vw",
	};

	return (
		<Modal
			open={isModalPopupOpen}
			onClose={handleClosePopup}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={gridModalPopupOpenTemplateStyles}>
				<Box display="flex" justifyContent="flex-end">
					<ButtonBase onClick={handleClosePopup}>
						<HighlightOffIcon />
					</ButtonBase>
				</Box>
				<Box pt={1}>
					<ModalPopupContent />
				</Box>
			</Box>
		</Modal>
	);
};

export default ModalPopup;
