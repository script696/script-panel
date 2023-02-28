import { Box, Grid, TextField } from "@mui/material";

import React from "react";

import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { DescriptionInfoForm } from "../types/types";
import { DESCRIPTION_INFO_FORM_FIELDS_DATA, VALIDATION_SCHEMA } from "../constants/constants";

type Product = { title: string; description: string; id: number };
type ProductDescriptionInfoFormProps = {
	product: Pick<Product, "title" | "description">;
	onSubmit: (values: DescriptionInfoForm) => void;
};
const ProductDescriptionInfoForm = ({ product, onSubmit }: ProductDescriptionInfoFormProps) => {
	const handleSubmitProductDescriptionForm = (values: DescriptionInfoForm) => {
		onSubmit(values);
	};

	const descriptionInfoForm: FormikProps<DescriptionInfoForm> = useFormik<DescriptionInfoForm>({
		enableReinitialize: true,
		initialValues: { description: product.description, title: product.title },
		onSubmit: handleSubmitProductDescriptionForm,
		validateOnChange: true,
		validationSchema: Yup.object(VALIDATION_SCHEMA),
	});

	return (
		<Grid
			flexGrow={1}
			id="ProductDescriptionInfoForm"
			container
			justifyContent="space-between"
			px={1}
			className="grid_test grid_style_bordered"
			component="form"
			onSubmit={descriptionInfoForm.handleSubmit}
		>
			<Box display="flex" flexDirection="column" width="100%" rowGap={2} py={3} flexGrow={1} height="100%">
				{DESCRIPTION_INFO_FORM_FIELDS_DATA.map(({ name, label, isFieldValueRequired, isMultiline }) => {
					return (
						<TextField
							key={name}
							className="style_dark"
							size="small"
							required={isFieldValueRequired}
							multiline={isMultiline}
							fullWidth
							id={name}
							label={label}
							name={name}
							autoComplete="auto"
							disabled={false}
							value={descriptionInfoForm.values[name]}
							onChange={descriptionInfoForm.handleChange}
							onBlur={descriptionInfoForm.handleBlur}
							error={descriptionInfoForm.touched[name] && Boolean(descriptionInfoForm.errors[name])}
							helperText={descriptionInfoForm.touched[name] && descriptionInfoForm.errors[name]}
						/>
					);
				})}
			</Box>
		</Grid>
	);
};

export default ProductDescriptionInfoForm;
