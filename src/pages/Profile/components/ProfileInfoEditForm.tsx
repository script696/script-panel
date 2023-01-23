import { Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

type FormValues = {
	email: string;
	username: string;
};

const ProfileInfoEditForm = ({ initialProfileInfoFormValues }: any) => {
	const formik = useFormik<FormValues>({
		enableReinitialize: true,
		initialValues: initialProfileInfoFormValues,
		onSubmit: (values) => {
			console.log("submit");
			// handleUpdateProfile(values);
		},
		validateOnChange: true,
		validationSchema: Yup.object({
			email: Yup.string().email().required(),
			username: Yup.string().min(5).max(10).required(),
		}),
	});

	return (
		<Grid container sx={{ height: "100%", width: "100%" }} px={2}>
			<Typography component="h3" variant="h4" className="color_secondary">
				Update Profile
			</Typography>
		</Grid>
	);
};

export default ProfileInfoEditForm;
