import { useRef } from "react";

import { useDispatch } from "react-redux";

import { removePictureFromProduct } from "../../../../app/store/products/actions";
import { Product } from "../../../../app/store/products/types";

type useDeleteGalleryImageProps = {
	product: Product;
	onCloseDeletePictureModal: () => void;
	onOpenDeletePictureModal: () => void;
};

type useDeleteGalleryImageResult = {
	handleClickDeleteBasket: (index: number) => void;
	onDeletePictureFromGallery: () => void;
};

export const useDeleteGalleryImage = ({
	product,
	onOpenDeletePictureModal,
	onCloseDeletePictureModal,
}: useDeleteGalleryImageProps): useDeleteGalleryImageResult => {
	const dispatch = useDispatch();

	const currentImageUrl = useRef<string | undefined>(product.pictures?.[0]);

	const getCurrentSlideUrl = (index: number) => {
		currentImageUrl.current = product.pictures?.[index];
	};

	const handleClickDeleteBasket = (index: number) => {
		getCurrentSlideUrl(index);
		onOpenDeletePictureModal();
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

	return { handleClickDeleteBasket, onDeletePictureFromGallery };
};
