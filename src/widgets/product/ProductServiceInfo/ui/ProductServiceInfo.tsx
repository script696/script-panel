import { Box } from "@mui/material";

import React from "react";

import { PanelTitleBox } from "shared/ui/PanelTitleBox";
import { EditButton } from "shared/ui/EditButton";

import { InfoRow } from "shared/ui/InfoRow";

import { Product } from "app/store/products/types";

import { ModalPopup, useModal } from "shared/ui/ModalPopup";
import { ProductServiceInfoForm } from "entities/product/ProductServiceInfoForm";
import { useDispatch } from "react-redux";

import { ServiceInfoForm } from "../../../../entities/product/ProductServiceInfoForm/types/types";
import { updateProductServiceInfo } from "../../../../app/store/products/actions";

type ProductServiceInfoProps = {
	product: Product;
};

const ProductServiceInfo = ({ product }: ProductServiceInfoProps) => {
	const dispatch = useDispatch();
	const {
		handleCloseModal: onCloseServiceInfoModal,
		handleOpenModal: onOpenServiceInfoModal,
		isModalOpen: isModalSecurityOpen,
	} = useModal();

	const handleSubmitAddressInfoForm = ({ amount, totalSold }: ServiceInfoForm) => {
		dispatch(
			updateProductServiceInfo({
				amount,
				id: product.id,
				onCloseModal: onCloseServiceInfoModal,
				totalSold,
			}),
		);
	};

	const serviceInfo = [
		{ text: product.id, title: "Id" },
		{ text: product.totalSold, title: "Total Sold" },
		{ text: product.amount, title: "Amount On Warehouse" },
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
				<ProductServiceInfoForm
					onCancelForm={onCloseServiceInfoModal}
					product={product}
					onSubmit={handleSubmitAddressInfoForm}
				/>
			</ModalPopup>
		</>
	);
};

export default ProductServiceInfo;
