import Box from "@mui/material/Box";

import { ReactComponent as LoginPromoSvg } from "../lib/assets/information.svg";

const LoginPromo = () => {
	return (
		<Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
			<Box flexGrow={1} height="25rem" width="25rem">
				<LoginPromoSvg height="100%" width="100%" />
			</Box>
		</Box>
	);
};

export default LoginPromo;
