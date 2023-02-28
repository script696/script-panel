import { Box } from "@mui/material";

import React from "react";

import { PanelTitleBox } from "shared/ui/PanelTitleBox";
import { EditButton } from "shared/ui/EditButton";

import { InfoRow } from "shared/ui/InfoRow";

import { Product } from "app/store/products/types";

import { ModalPopup, useModal } from "shared/ui/Modal/ModalBase";
import { ProductPublicInfoForm } from "entities/product/ProductPublicInfoForm";
import { useDispatch } from "react-redux";

import { PublicInfoForm } from "../../../../entities/product/ProductPublicInfoForm/types/types";
import { updateProductPublicInfo } from "../../../../app/store/products/actions";
import { TextFieldsModalContent } from "../../../../shared/ui/Modal/TextFieldsModalContent";

type ProductPublicInfoProps = {
	product: Product;
};

const ProductPublicInfo = ({ product }: ProductPublicInfoProps) => {
	const dispatch = useDispatch();
	const {
		handleCloseModal: onClosePublicInfoModal,
		handleOpenModal: onOpenPublicInfoModal,
		isModalOpen: isModalSecurityOpen,
	} = useModal();

	const handleSubmitPublicInfoForm = ({ discount, price }: PublicInfoForm) => {
		dispatch(
			updateProductPublicInfo({
				discount,
				id: product.id,
				onCloseModal: onClosePublicInfoModal,
				price,
			}),
		);
	};

	const { price, discount } = product;
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
				<TextFieldsModalContent onCancelForm={onClosePublicInfoModal} formId="ProductPublicInfoForm">
					<ProductPublicInfoForm product={product} onSubmit={handleSubmitPublicInfoForm} />
				</TextFieldsModalContent>
			</ModalPopup>
		</>
	);
};

export default ProductPublicInfo;
