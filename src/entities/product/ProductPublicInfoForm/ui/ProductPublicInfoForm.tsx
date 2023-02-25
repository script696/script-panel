import { Button, Grid, TextField } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { PublicInfoForm } from "../types/types";
import { PUBLIC_INFO_FORM_FIELDS_DATA, VALIDATION_SCHEMA } from "../constants/constants";
import { Product } from "../../../../app/store/products/types";

type ProductPublicInfoFormProps = {
	onCancelForm: () => void;
	product: Product;
	onSubmit: (values: PublicInfoForm) => void;
};
const ProductPublicInfoForm = ({ onCancelForm, product, onSubmit }: ProductPublicInfoFormProps) => {
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
						Update Public Info
					</LoadingButton>
					<Button onClick={onCancelForm} className="style_ghost" sx={{ width: "6rem" }}>
						Cancel
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProductPublicInfoForm;
