import { Box } from "@mui/material";
import React from "react";

import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";

import { ModalPopup, useModal } from "../../../../shared/ui/ModalPopup";

import { InfoEditForm } from "../../../../entities/admin/AdminInfoForm";
import AdminSecurityForm from "../../../../entities/admin/AdminSecurityForm/ui/AdminSecurityForm";
import { AdminSecurityPanel } from "../../../../entities/admin/AdminSecurityPanel";
import { AdminInfoPanel } from "../../../../entities/admin/AdminInfoPanel";

const AdminPanels = () => {
	const {
		handleCloseModal: onCloseModalInfo,
		handleOpenModal: onOpenModalInfo,
		isModalOpen: isModalInfoOpen,
	} = useModal();
	const {
		handleCloseModal: onCloseModalSecurity,
		handleOpenModal: onOpenModalSecurity,
		isModalOpen: isModalSecurityOpen,
	} = useModal();

	return (
		<Box>
			<TabPanelUnstyled value={0}>
				<AdminInfoPanel onTurnOnEditMode={onOpenModalInfo} />
			</TabPanelUnstyled>
			<TabPanelUnstyled value={1}>
				<AdminSecurityPanel onTurnOnEditMode={onOpenModalSecurity} />
			</TabPanelUnstyled>

			<ModalPopup onCloseModalPopup={onCloseModalInfo} isModalPopupOpen={isModalInfoOpen}>
				<InfoEditForm onCancelForm={onCloseModalInfo} />
			</ModalPopup>

			<ModalPopup onCloseModalPopup={onCloseModalSecurity} isModalPopupOpen={isModalSecurityOpen}>
				<AdminSecurityForm onCancelForm={onCloseModalSecurity} />
			</ModalPopup>
		</Box>
	);
};

export default AdminPanels;
