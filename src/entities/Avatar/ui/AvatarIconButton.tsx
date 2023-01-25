import { Avatar, IconButton } from "@mui/material";

type ProfileAvatarProps = {
	avatarUrl: string;
	onAvatarClick: () => void;
};

const AvatarIconButton = ({ avatarUrl, onAvatarClick }: ProfileAvatarProps) => {
	console.log(avatarUrl);
	return (
		<IconButton edge="start" color="inherit" onClick={onAvatarClick}>
			<Avatar src={avatarUrl} alt="userAvatar" sx={{ height: "6rem", width: "6rem" }} />
		</IconButton>
	);
};

export default AvatarIconButton;
