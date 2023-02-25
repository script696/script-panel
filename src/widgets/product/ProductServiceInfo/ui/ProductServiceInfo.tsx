import { Box } from "@mui/material";

import React from "react";

import { PanelTitleBox } from "shared/ui/PanelTitleBox";
import { EditButton } from "shared/ui/EditButton";

import { InfoRow } from "shared/ui/InfoRow";

import { Product } from "app/store/products/types";

import { ModalPopup, useModal } from "shared/ui/ModalPopup";
import { ProductServiceInfoForm } from "entities/product/ProductServiceInfoForm";

type ProductServiceInfoProps = {
	data: Product;
};

const ProductServiceInfo = ({ data }: ProductServiceInfoProps) => {
	const {
		handleCloseModal: onCloseServiceInfoModal,
		handleOpenModal: onOpenServiceInfoModal,
		isModalOpen: isModalSecurityOpen,
	} = useModal();

	const { id, totalSold, amount } = data;

	const serviceInfo = [
		{ text: id, title: "Id" },
		{ text: totalSold, title: "Total Sold" },
		{ text: amount, title: "Amount On Warehouse" },
	];

	return (
		<>
			<Box component="section" p={3}>
				<Box mb={1}>
					<PanelTitleBox title="Service Info">
						<EditButton onClick={onOpenServiceInfoModal} />
					</PanelTitleBox>
				</Box>
				{serviceInfo.map(({ title, text }) => {
					return <InfoRow key={title} title={title} text={text || "-"} />;
				})}
			</Box>
			<ModalPopup
				onCloseModalPopup={onCloseServiceInfoModal}
				isModalPopupOpen={isModalSecurityOpen}
				width="auto"
				height="auto"
			>
				<ProductServiceInfoForm onCancelForm={onCloseServiceInfoModal} />
			</ModalPopup>
		</>
	);
};

export default ProductServiceInfo;
