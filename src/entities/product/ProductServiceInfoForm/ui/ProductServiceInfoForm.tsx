import { Grid, TextField } from "@mui/material";

import React from "react";

import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { ServiceInfoForm } from "../types/types";
import { SERVICE_INFO_FORM_FIELDS_DATA, VALIDATION_SCHEMA } from "../constants/constants";
import { Product } from "../../../../app/store/products/types";

type ProductServiceInfoFormProps = {
	product: Pick<Product, "amount" | "totalSold">;
	onSubmit: (values: ServiceInfoForm) => void;
};
const ProductServiceInfoForm = ({ product, onSubmit }: ProductServiceInfoFormProps) => {
	const handleSubmitAddressInfoForm = (values: ServiceInfoForm) => {
		onSubmit(values);
	};

	const serviceInfoForm: FormikProps<ServiceInfoForm> = useFormik<ServiceInfoForm>({
		enableReinitialize: true,
		initialValues: { amount: product.amount, totalSold: product.totalSold },
		onSubmit: handleSubmitAddressInfoForm,
		validateOnChange: true,
		validationSchema: Yup.object(VALIDATION_SCHEMA),
	});

	return (
		<Grid
			flexGrow={1}
			id="ProductServiceInfoForm"
			container
			justifyContent="space-between"
			px={1}
			className="grid_test grid_style_bordered"
			component="form"
			onSubmit={serviceInfoForm.handleSubmit}
		>
			<Grid item container spacing={2} py={3}>
				{SERVICE_INFO_FORM_FIELDS_DATA.map(({ name, label, isFieldValueRequired }) => {
					return (
						<Grid key={name} item xs={6}>
							<TextField
								className="style_dark"
								size="small"
								required={isFieldValueRequired}
								fullWidth
								type={"number"}
								id={name}
								label={label}
								name={name}
								autoComplete="auto"
								disabled={false}
								value={serviceInfoForm.values[name]}
								onChange={serviceInfoForm.handleChange}
								onBlur={serviceInfoForm.handleBlur}
								error={serviceInfoForm.touched[name] && Boolean(serviceInfoForm.errors[name])}
								helperText={serviceInfoForm.touched[name] && serviceInfoForm.errors[name]}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default ProductServiceInfoForm;
