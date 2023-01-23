import { Avatar } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Box from "@mui/material/Box";
import { ChangeEvent } from "react";

type ProfileAvatarProps = {
	isEditMode: boolean;
	picturePreviewUrl?: string;
	onReadPicture: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ProfileAvatar = ({ isEditMode, picturePreviewUrl, onReadPicture }: ProfileAvatarProps) => {
	const test = () => {
		console.log("hi");
	};
	return (
		<>
			<Avatar
				sx={{
					cursor: "pointer",
					height: "7rem",
					opacity: isEditMode ? 0.5 : 1,
					width: "7rem",
				}}
				src={picturePreviewUrl}
			/>
			{isEditMode && (
				<AddPhotoAlternateIcon
					sx={{
						bottom: "10%",
						color: "#fff",
						fontSize: "3rem",
						left: "50%",
						position: "absolute",
						transform: "translateX(-50%)",
					}}
				/>
			)}
			<input type="file" hidden id="avatar" name="avatar" onChange={onReadPicture} disabled={!isEditMode} />
		</>
	);
};

export default ProfileAvatar;
