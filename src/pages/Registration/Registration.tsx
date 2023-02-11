import { useFormik } from "formik";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { registerUser } from "../../app/store/auth/actions";
import { useAppSelector } from "../../shared/lib/hooks";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { passwordRegExp } from "../../shared/lib/constants/regExp";
import { ERRORS } from "../../utils/errors/errors";
import Logo from "../../shared/ui/Logo/ui/Logo";
import { RegistrationForm } from "../../entities/registration/RegistrationForm";
import RegistrationRedirectToLogin from "../../entities/registration/RegistrationRedirectToLogin/ui/RegistrationRedirectToLogin";

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

	const handleRegister = (data: FormValues) => {
		dispatch(registerUser({ data, navigate }));
	};

	return (
		<AuthLayout>
			<Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					maxWidth={450}
					height="100%"
					width="100%"
					rowGap={2}
				>
					<Logo size={50} color={colorMode === "dark" ? "#fff" : "#ddbea9"} />
					<RegistrationForm />
					<RegistrationRedirectToLogin />
				</Box>
			</Box>
		</AuthLayout>
	);
};
export default Registration;
