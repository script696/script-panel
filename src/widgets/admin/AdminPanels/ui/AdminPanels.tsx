import React from "react";

import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";

import { ModalPopup, useModal } from "shared/ui/Modal/ModalBase";

import { AdminSecurityForm } from "entities/admin/AdminSecurityForm";
import { AdminSecurityPanel } from "entities/admin/AdminSecurityPanel";
import { AdminUpdateProfile } from "entities/admin/AdminUpdateProfile";
import { AdminBasicInfoForm } from "entities/admin/AdminBasicInfoForm";
import { AdminAddressInfoForm } from "entities/admin/AdminAddressInfoForm";
import { AdminMainInfoPanel } from "entities/admin/AdminInfoPanel";

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
		<>
			<TabPanelUnstyled value={0}>
				<AdminMainInfoPanel onTurnOnEditMode={onOpenModalInfo} />
			</TabPanelUnstyled>
			<TabPanelUnstyled value={1}>
				<AdminSecurityPanel onTurnOnEditMode={onOpenModalSecurity} />
			</TabPanelUnstyled>

			<ModalPopup
				onCloseModalPopup={onCloseModalInfo}
				isModalPopupOpen={isModalInfoOpen}
				width="auto"
				height="auto"
			>
				<AdminUpdateProfile>
					<AdminBasicInfoForm onCancelForm={onCloseModalInfo} value="Basic Info" />
					<AdminAddressInfoForm onCancelForm={onCloseModalInfo} value="Address Info" />
				</AdminUpdateProfile>
			</ModalPopup>

			<ModalPopup
				onCloseModalPopup={onCloseModalSecurity}
				isModalPopupOpen={isModalSecurityOpen}
				width="auto"
				height="auto"
			>
				<AdminSecurityForm onCancelForm={onCloseModalSecurity} />
			</ModalPopup>
		</>
	);
};

export default AdminPanels;
