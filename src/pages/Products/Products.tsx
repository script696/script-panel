import { Box } from "@mui/material";

import { ProductsTopRow } from "widgets/products/ProductsTopRow";

import React from "react";

import { ModalPopup, useModal } from "../../shared/ui/ModalPopup";
import ProductCreateFormController from "../../widgets/ProductCreateFormController/ui/ProductCreateFormController";
import { ProductsTable } from "../../widgets/products/ProductsTable";

const Products = () => {
	const {
		handleCloseModal: onCloseProductCreateModal,
		handleOpenModal: onOpenProductCreateModal,
		isModalOpen: isProductCreateModalOpen,
	} = useModal();

	return (
		<>
			<Box
				display="flex"
				justifyContent="flex-start"
				flexDirection="column"
				alignItems="flex-start"
				height={"100%"}
				py={2}
			>
				<ProductsTopRow onCreateNewProduct={onOpenProductCreateModal} />
				<ProductsTable />
			</Box>
			<ModalPopup
				onCloseModalPopup={onCloseProductCreateModal}
				isModalPopupOpen={isProductCreateModalOpen}
				width="auto"
				height="auto"
			>
				<ProductCreateFormController onRejectCreateNewProduct={onCloseProductCreateModal} />
			</ModalPopup>
		</>
	);
};

export default Products;
