import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Avatar, Box } from "@mui/material";

import ControlButtons from "./ControlButtons/ControlButtons";
import DeleteButton from "./DeleteButton/DeleteButton";

const GALLERY_DATA_MOCK = [
	{
		url: "https://wp-s.ru/wallpapers/9/18/438540442363429/izgib-reki-na-fone-zakata.jpg",
	},

	{
		url: "https://cdn.culture.ru/images/1075e69e-a72d-572b-ad2e-f4b4df970b29",
	},

	{
		url: "https://wp-s.ru/wallpapers/9/18/438540442363429/izgib-reki-na-fone-zakata.jpg",
	},

	{
		url: "https://cdn.culture.ru/images/1075e69e-a72d-572b-ad2e-f4b4df970b29",
	},

	{
		url: "https://cdn.culture.ru/images/1075e69e-a72d-572b-ad2e-f4b4df970b29",
	},
];

const ProductGallery = () => {
	return (
		<Box
			height="100%"
			position="relative"
			sx={{
				"&:hover .button_center": { opacity: "1" },
				"&:hover .button_left": { left: "0" },
				"&:hover .button_right": { right: "0" },
			}}
		>
			<Swiper style={{ height: "100%" }} grabCursor onSwiper={(swiper) => console.log(swiper)}>
				{GALLERY_DATA_MOCK.map(({ url }, index) => (
					<SwiperSlide key={index}>
						<Box display="flex" justifyContent={"center"} alignItems="center" sx={{ height: "100%" }}>
							<Avatar src={url} variant={"square"} sx={{ height: "100%", width: "100%" }} />
						</Box>
					</SwiperSlide>
				))}
				<ControlButtons />
			</Swiper>
			<DeleteButton />
		</Box>
	);
};

export default ProductGallery;
