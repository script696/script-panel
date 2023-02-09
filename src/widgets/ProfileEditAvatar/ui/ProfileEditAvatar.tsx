import { Avatar, Badge, Box, Button } from "@mui/material";

import React from "react";

import { useDispatch } from "react-redux";

import { AvatarIconButton } from "../../../shared/ui/AvatarIconButton";
import { ModalPopup, useModal } from "../../../shared/ui/ModalPopup";
import { useAppSelector, useFileReader } from "../../../shared/lib/hooks";
import { SUPPORTED_PICTURE_FORMATS } from "../../../shared/lib/constants/validators";
import { updateAvatar } from "../../../app/store/admin/actions";

import { spinKeyframe } from "../constants/constants";

import BadgeItem from "./components/BadgeItem";

const ProfileEditAvatar = () => {
	const dispatch = useDispatch();
	const { avatarUrl } = useAppSelector((state) => state.UserReducer);
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
			<ModalPopup isModalPopupOpen={isModalOpen} onCloseModalPopup={onCloseModalAvatar}>
				<Box
					display="flex"
					justifyContent="space-between"
					flexDirection="column"
					alignItems="center"
					height="100%"
					overflow="hidden"
					px="12px"
				>
					<Badge
						overlap="circular"
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
						badgeContent={<BadgeItem />}
						sx={{
							"&:hover .gear": { animation: `${spinKeyframe} 1.5s infinite linear` },
							cursor: "pointer",
							height: "80%",
							maxHeight: "80%",
							width: "80%",
						}}
					>
						<Button className="button_styles_none" component="label" disabled={false} sx={{ width: "100%" }}>
							<Avatar
								sx={{
									border: "3px solid #78909C",
									boxShadow: "0px 20px 15px -1px rgba(34, 60, 80, 0.34)",
									boxSizing: "border-box",
									height: "100%",
									objectFit: "cover",
									width: "100%",
								}}
								alt="userAvatar"
								src={picturePreviewUrl}
							/>

							<input hidden accept="image/*" multiple type="file" onChange={handleReadPicture} />
						</Button>
					</Badge>

					<Box display="flex" justifyContent="center" alignItems="center" columnGap="20px">
						<Button
							variant="contained"
							className="style_ghost"
							component="label"
							color="inherit"
							disabled={false}
							onClick={handleSubmit}
						>
							Change Avatar
						</Button>
						<Button onClick={onCloseModalAvatar} className="style_ghost">
							Cancel
						</Button>
					</Box>
				</Box>
			</ModalPopup>
		</Box>
	);
};

export default ProfileEditAvatar;
