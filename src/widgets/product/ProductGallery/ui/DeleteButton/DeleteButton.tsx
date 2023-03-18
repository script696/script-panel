import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useSwiper } from "swiper/react";

type DeleteButtonProps = {
	onDeletePictureFromGallery: (index: number) => void;
};
const DeleteButton = ({ onDeletePictureFromGallery }: DeleteButtonProps) => {
	const swiper = useSwiper();

	const handleClick = () => {
		onDeletePictureFromGallery(swiper.realIndex);
	};
	return (
		<Box
			position="absolute"
			left="0"
			top="5%"
			zIndex={100}
			width="100%"
			display="flex"
			justifyContent="flex-end"
		>
			<Button
				onClick={handleClick}
				className="button_styles_none button_right"
				sx={{
					"&:hover": { opacity: "1" },
					opacity: "0.7",
				}}
			>
				<DeleteIcon />
			</Button>
		</Box>
	);
};

export default DeleteButton;
