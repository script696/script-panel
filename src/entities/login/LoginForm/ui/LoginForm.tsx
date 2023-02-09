import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { FormValues } from "../types/types";
import { useAppSelector } from "../../../../shared/lib/hooks";
import { login } from "../../../../app/store/auth/actions";
import { CREDENTIALS_MOCK } from "../../../../shared/lib/mocks/mocks";
import { Elevation } from "../../../../shared/ui/Elevation";
import { VALIDATORS } from "../../../../shared/lib/constants/validators";

const LoginForm = () => {
	const { isLoading } = useAppSelector((state) => state.RequestsReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (data: FormValues) => {
		dispatch(login({ data, navigate }));
	};

	const formik = useFormik<FormValues>({
		initialValues: {
			email: CREDENTIALS_MOCK.email,
			password: CREDENTIALS_MOCK.password,
		},
		onSubmit: handleSubmit,
		validateOnChange: true,
		validationSchema: Yup.object({
			email: VALIDATORS.email,
			password: VALIDATORS.password,
		}),
	});

	return (
		<Elevation>
			<Grid
				className="grid_style_bordered grid_border_light"
				container
				alignItems="center"
				direction="column"
				component="form"
				rowGap={3}
				px={4}
				py={2}
				onSubmit={formik.handleSubmit}
			>
				<Typography component="h2" variant="h3">
					Войти
				</Typography>
				<TextField
					size="small"
					required
					fullWidth
					id="email"
					label="Введите почту"
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
					type="password"
					id="password"
					name="password"
					label="Введите пароль"
					autoComplete="current-password"
					disabled={isLoading}
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<LoadingButton
					type="submit"
					fullWidth
					variant="contained"
					color="inherit"
					className="color_secondary"
					disabled={isLoading}
					loading={isLoading}
					sx={{ textTransform: "none" }}
				>
					Войти
				</LoadingButton>
			</Grid>
		</Elevation>
	);
};

export default LoginForm;
