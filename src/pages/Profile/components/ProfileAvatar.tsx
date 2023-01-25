import { Avatar, Box } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ChangeEvent } from "react";

type ProfileAvatarProps = {
	isEditMode: boolean;
	picturePreviewUrl?: string;
	onReadPicture: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ProfileAvatar = ({ isEditMode, picturePreviewUrl, onReadPicture }: ProfileAvatarProps) => {
	return (
		<Box
			sx={{
				"&:hover": { opacity: 0.5 },
				"&:hover > .MuiSvgIcon-root": { display: "block" },
				cursor: "pointer",
				position: "relative",
			}}
		>
			<Avatar
				sx={{
					height: "7rem",
					width: "7rem",
				}}
				src={picturePreviewUrl}
			/>
			<AddPhotoAlternateIcon
				sx={{
					bottom: "10%",
					color: "#fff",
					display: "none",
					fontSize: "3rem",
					left: "50%",
					position: "absolute",
					transform: "translateX(-50%)",
				}}
			/>
			<input type="file" hidden id="avatar" name="avatar" onChange={onReadPicture} disabled={!isEditMode} />
		</Box>
	);
};

export default ProfileAvatar;
