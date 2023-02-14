import { Grid } from "@mui/material";

import AuthLayout from "layouts/AuthLayout/AuthLayout";
import { LoginPromo } from "widgets/login/LoginPromo";
import { LoginAuthCol } from "widgets/login/LoginAuthCol";

import { PublicHeader } from "../../widgets/header/PublicHeader";

const Login = () => {
	return (
		<AuthLayout>
			<Grid container height="100vh">
				<Grid
					item
					display={{ md: "flex", sm: "none", xs: "none" }}
					md={7}
					lg={7}
					xl={8}
					className="grid_dark"
					position="relative"
					direction="column"
				>
					<PublicHeader />
					<LoginPromo />
				</Grid>
				<Grid item p={4} xs={12} sm={12} md={5} lg={5} xl={4}>
					<LoginAuthCol />
				</Grid>
			</Grid>
		</AuthLayout>
	);
};

export default Login;
