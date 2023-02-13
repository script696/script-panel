import { Box } from "@mui/material";

import { useAppSelector } from "../../../../shared/lib/hooks";
import { LoginForm } from "../../../../entities/login/LoginForm";
import { LoginRedirectToRegistration } from "../../../../entities/login/LoginRedirectToRegistration";
import Logo from "../../../../shared/ui/Logo/ui/Logo";

const LoginAuthCol = () => {
	const { colorMode } = useAppSelector((state) => state.UiReducer);

	return (
		<Box
			height="100%"
			width="100%"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			flexDirection="column"
		>
			<Box width="100%" display="flex" alignItems="center" flexDirection="column">
				<Logo size={50} mb={2} color={colorMode === "dark" ? "#fff" : "#ddbea9"} />
				<LoginForm />
			</Box>
			<LoginRedirectToRegistration />
		</Box>
	);
};

export default LoginAuthCol;
