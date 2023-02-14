import { Box } from "@mui/material";
import { RegistrationRedirectToLogin } from "entities/registration/RegistrationRedirectToLogin";

import { useAppSelector } from "../../shared/lib/hooks";
import { Footer } from "../../widgets/footer";
import { PublicHeader } from "../../widgets/header/PublicHeader";
import { RegistrationForm } from "../../entities/registration/RegistrationForm";
import SvgLoader from "../../shared/ui/SvgLoader/ui/SvgLoader";
import { ReactComponent as LoginPromoSvg } from "../../app/assets/svg/logo.svg";

const Registration = () => {
	const { colorMode } = useAppSelector((state) => state.UiReducer);

	return (
		<Box height="100vh" boxSizing="border-box" display="flex" flexDirection="column">
			<PublicHeader classNames={["color_secondary"]} />
			<Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
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
			<Footer classNames={["color_contrastText"]} />
		</Box>
	);
};
export default Registration;
