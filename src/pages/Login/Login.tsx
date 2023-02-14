import { Box, Grid } from "@mui/material";

import { LoginPromo } from "widgets/login/LoginPromo";
import { LoginAuthCol } from "widgets/login/LoginAuthCol";

import { PublicHeader } from "../../widgets/header/PublicHeader";
import { Footer } from "../../widgets/footer";

const Login = () => {
	return (
		<Box height="100vh" display="flex">
			<Grid
				display={{ md: "flex", sm: "none", xs: "none" }}
				className="grid_dark"
				position="relative"
				direction="column"
			>
				<PublicHeader />
				<LoginPromo />
				<Footer />
			</Grid>
			<Grid component="main" flexBasis="35rem" px={2} py={4}>
				<LoginAuthCol />
			</Grid>
		</Box>
	);
};

export default Login;
