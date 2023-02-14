import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

import { useFormik } from "formik";

import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { Elevation } from "../../../../shared/ui/Elevation";

import { FormValues } from "../types/types";

import { registerUser } from "../../../../app/store/auth/actions";
import { useAppSelector } from "../../../../shared/lib/hooks";
import { INITIAL_FORM_VALUES, VALIDATION_SCHEMA } from "../constants/constants";

const RegistrationForm = () => {
	const dispatch = useDispatch();
	const { isLoading } = useAppSelector((state) => state.RequestsReducer);
	const navigate = useNavigate();

	const handleSubmit = (data: FormValues) => {
		dispatch(registerUser({ data, navigate }));
	};

	const formik = useFormik<FormValues>({
		initialValues: INITIAL_FORM_VALUES,
		onSubmit: handleSubmit,
		validateOnChange: true,
		validationSchema: Yup.object(VALIDATION_SCHEMA),
	});

	return (
		<Elevation>
			<Grid
				container
				component="form"
				onSubmit={formik.handleSubmit}
				className="grid_style_bordered grid_border_light"
				direction="column"
				alignItems="center"
				rowGap={2}
				p={3}
			>
				<Typography component="h2" variant="h5" className="color_contrastText">
					Registration
				</Typography>
				<TextField
					size="small"
					required
					fullWidth
					id="nickName"
					label="Nickname"
					name="nickName"
					autoComplete="name"
					disabled={isLoading}
					value={formik.values.nickName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.nickName && Boolean(formik.errors.nickName)}
					helperText={formik.touched.nickName && formik.errors.nickName}
				/>
				<TextField
					size="small"
					required
					fullWidth
					id="email"
					label="Email"
					name="email"
					autoComplete="email"
					disabled={isLoading}
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					size="small"
					required
					fullWidth
					id="password"
					label="Password"
					name="password"
					type="password"
					autoComplete="auto"
					disabled={isLoading}
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<TextField
					size="small"
					required
					fullWidth
					id="passwordRepeat"
					label="Repeat your password"
					name="passwordRepeat"
					type="password"
					autoComplete="auto"
					disabled={isLoading}
					value={formik.values.passwordRepeat}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.passwordRepeat && Boolean(formik.errors.passwordRepeat)}
					helperText={formik.touched.passwordRepeat && formik.errors.passwordRepeat}
				/>
				<LoadingButton
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					disabled={isLoading}
					loading={isLoading}
					className="color_secondary"
					sx={{ textTransform: "none" }}
				>
					Register
				</LoadingButton>
			</Grid>
		</Elevation>
	);
};

export default RegistrationForm;
