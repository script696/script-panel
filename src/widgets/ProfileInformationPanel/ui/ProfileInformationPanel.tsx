import { Box } from "@mui/material";
import React from "react";

import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";

import { useAppSelector } from "../../../hooks";

import { ModalPopup } from "../../../modules/ModalPopup";

import { ProfileSecurityPanel, ProfileInfoPanel } from "../../../entities/ProfileTabPanelsList";
import { InfoEditForm } from "../../../entities/InfoEditForm";
import useModals from "../lib/hooks/useModals";

const ProfileInformationPanel = () => {
	const { email, username, about, role, avatar, isEditMode } = useAppSelector((state) => state.UserReducer);
	const {
		handleCloseModalInfo: onCloseModalInfo,
		handleOpenModalInfo: onOpenModalInfo,
		isModalInfoOpen,
	} = useModals();

	const profileInfoData = [
		{ text: username, title: "Username" },
		{ text: email, title: "Email" },
	];

	return (
		<Box>
			<TabPanelUnstyled value={0}>
				<ProfileInfoPanel profileInfoData={profileInfoData} onTurnOnEditMode={onOpenModalInfo} />
			</TabPanelUnstyled>
			<TabPanelUnstyled value={1}>
				<ProfileSecurityPanel />
			</TabPanelUnstyled>

			<ModalPopup onCloseModalPopup={onCloseModalInfo} isModalPopupOpen={isModalInfoOpen}>
				<InfoEditForm onCancelForm={onCloseModalInfo} />
			</ModalPopup>
		</Box>
	);
};

export default ProfileInformationPanel;
