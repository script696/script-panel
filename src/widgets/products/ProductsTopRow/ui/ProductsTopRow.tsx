import { Box, Button, Typography } from "@mui/material";

import React from "react";

import { ModalPopup, useModal } from "../../../../shared/ui/ModalPopup";
import ProductCreateFormController from "../../../../entities/product/ProductCreateFormController/ui/ProductCreateFormController";

const ProductsTopRow = () => {
	const {
		handleCloseModal: onCloseProductCreateModal,
		handleOpenModal: onOpenProductCreateModal,
		isModalOpen: isProductCreateModalOpen,
	} = useModal();

	return (
		<>
			<Box
				mb={2}
				pl={2}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				width="100%"
				sx={{ boxSizing: "border-box" }}
			>
				<Box>
					<Typography component="h2" variant="h3" mb={1}>
						Products
					</Typography>
					<Typography component="span" variant="body1">
						Control your items
					</Typography>
				</Box>
				<Button sx={{ padding: "10px", textTransform: "none" }} onClick={onOpenProductCreateModal}>
					Create New Product
				</Button>
			</Box>
			<ModalPopup
				onCloseModalPopup={onCloseProductCreateModal}
				isModalPopupOpen={isProductCreateModalOpen}
				width="auto"
				height="auto"
			>
				<ProductCreateFormController />
				{/*<ProductPublicInfoForm onCancelForm={onCloseProductCreateModal} product={product} />*/}
			</ModalPopup>
		</>
	);
};

export default ProductsTopRow;
