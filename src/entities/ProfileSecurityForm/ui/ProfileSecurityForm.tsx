import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";

import { PROFILE_SECURITY_FIELDS_DATA } from "../consts/constants";
import useProfileSecurityForm from "../hooks/useProfileSecurityForm";

type ProfileSecurityFormProps = {
	onCancelForm: () => void;
};

const ProfileSecurityForm = ({ onCancelForm }: ProfileSecurityFormProps) => {
	const { formSecurityInstance } = useProfileSecurityForm({
		newPassword: "",
		oldPassword: "",
		repeatPassword: "",
	});

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			px={1}
			component="form"
			onSubmit={formSecurityInstance.handleSubmit}
		>
			<Typography component="h3" variant="h3" className="color_secondary">
				Update Your Security Settings
			</Typography>
			<Grid item container spacing={2} py={3} px={"20%"}>
				{PROFILE_SECURITY_FIELDS_DATA.map(({ name, label, isFieldValueRequired, title }) => {
					return (
						<Grid key={name} item xs={12} container direction="column" rowGap={1}>
							<Typography component="p" variant="body1" className="color_secondary" pl={1}>
								{title}
							</Typography>
							<TextField
								size="small"
								required={isFieldValueRequired}
								fullWidth
								id={name}
								label={label}
								name={name}
								autoComplete="auto"
								disabled={false}
								value={formSecurityInstance.values[name]}
								onChange={formSecurityInstance.handleChange}
								onBlur={formSecurityInstance.handleBlur}
								error={formSecurityInstance.touched[name] && Boolean(formSecurityInstance.errors[name])}
								helperText={formSecurityInstance.touched[name] && formSecurityInstance.errors[name]}
							/>
						</Grid>
					);
				})}
				<Grid item xs={12} container alignItems="center" columnGap={2}>
					<Box display="flex" columnGap={2} alignItems="center" justifyContent="center">
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
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProfileSecurityForm;
