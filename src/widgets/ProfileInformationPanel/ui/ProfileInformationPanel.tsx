import { Box } from "@mui/material";
import React from "react";

import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";

import { ModalPopup, useModal } from "../../../shared/ui/ModalPopup";

import { ProfileSecurityPanel, ProfileInfoPanel } from "../../../entities/ProfileTabPanelsList";
import { InfoEditForm } from "../../../entities/InfoEditForm";
import ProfileSecurityForm from "../../../entities/ProfileSecurityForm/ui/ProfileSecurityForm";

const ProfileInformationPanel = () => {
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
				<ProfileInfoPanel onTurnOnEditMode={onOpenModalInfo} />
			</TabPanelUnstyled>
			<TabPanelUnstyled value={1}>
				<ProfileSecurityPanel onTurnOnEditMode={onOpenModalSecurity} />
			</TabPanelUnstyled>

			<ModalPopup onCloseModalPopup={onCloseModalInfo} isModalPopupOpen={isModalInfoOpen}>
				<InfoEditForm onCancelForm={onCloseModalInfo} />
			</ModalPopup>

			<ModalPopup onCloseModalPopup={onCloseModalSecurity} isModalPopupOpen={isModalSecurityOpen}>
				<ProfileSecurityForm onCancelForm={onCloseModalSecurity} />
			</ModalPopup>
		</Box>
	);
};

export default ProfileInformationPanel;
