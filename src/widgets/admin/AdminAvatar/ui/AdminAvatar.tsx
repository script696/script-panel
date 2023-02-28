import { Box } from "@mui/material";

import React from "react";

import { useDispatch } from "react-redux";

import { AvatarIconButton } from "shared/ui/AvatarIconButton";
import { ModalPopup, useModal } from "shared/ui/Modal/ModalBase";
import { useAppSelector, useFileReader } from "shared/lib/hooks";
import { SUPPORTED_PICTURE_FORMATS } from "shared/lib/constants/validators";
import { updateAvatar } from "app/store/admin/actions";

import { AddPictureModalContent } from "../../../../shared/ui/Modal/AddPictureModalContent";

const AdminAvatar = () => {
	const dispatch = useDispatch();
	const { avatarUrl } = useAppSelector((state) => state.AdminReducer);
	const { colorMode } = useAppSelector((state) => state.WidgetsReducer);

	const {
		handleCloseModal: onCloseModalAvatar,
		handleOpenModal: onOpenModalAvatar,
		isModalOpen,
	} = useModal();
	const { handleReadPicture, picturePreviewUrl, file } = useFileReader({
		defaultPictureUrl: avatarUrl,
	});

	const handleSubmit = () => {
		if (!file) return;
		const fileFormat = file.type.split("/")[1];
		if (!SUPPORTED_PICTURE_FORMATS.includes(fileFormat)) return;
		const data = { avatar: file };

		dispatch(updateAvatar({ data, onCloseModal: onCloseModalAvatar }));
	};

	return (
		<Box>
			<AvatarIconButton onAvatarClick={onOpenModalAvatar} avatarUrl={avatarUrl} />
			<ModalPopup
				isModalPopupOpen={isModalOpen}
				onCloseModalPopup={onCloseModalAvatar}
				width="60vh"
				height="60vh"
			>
				<AddPictureModalContent
					colorMode={colorMode}
					picturePreviewUrl={picturePreviewUrl}
					handleReadPicture={handleReadPicture}
					handleSubmit={handleSubmit}
					onCloseModalAvatar={onCloseModalAvatar}
					submitTitle="Change Avatar"
				/>
			</ModalPopup>
		</Box>
	);
};

export default AdminAvatar;
