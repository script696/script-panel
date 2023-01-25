import { Button, FormControlLabel, Grid, Switch, TextField } from "@mui/material";

import React from "react";

import { FormikProps } from "formik";

import { LoadingButton } from "@mui/lab";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";

import { PROFILE_INFO_FIELDS_DATA } from "../../../constants/constants";
import { FormInfoValues } from "../../../types/types";

type ProfileInfoSlideProps = {
	formInstance: FormikProps<FormInfoValues>;
	onCancel: () => void;
};
const InfoSlide = ({ formInstance, onCancel }: ProfileInfoSlideProps) => {
	const handlePickDate = (value: any) => {
		const { $D: day, $M: month, $y: year } = value;
		if (!value) return;
		formInstance.setFieldValue("dateOfBirth", `${day}.${month}.${year}`);
	};
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			px={1}
			className="grid_test grid_style_bordered"
			component="form"
			onSubmit={formInstance.handleSubmit}
		>
			<Grid item container spacing={2} py={3}>
				{PROFILE_INFO_FIELDS_DATA.map(({ name, label, isFieldValueRequired }) => {
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
								value={formInstance.values[name]}
								onChange={formInstance.handleChange}
								onBlur={formInstance.handleBlur}
								error={formInstance.touched[name] && Boolean(formInstance.errors[name])}
								helperText={formInstance.touched[name] && formInstance.errors[name]}
							/>
						</Grid>
					);
				})}
				<Grid item xs={6}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Date Of Birth"
							value={formInstance.values.dateOfBirth}
							onChange={handlePickDate}
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
					<Button onClick={onCancel} className="style_ghost">
						Cancel
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default InfoSlide;
