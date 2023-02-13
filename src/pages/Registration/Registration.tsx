import { Box } from "@mui/material";

import { useAppSelector } from "../../shared/lib/hooks";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Logo from "../../shared/ui/Logo/ui/Logo";
import { RegistrationForm } from "../../entities/registration/RegistrationForm";
import RegistrationRedirectToLogin from "../../entities/registration/RegistrationRedirectToLogin/ui/RegistrationRedirectToLogin";

const Registration = () => {
	const { colorMode } = useAppSelector((state) => state.UiReducer);

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
