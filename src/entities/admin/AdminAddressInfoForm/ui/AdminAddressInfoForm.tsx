import { Button, Grid, TextField } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { useAppSelector } from "shared/lib/hooks";

import { removeFalsyValues } from "shared/lib/handlers";
import { updateAddressInfo } from "app/store/admin/actions";

import { ADDRESS_INFO_FORM_FIELDS_DATA, VALIDATION_SCHEMA } from "../constants/constants";
import { AddressInfoForm } from "../types/types";

type AdminAddressInfoFormProps = {
	onCancelForm: () => void;
	value: string;
};

const AdminAddressInfoForm = ({ onCancelForm }: AdminAddressInfoFormProps) => {
	const dispatch = useDispatch();
	const { addressLine, apartment, city, country } = useAppSelector((state) => state.UserReducer);

	const handleSubmitAddressInfoForm = (values: AddressInfoForm) => {
		const mappedValues = removeFalsyValues<AddressInfoForm>(values);
		dispatch(updateAddressInfo({ data: mappedValues, onCloseModal: onCancelForm }));
	};

	const addressInfoForm: FormikProps<AddressInfoForm> = useFormik<AddressInfoForm>({
		enableReinitialize: true,
		initialValues: { addressLine, apartment, city, country },
		onSubmit: handleSubmitAddressInfoForm,
		validateOnChange: true,
		validationSchema: Yup.object(VALIDATION_SCHEMA),
	});

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			px={1}
			className="grid_test grid_style_bordered"
			component="form"
			onSubmit={addressInfoForm.handleSubmit}
		>
			<Grid item container spacing={2} py={3}>
				{ADDRESS_INFO_FORM_FIELDS_DATA.map(({ name, label, isFieldValueRequired }) => {
					return (
						<Grid key={name} item xs={6}>
							<TextField
								size="small"
								required={isFieldValueRequired}
								fullWidth
								id={name}
								label={label}
								name={name}
								autoComplete="auto"
								disabled={false}
								value={addressInfoForm.values[name]}
								onChange={addressInfoForm.handleChange}
								onBlur={addressInfoForm.handleBlur}
								error={addressInfoForm.touched[name] && Boolean(addressInfoForm.errors[name])}
								helperText={addressInfoForm.touched[name] && addressInfoForm.errors[name]}
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
						sx={{ my: 2, textTransform: "none" }}
					>
						Update Address
					</LoadingButton>
					<Button onClick={onCancelForm} className="style_ghost">
						Cancel
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AdminAddressInfoForm;
