import { Avatar, Badge, Box, Button } from "@mui/material";

import React from "react";

import { useDispatch } from "react-redux";

import { AvatarIconButton } from "shared/ui/AvatarIconButton";
import { ModalPopup, useModal } from "shared/ui/ModalPopup";
import { useAppSelector, useFileReader } from "shared/lib/hooks";
import { SUPPORTED_PICTURE_FORMATS } from "shared/lib/constants/validators";
import { updateAvatar } from "app/store/admin/actions";

import { LoadingButton } from "@mui/lab";

import { spinKeyframe } from "../../../../shared/lib/constants/animations";

import BadgeItem from "./components/BadgeItem";

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
						<Button className="button_styles_none" component="label" disabled={false} fullWidth>
							<Avatar
								sx={{
									border: `2px solid ${colorMode === "dark" ? "#78909C" : "#a49c93"}`,
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
						<LoadingButton
							variant="contained"
							component="label"
							color="inherit"
							loading={false}
							disabled={false}
							onClick={handleSubmit}
							sx={{ textTransform: "none", width: "6rem" }}
						>
							Change Avatar
						</LoadingButton>
						<Button onClick={onCloseModalAvatar} className="style_ghost" sx={{ width: "6rem" }}>
							Cancel
						</Button>
					</Box>
				</Box>
			</ModalPopup>
		</Box>
	);
};

export default AdminAvatar;
