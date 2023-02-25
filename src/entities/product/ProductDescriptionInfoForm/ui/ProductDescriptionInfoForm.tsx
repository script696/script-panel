import { Button, Grid, TextField } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { DescriptionInfoForm } from "../types/types";
import { DESCRIPTION_INFO_FORM_FIELDS_DATA, VALIDATION_SCHEMA } from "../constants/constants";
import { updateProductDescription } from "../../../../app/store/products/actions";

type Product = { title: string; description: string; id: number };
type ProductDescriptionInfoFormProps = {
	onCancelForm: () => void;
	product: Product;
};
const ProductDescriptionInfoForm = ({ onCancelForm, product }: ProductDescriptionInfoFormProps) => {
	const dispatch = useDispatch();
	const handleSubmitProductDescriptionForm = (values: DescriptionInfoForm) => {
		dispatch(updateProductDescription({ ...values, id: product.id }));
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
			height="100%"
			container
			justifyContent="space-between"
			px={1}
			className="grid_test grid_style_bordered"
			component="form"
			onSubmit={descriptionInfoForm.handleSubmit}
		>
			<Grid item container spacing={2} py={3}>
				{DESCRIPTION_INFO_FORM_FIELDS_DATA.map(({ name, label, isFieldValueRequired }) => {
					return (
						<Grid key={name} item xs={6}>
							<TextField
								className="style_dark"
								size="small"
								required={isFieldValueRequired}
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
						</Grid>
					);
				})}
				<Grid item xs={12} container alignItems="center" columnGap={2}>
					<LoadingButton
						type="submit"
						variant="contained"
						color="inherit"
						className="color_secondary"
						disabled={false}
						loading={false}
						sx={{ my: 2, textTransform: "none", width: "6rem" }}
					>
						Update Description
					</LoadingButton>
					<Button onClick={onCancelForm} className="style_ghost" sx={{ width: "6rem" }}>
						Cancel
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProductDescriptionInfoForm;
