import { Grid, TextField } from "@mui/material";

import React from "react";

import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { PublicInfoForm } from "../types/types";
import { PUBLIC_INFO_FORM_FIELDS_DATA, VALIDATION_SCHEMA } from "../constants/constants";
import { Product } from "../../../../app/store/products/types";

type ProductPublicInfoFormProps = {
	product: Pick<Product, "price" | "discount">;
	onSubmit: (values: PublicInfoForm) => void;
};
const ProductPublicInfoForm = ({ product, onSubmit }: ProductPublicInfoFormProps) => {
	const handleSubmitPublicInfoForm = (values: PublicInfoForm) => {
		onSubmit(values);
	};

	const publicInfoForm: FormikProps<PublicInfoForm> = useFormik<PublicInfoForm>({
		enableReinitialize: true,
		initialValues: { discount: product.discount, price: product.price },
		onSubmit: handleSubmitPublicInfoForm,
		validateOnChange: true,
		validationSchema: Yup.object(VALIDATION_SCHEMA),
	});

	return (
		<Grid
			id="ProductPublicInfoForm"
			height="100%"
			container
			justifyContent="space-between"
			px={1}
			className="grid_test grid_style_bordered"
			component="form"
			onSubmit={publicInfoForm.handleSubmit}
		>
			<Grid item container spacing={2} py={3}>
				{PUBLIC_INFO_FORM_FIELDS_DATA.map(({ name, label, isFieldValueRequired }) => {
					return (
						<Grid key={name} item xs={6}>
							<TextField
								className="style_dark"
								size="small"
								required={isFieldValueRequired}
								fullWidth
								id={name}
								type="number"
								label={label}
								name={name}
								autoComplete="auto"
								disabled={false}
								value={publicInfoForm.values[name]}
								onChange={publicInfoForm.handleChange}
								onBlur={publicInfoForm.handleBlur}
								error={publicInfoForm.touched[name] && Boolean(publicInfoForm.errors[name])}
								helperText={publicInfoForm.touched[name] && publicInfoForm.errors[name]}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default ProductPublicInfoForm;
