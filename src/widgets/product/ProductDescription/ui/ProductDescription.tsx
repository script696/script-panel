import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { EditButton } from "shared/ui/EditButton";
import { PanelTitleBox } from "shared/ui/PanelTitleBox";

import { Product } from "app/store/products/types";

import { ModalPopup, useModal } from "shared/ui/Modal/ModalBase";
import { ProductDescriptionInfoForm } from "entities/product/ProductDescriptionInfoForm";
import { useDispatch } from "react-redux";

import { DescriptionInfoForm } from "entities/product/ProductDescriptionInfoForm/types/types";
import { deleteProduct, updateProductDescription } from "app/store/products/actions";
import { TextFieldsModalContent } from "shared/ui/Modal/TextFieldsModalContent";

import { ConfirmDeleteModalContent } from "shared/ui/Modal/ConfirmDeleteModalContent";

type ProductDescriptionProps = {
	product: Product;
};

const ProductDescription = ({ product }: ProductDescriptionProps) => {
	const dispatch = useDispatch();
	const {
		handleCloseModal: onCloseDescriptionInfoModal,
		handleOpenModal: onOpenDescriptionInfoModal,
		isModalOpen: isDescriptionInfoModalOpen,
	} = useModal();

	const {
		handleCloseModal: onCloseDeleteConfirmModal,
		handleOpenModal: onOpenDeleteConfirmModal,
		isModalOpen: isDeleteConfirmOpen,
	} = useModal();

	const handleSubmitProductDescriptionForm = (values: DescriptionInfoForm) => {
		dispatch(
			updateProductDescription({ ...values, id: product.id, onCloseModal: onCloseDescriptionInfoModal }),
		);
	};

	const handleDeleteProduct = () => {
		dispatch(deleteProduct({ id: product.id }));
	};

	return (
		<>
			<Box component="section" p={3} overflow={"scroll"}>
				<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
					<Typography component="span" variant="h3" alignSelf="start">
						{product.title}
					</Typography>
					<Button sx={{ textTransform: "none" }} onClick={onOpenDeleteConfirmModal}>
						<DeleteIcon sx={{ fontSize: "1.2rem" }} />
					</Button>
				</Box>
				<Box mb={1}>
					<PanelTitleBox title="Description">
						<EditButton onClick={onOpenDescriptionInfoModal} />
					</PanelTitleBox>
				</Box>
				<Typography component="p" variant="body1" maxWidth={"70%"}>
					{product.description}
				</Typography>
			</Box>
			<ModalPopup
				onCloseModalPopup={onCloseDescriptionInfoModal}
				isModalPopupOpen={isDescriptionInfoModalOpen}
				width="auto"
				height="auto"
			>
				<TextFieldsModalContent
					onCancelForm={onCloseDescriptionInfoModal}
					formId="ProductDescriptionInfoForm"
				>
					<ProductDescriptionInfoForm onSubmit={handleSubmitProductDescriptionForm} product={product} />
				</TextFieldsModalContent>
			</ModalPopup>
			<ModalPopup
				onCloseModalPopup={onCloseDeleteConfirmModal}
				isModalPopupOpen={isDeleteConfirmOpen}
				width="auto"
				height="auto"
			>
				<ConfirmDeleteModalContent
					onConfirmDelete={handleDeleteProduct}
					onCloseModal={onCloseDeleteConfirmModal}
				/>
			</ModalPopup>
		</>
	);
};

export default ProductDescription;
