import { Avatar, Box, Button } from "@mui/material";

import React from "react";

import { AvatarIconButton } from "../../../entities/Avatar";
import { ModalPopup } from "../../../modules/ModalPopup";
import useModals from "../lib/hooks/useModals";
import { useAppSelector, useFileReader } from "../../../hooks";

const ProfileEditAvatar = () => {
	const { handleOpenModal, handleCloseModal, isModalOpen } = useModals();
	const { avatar } = useAppSelector((state) => state.UserReducer);

	const { handleReadPicture, picturePreviewUrl, file, resetPicturePreviewUrlToDefault } = useFileReader({
		defaultPictureUrl: avatar,
	});

	console.log(picturePreviewUrl);

	return (
		<Box>
			<AvatarIconButton onAvatarClick={handleOpenModal} avatarUrl={picturePreviewUrl as string} />
			<ModalPopup isModalPopupOpen={isModalOpen} onCloseModalPopup={handleCloseModal}>
				<Box
					display="flex"
					justifyContent="space-between"
					flexDirection="column"
					alignItems="center"
					rowGap="30px"
					width="100%"
					height="100%"
				>
					<Avatar
						sx={{ boxShadow: "inset 0px 0px 38px 110px rgba(0,0,0,1)", height: "80%", width: "80%" }}
						alt="userAvatar"
						src={avatar}
					/>
					<Box display="flex" justifyContent="center" alignItems="center" columnGap="20px">
						<Button
							variant="contained"
							className="style_ghost"
							component="label"
							color="inherit"
							disabled={false}
						>
							Change Avatar
							<input hidden accept="image/*" multiple type="file" onChange={handleReadPicture} />
						</Button>
						<Button onClick={() => console.log("handleCancel")} className="style_ghost">
							Cancel
						</Button>
					</Box>
				</Box>
			</ModalPopup>
		</Box>
	);
};

export default ProfileEditAvatar;
