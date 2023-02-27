import React, { ChangeEvent, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Avatar, Box } from "@mui/material";

import { AddPictureModalContent } from "shared/ui/Modal/AddPictureModalContent";

import { useDispatch } from "react-redux";

import { ModalPopup, useModal } from "../../../../shared/ui/Modal/ModalBase";

import { useAppSelector, useFileReader } from "../../../../shared/lib/hooks";

import { addPictureToProduct, removePictureFromProduct } from "../../../../app/store/products/actions";

import { SUPPORTED_PICTURE_FORMATS } from "../../../../shared/lib/constants/validators";

import { Product } from "../../../../app/store/products/types";

import ConfirmDeleteModalContent from "../../../../shared/ui/Modal/ConfirmDeleteModalContent/ui/ConfirmDeleteModalContent";

import defaultGalleryImg from "../assets/defaultImage.svg";

import ControlButtons from "./ControlButtons/ControlButtons";
import DeleteButton from "./DeleteButton/DeleteButton";

type ProductGalleryProps = {
	product: Product;
};
const ProductGallery = ({ product }: ProductGalleryProps) => {
	const dispatch = useDispatch();
	const { colorMode } = useAppSelector((state) => state.WidgetsReducer);
	const { handleReadPicture, picturePreviewUrl, file } = useFileReader({
		defaultPictureUrl: "",
	});

	const {
		handleCloseModal: onCloseAddPictureModal,
		handleOpenModal: onOpenAddPictureModal,
		isModalOpen: isAddPictureModalOpen,
	} = useModal();

	const {
		handleCloseModal: onCloseDeletePictureModal,
		handleOpenModal: onOpenDeletePictureModal,
		isModalOpen: isDeletePictureModalOpen,
	} = useModal();

	const handleAddPictureToGallery = (e: ChangeEvent<HTMLInputElement>) => {
		handleReadPicture(e);
		onOpenAddPictureModal();
	};

	const handleSubmit = () => {
		if (!file) return;
		const fileFormat = file.type.split("/")[1];
		if (!SUPPORTED_PICTURE_FORMATS.includes(fileFormat)) return;
		const data = { onCloseModal: onCloseAddPictureModal, picture: file, productId: product.id };

		dispatch(addPictureToProduct(data));
	};

	const currentImageUrl = useRef<string | undefined>(product.pictures?.[0]);

	const getCurrentSlideUrl = (index: number) => {
		currentImageUrl.current = product.pictures?.[index];
	};

	const onDeletePictureFromGallery = () => {
		if (!currentImageUrl.current) return;
		dispatch(
			removePictureFromProduct({
				onCloseModal: onCloseDeletePictureModal,
				pictureUrl: currentImageUrl.current,
				productId: product.id,
			}),
		);
	};
	const isProductGalleryNotEmpty = product.pictures?.length;

	return (
		<>
			<Box
				height="100%"
				position="relative"
				sx={{
					"&:hover .button_center": { opacity: "1" },
					"&:hover .button_left": { left: "0" },
					"&:hover .button_right": { right: "0" },
				}}
			>
				<Swiper
					style={{ height: "100%" }}
					grabCursor
					onRealIndexChange={(element) => getCurrentSlideUrl(element.activeIndex)}
				>
					{isProductGalleryNotEmpty ? (
						product.pictures?.map((url, index) => {
							return (
								<SwiperSlide key={index}>
									<Box display="flex" justifyContent={"center"} alignItems="center" sx={{ height: "100%" }}>
										<Avatar
											src={`${process.env.REACT_APP_API_URL}/${url}`}
											variant={"square"}
											sx={{ height: "100%", width: "100%" }}
										/>
									</Box>
								</SwiperSlide>
							);
						})
					) : (
						<SwiperSlide>
							<Box display="flex" justifyContent={"center"} alignItems="center" sx={{ height: "100%" }}>
								<Avatar src={defaultGalleryImg} variant={"square"} sx={{ height: "100%", width: "100%" }} />
							</Box>
						</SwiperSlide>
					)}
					<ControlButtons onAddPictureToGallery={handleAddPictureToGallery} />
				</Swiper>
				{isProductGalleryNotEmpty && <DeleteButton onDeletePictureFromGallery={onOpenDeletePictureModal} />}
			</Box>
			<ModalPopup isModalPopupOpen={isAddPictureModalOpen} onCloseModalPopup={onCloseAddPictureModal}>
				<AddPictureModalContent
					colorMode={colorMode}
					picturePreviewUrl={picturePreviewUrl}
					handleSubmit={handleSubmit}
					onCloseModalAvatar={onCloseAddPictureModal}
					variant="rounded"
					submitTitle="Add picture"
				/>
			</ModalPopup>
			<ModalPopup
				onCloseModalPopup={onCloseDeletePictureModal}
				isModalPopupOpen={isDeletePictureModalOpen}
				width="auto"
				height="auto"
			>
				<ConfirmDeleteModalContent
					onConfirmDelete={onDeletePictureFromGallery}
					onCloseModal={onCloseDeletePictureModal}
				/>
			</ModalPopup>
		</>
	);
};

export default ProductGallery;
