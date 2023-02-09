import { Avatar, IconButton } from "@mui/material";

type ProfileAvatarProps = {
	avatarUrl: string;
	onAvatarClick: () => void;
	size?: number;
};

const AvatarIconButton = ({ avatarUrl, onAvatarClick, size = 6 }: ProfileAvatarProps) => {
	return (
		<IconButton edge="start" color="inherit" onClick={onAvatarClick}>
			<Avatar src={avatarUrl} alt="userAvatar" sx={{ height: `${size}rem`, width: `${size}rem` }} />
		</IconButton>
	);
};

export default AvatarIconButton;
