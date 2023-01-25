import { Button, Grid, TextField } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { FormikProps } from "formik";

import { PROFILE_ADDRESS_FIELDS_DATA } from "../../../constants/constants";
import { FormAddressValues } from "../../../types/types";

type ProfileAddressSlideProps = {
	formInstance: FormikProps<FormAddressValues>;
	onCancel: () => void;
};

const AddressSlide = ({ formInstance, onCancel }: ProfileAddressSlideProps) => {
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
				{PROFILE_ADDRESS_FIELDS_DATA.map(({ name, label, isFieldValueRequired }) => {
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
								value={formInstance.values[name]}
								onChange={formInstance.handleChange}
								onBlur={formInstance.handleBlur}
								error={formInstance.touched[name] && Boolean(formInstance.errors[name])}
								helperText={formInstance.touched[name] && formInstance.errors[name]}
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
					<Button onClick={onCancel} className="style_ghost">
						Cancel
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AddressSlide;
