import { Button, FormControlLabel, Grid, Switch, TextField } from "@mui/material";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LoadingButton } from "@mui/lab";
import React from "react";

import { FormikProps, useFormik } from "formik";

import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { removeFalsyValues } from "shared/lib/handlers";
import { updateBasicInfo } from "app/store/admin/actions";
import { useAppSelector } from "shared/lib/hooks";

import { ADDRESS_INFO_FORM_FIELDS_DATA, VALIDATION_SCHEMA } from "../constants/constants";
import { BasicInfoForm } from "../types/types";

type AdminBasicInfoFormProps = {
	onCancelForm: () => void;
	value: string;
};

const AdminBasicInfoForm = ({ onCancelForm }: AdminBasicInfoFormProps) => {
	const { nickName, fullName, phoneNumber, dateOfBirth } = useAppSelector((state) => state.UserReducer);
	const dispatch = useDispatch();
	const handleSubmitBasicInfoForm = (values: BasicInfoForm) => {
		const mappedValues = removeFalsyValues<BasicInfoForm>(values);
		dispatch(updateBasicInfo({ data: mappedValues, onCloseModal: onCancelForm }));
	};

	const basicInfoForm: FormikProps<BasicInfoForm> = useFormik<BasicInfoForm>({
		enableReinitialize: true,
		initialValues: { dateOfBirth, fullName, nickName, phoneNumber },
		onSubmit: handleSubmitBasicInfoForm,
		validateOnChange: true,
		validationSchema: Yup.object(VALIDATION_SCHEMA),
	});

	const getPickedDate = (value: any) => {
		if (!value) return;
		const { $D: day, $M: month, $y: year } = value;
		basicInfoForm.setFieldValue("dateOfBirth", `0${day}.0${month}.${year}`);
	};

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			px={1}
			className="grid_test grid_style_bordered"
			component="form"
			onSubmit={basicInfoForm.handleSubmit}
		>
			<Grid item container spacing={2} py={3}>
				{ADDRESS_INFO_FORM_FIELDS_DATA.map(({ name, label, isFieldValueRequired }) => {
					return (
						<Grid item xs={6} key={name}>
							<TextField
								size="small"
								required={isFieldValueRequired}
								fullWidth
								id={name}
								label={label}
								name={name}
								autoComplete="email"
								disabled={false}
								value={basicInfoForm.values[name]}
								onChange={basicInfoForm.handleChange}
								onBlur={basicInfoForm.handleBlur}
								error={basicInfoForm.touched[name] && Boolean(basicInfoForm.errors[name])}
								helperText={basicInfoForm.touched[name] && basicInfoForm.errors[name]}
							/>
						</Grid>
					);
				})}
				<Grid item xs={6}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DesktopDatePicker
							label="Date Of Birth"
							value={basicInfoForm.values.dateOfBirth}
							onChange={getPickedDate}
							renderInput={(params) => <TextField {...params} size="small" fullWidth />}
						/>
					</LocalizationProvider>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Switch defaultChecked color="info" className="color_dark" />}
						label="Use full name to display"
					/>
				</Grid>
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
						Update Profile
					</LoadingButton>
					<Button onClick={onCancelForm} className="style_ghost">
						Cancel
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AdminBasicInfoForm;
