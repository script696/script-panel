import Box from "@mui/material/Box";

import SvgLoader from "../../../../shared/ui/SvgLoader/ui/SvgLoader";
import { ReactComponent as LoginPromoSvg } from "../../../../app/assets/svg/information.svg";
import { useAppSelector } from "../../../../shared/lib/hooks";

const LoginPromo = () => {
	const { colorMode } = useAppSelector((state) => state.UiReducer);

	return (
		<Box
			height="100%"
			width="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
			position="relative"
		>
			<SvgLoader size="22rem" svg={LoginPromoSvg} color={colorMode === "dark" ? "#fff" : "#ddbea9"} />
		</Box>
	);
};

export default LoginPromo;
