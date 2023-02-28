import { Box, Button, Grid } from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import React, { ChangeEvent } from "react";
import { useSwiper } from "swiper/react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

type ControlButtonsProps = {
	onAddPictureToGallery: (e: ChangeEvent<HTMLInputElement>) => void;
};
const ControlButtons = ({ onAddPictureToGallery }: ControlButtonsProps) => {
	const swiper = useSwiper();
	const goNextSlide = () => {
		swiper.slideNext();
	};

	const goPrevSlide = () => {
		swiper.slidePrev();
	};

	return (
		<Box
			overflow="hidden"
			position="absolute"
			bottom="10%"
			left="0"
			width="100%"
			display="flex"
			zIndex={100}
			justifyContent={"space-between"}
		>
			<Button
				className="button_styles_none button_left"
				sx={{
					left: "-100%",
					position: "relative",
					transition: "0.4s",
				}}
				onClick={goPrevSlide}
			>
				<Grid
					container
					width="3rem"
					sx={{ background: "rgba(255, 255, 255, 0.3)" }}
					className="grid_style_bordered grid_border_light"
					alignItems="center"
					justifyContent="center"
				>
					<ForwardIcon className="color_secondary" style={{ transform: "rotate(180deg)" }} />
				</Grid>
			</Button>
			<Button
				className="button_styles_none button_center"
				sx={{ opacity: "0", position: "relative", transition: "0.4s" }}
				onClick={goPrevSlide}
				component="label"
			>
				<Grid
					container
					width="3rem"
					sx={{ background: "rgba(255, 255, 255, 0.3)" }}
					className="grid_style_bordered grid_border_light"
					alignItems="center"
					justifyContent="center"
				>
					<AddPhotoAlternateIcon className="color_secondary" style={{ transform: "rotate(180deg)" }} />
				</Grid>
				<input hidden accept="image/*" multiple type="file" onChange={onAddPictureToGallery} />
			</Button>
			<Button
				className="button_styles_none button_right"
				sx={{
					position: "relative",
					right: "-100%",
					transition: "0.4s",
				}}
				onClick={goNextSlide}
			>
				<Grid
					container
					width="3rem"
					sx={{ background: "rgba(255, 255, 255, 0.3)" }}
					className="grid_style_bordered grid_border_light"
					alignItems="center"
					justifyContent="center"
				>
					<ForwardIcon className="color_secondary" />
				</Grid>
			</Button>
		</Box>
	);
};

export default ControlButtons;
