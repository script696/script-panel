import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { Logo } from "../../components";
import { registerUser } from "../../store/auth/actions";
import { useAppSelector } from "../../hooks";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { passwordRegExp } from "../../utils/regExp/regExp";
import { ERRORS } from "../../utils/errors/errors";

type FormValues = {
	role: string;
	nickName: string;
	password: string;
	passwordRepeat: string;
	email: string;
};

const Registration = () => {
	const { colorMode } = useAppSelector((state) => state.UiReducer);

	const { isLoading } = useAppSelector((state) => state.RequestsReducer);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const formik = useFormik<FormValues>({
		initialValues: {
			email: "",
			nickName: "",
			password: "",
			passwordRepeat: "",
			role: "admin",
		},
		onSubmit: (values) => {
			handleRegister(values);
		},
		validateOnChange: true,
		validationSchema: Yup.object({
			email: Yup.string().email().required(),
			nickName: Yup.string().min(5).max(15).required(),
			password: Yup.string().matches(passwordRegExp, ERRORS.password).required(),
			passwordRepeat: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords should match")
				.required(),
		}),
	});

	const handleRegister = (values: FormValues) => {
		dispatch(registerUser(values, navigate));
	};

	return (
		<AuthLayout>
			<Grid container p={4} direction="column" alignItems="center" maxWidth={450}>
				<Logo size={50} color={colorMode === "dark" ? "#fff" : "#ddbea9"} />
				<Typography component="h2" variant="h3" mb={2} className="color_secondary">
					Регистрация
				</Typography>
				<Box component="form" noValidate onSubmit={formik.handleSubmit}>
					<TextField
						size="small"
						margin="normal"
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
						margin="normal"
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
						margin="normal"
						required
						fullWidth
						id="password"
						label="Password"
						name="password"
						type="password"
						autoComplete="new-password"
						disabled={isLoading}
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<TextField
						size="small"
						margin="normal"
						required
						fullWidth
						id="passwordRepeat"
						label="Repeat your password"
						name="passwordRepeat"
						type="password"
						autoComplete="new-password"
						disabled={isLoading}
						value={formik.values.passwordRepeat}
						onChange={formik.handleChange}
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
						className="button_login"
						sx={{ my: 2 }}
					>
						Register
					</LoadingButton>
					<Grid container alignItems="center" justifyContent="space-between">
						<Typography component="span" variant="subtitle1" className="color_secondary">
							Уже зарегестрированы ?
						</Typography>
						<Button component={Link} to="/signin" sx={{ width: "40%" }} className="button_login">
							Войти
						</Button>
					</Grid>
				</Box>
			</Grid>
		</AuthLayout>
	);
};
export default Registration;
