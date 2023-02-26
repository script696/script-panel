import { Avatar, Badge, Box, Button } from "@mui/material";

import { LoadingButton } from "@mui/lab";

import React from "react";

import { spinKeyframe } from "../../../lib/constants/animations";
import PictureBadge from "../../PictureBadge/ui/PictureBadge";

type AddPictureModalContentProps = {
	colorMode: string;
	picturePreviewUrl: string;
	handleReadPicture: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: () => void;
	onCloseModalAvatar: () => void;
};
const AddPictureModalContent = ({
	colorMode = "dark",
	picturePreviewUrl,
	handleReadPicture,
	handleSubmit,
	onCloseModalAvatar,
}: AddPictureModalContentProps) => {
	return (
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
				badgeContent={<PictureBadge colorMode={colorMode} />}
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
	);
};

export default AddPictureModalContent;
