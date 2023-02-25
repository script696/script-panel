import { Button, Grid, TextField } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { ServiceInfoForm } from "../types/types";
import { SERVICE_INFO_FORM_FIELDS_DATA, VALIDATION_SCHEMA } from "../constants/constants";
import { Product } from "../../../../app/store/products/types";

type ProductServiceInfoFormProps = {
	onCancelForm: () => void;
	product: Product;
	onSubmit: (values: ServiceInfoForm) => void;
};
const ProductServiceInfoForm = ({ onCancelForm, product, onSubmit }: ProductServiceInfoFormProps) => {
	const handleSubmitAddressInfoForm = (values: ServiceInfoForm) => {
		onSubmit(values);
	};

	const serviceInfoForm: FormikProps<ServiceInfoForm> = useFormik<ServiceInfoForm>({
		enableReinitialize: true,
		initialValues: { amount: product.amount, id: product.id, totalSold: product.totalSold },
		onSubmit: handleSubmitAddressInfoForm,
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
								id={name}
								label={label}
								name={name}
								autoComplete="auto"
								disabled={name === "id"}
								value={serviceInfoForm.values[name]}
								onChange={serviceInfoForm.handleChange}
								onBlur={serviceInfoForm.handleBlur}
								error={serviceInfoForm.touched[name] && Boolean(serviceInfoForm.errors[name])}
								helperText={serviceInfoForm.touched[name] && serviceInfoForm.errors[name]}
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
						Update Service Info
					</LoadingButton>
					<Button onClick={onCancelForm} className="style_ghost" sx={{ width: "6rem" }}>
						Cancel
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProductServiceInfoForm;
