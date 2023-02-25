import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { EditButton } from "shared/ui/EditButton";
import { PanelTitleBox } from "shared/ui/PanelTitleBox";

import { Product } from "app/store/products/types";

import { ModalPopup, useModal } from "shared/ui/ModalPopup";
import { ProductDescriptionInfoForm } from "entities/product/ProductDescriptionInfoForm";

type ProductDescriptionProps = {
	product: Product;
};

const ProductDescription = ({ product }: ProductDescriptionProps) => {
	const {
		handleCloseModal: onCloseDescriptionInfoModal,
		handleOpenModal: onOpenDescriptionInfoModal,
		isModalOpen: isModalSecurityOpen,
	} = useModal();

	return (
		<>
			<Box component="section" p={3}>
				<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
					<Typography component="span" variant="h3" alignSelf="start">
						{product.title}
					</Typography>
					<Button sx={{ textTransform: "none" }}>
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
				isModalPopupOpen={isModalSecurityOpen}
				width="auto"
				height="auto"
			>
				<ProductDescriptionInfoForm onCancelForm={onCloseDescriptionInfoModal} product={product} />
			</ModalPopup>
		</>
	);
};

export default ProductDescription;
