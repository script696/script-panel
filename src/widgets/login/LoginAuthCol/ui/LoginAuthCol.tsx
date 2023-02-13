import { Box } from "@mui/material";

import { useAppSelector } from "../../../../shared/lib/hooks";
import { LoginForm } from "../../../../entities/login/LoginForm";
import { LoginRedirectToRegistration } from "../../../../entities/login/LoginRedirectToRegistration";
import SvgLoader from "../../../../shared/ui/SvgLoader/ui/SvgLoader";
import { ReactComponent as Logo } from "../../../../app/assets/svg/logo.svg";

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
				<SvgLoader size={"2.8rem"} mb={2} color={colorMode === "dark" ? "#fff" : "#4A403A"} svg={Logo} />
				<LoginForm />
			</Box>
			<LoginRedirectToRegistration />
		</Box>
	);
};

export default LoginAuthCol;
