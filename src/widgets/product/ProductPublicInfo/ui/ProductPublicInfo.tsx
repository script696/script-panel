import { Box } from "@mui/material";

import React from "react";

import { PanelTitleBox } from "shared/ui/PanelTitleBox";
import { EditButton } from "shared/ui/EditButton";

import { InfoRow } from "shared/ui/InfoRow";

import { Product } from "app/store/products/types";

import { ModalPopup, useModal } from "../../../../shared/ui/ModalPopup";
import { ProductPublicInfoForm } from "../../../../entities/product/ProductPublicInfoForm";

type ProductPublicInfoProps = {
	data: Product;
};

const ProductPublicInfo = ({ data }: ProductPublicInfoProps) => {
	const {
		handleCloseModal: onClosePublicInfoModal,
		handleOpenModal: onOpenPublicInfoModal,
		isModalOpen: isModalSecurityOpen,
	} = useModal();

	const { price, discount } = data;

	const serviceInfo = [
		{ text: price, title: "Price" },
		{ text: discount, title: "Discount" },
	];

	return (
		<>
			<Box component="section" p={3}>
				<Box mb={1}>
					<PanelTitleBox title="Public Info">
						<EditButton onClick={onOpenPublicInfoModal} />
					</PanelTitleBox>
				</Box>
				{serviceInfo.map(({ title, text }) => {
					return <InfoRow key={title} title={title} text={text || "-"} />;
				})}
			</Box>
			<ModalPopup
				onCloseModalPopup={onClosePublicInfoModal}
				isModalPopupOpen={isModalSecurityOpen}
				width="auto"
				height="auto"
			>
				<ProductPublicInfoForm onCancelForm={onClosePublicInfoModal} />
			</ModalPopup>
		</>
	);
};

export default ProductPublicInfo;
