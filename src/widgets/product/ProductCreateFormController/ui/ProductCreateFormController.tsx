import { useEffect, useState } from "react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";

import { ProductDescriptionInfoForm } from "entities/product/ProductDescriptionInfoForm";
import { ProductServiceInfoForm } from "entities/product/ProductServiceInfoForm";
import { ProductPublicInfoForm } from "entities/product/ProductPublicInfoForm";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { TextFieldsModalContent } from "shared/ui/Modal/TextFieldsModalContent";

import { createProduct } from "../../../../app/store/products/actions";
import { Product } from "../../../../app/store/products/types";

const productDescription = { description: "", title: "" };
const productServiceInfo = { amount: 0, totalSold: 0 };
const productPublicInfo = { discount: 0, price: 0 };

type ProductCreateFormControllerProps = {
	onRejectCreateNewProduct: () => void;
};

const ProductCreateFormController = ({ onRejectCreateNewProduct }: ProductCreateFormControllerProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const steps = ["Fill Description", "Fill Public Info", "Fill Service Info"];
	const [productData, setProductData] = useState<Omit<Product, "id" | "url">>({
		amount: 0,
		description: "",
		discount: 0,
		price: 0,
		title: "",
		totalSold: 0,
	});
	const [createFlowFinished, setCreateFlowFinished] = useState(false);
	const [currentStage, setCurrentStage] = useState<keyof typeof currentForm>("description");

	const onSubmitDescriptionInfoForm = ({ title, description }: { title: string; description: string }) => {
		setProductData((prevState) => ({ ...prevState, description, title }));
		setCurrentStage("publicInfo");
	};

	const onSubmitPublicInfoForm = ({ price, discount }: { price: number; discount: number }) => {
		setProductData((prevState) => ({ ...prevState, discount, price }));
		setCurrentStage("serviceInfo");
	};

	const onSubmitServiceInfoForm = ({ amount, totalSold }: { amount: number; totalSold: number }) => {
		setProductData((prevState) => ({ ...prevState, amount, totalSold }));
		setCreateFlowFinished(true);
	};

	const currentForm = {
		description: {
			element: (
				<TextFieldsModalContent onCancelForm={onRejectCreateNewProduct} formId="ProductDescriptionInfoForm">
					<ProductDescriptionInfoForm product={productDescription} onSubmit={onSubmitDescriptionInfoForm} />
				</TextFieldsModalContent>
			),
			index: 0,
		},
		publicInfo: {
			element: (
				<TextFieldsModalContent onCancelForm={onRejectCreateNewProduct} formId="ProductPublicInfoForm">
					<ProductPublicInfoForm product={productPublicInfo} onSubmit={onSubmitPublicInfoForm} />
				</TextFieldsModalContent>
			),
			index: 1,
		},
		serviceInfo: {
			element: (
				<TextFieldsModalContent onCancelForm={onRejectCreateNewProduct} formId="ProductServiceInfoForm">
					<ProductServiceInfoForm product={productServiceInfo} onSubmit={onSubmitServiceInfoForm} />
				</TextFieldsModalContent>
			),
			index: 2,
		},
	};

	const currentIndex = currentForm[currentStage].index;

	useEffect(() => {
		if (createFlowFinished) {
			dispatch(createProduct({ ...productData, navigate }));
		}
	}, [createFlowFinished]);

	return (
		<Box display="flex" flexDirection="column" rowGap={2} flexGrow={1}>
			<Typography
				component="h2"
				variant="h4"
				mb={1}
				sx={{ margin: "0" }}
				textAlign="center"
				className="color_secondary"
			>
				{steps[currentIndex]}
			</Typography>
			{currentForm[currentStage].element}
			<Box sx={{ width: "100%" }}>
				<Stepper activeStep={currentIndex} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</Box>
		</Box>
	);
};

export default ProductCreateFormController;
