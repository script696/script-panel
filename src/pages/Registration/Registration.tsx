import { Box } from "@mui/material";

import { useAppSelector } from "../../shared/lib/hooks";
import SvgLoader from "../../shared/ui/SvgLoader/ui/SvgLoader";
import { RegistrationForm } from "../../entities/registration/RegistrationForm";
import RegistrationRedirectToLogin from "../../entities/registration/RegistrationRedirectToLogin/ui/RegistrationRedirectToLogin";
import { ReactComponent as LoginPromoSvg } from "../../app/assets/svg/logo.svg";
import { PublicHeader } from "../../widgets/header/PublicHeader";

const Registration = () => {
	const { colorMode } = useAppSelector((state) => state.UiReducer);

	return (
		<Box height="100vh" boxSizing="border-box">
			<PublicHeader classNames={["color_secondary"]} />
			<Box display="flex" justifyContent="center" alignItems="center" flexGrow={1} width="100%" height="100%">
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					maxWidth={550}
					width="100%"
					rowGap={2}
				>
					<SvgLoader size={"2.8rem"} color={colorMode === "dark" ? "#fff" : "#4A403A"} svg={LoginPromoSvg} />
					<RegistrationForm />
					<RegistrationRedirectToLogin />
				</Box>
			</Box>
		</Box>
	);
};
export default Registration;
