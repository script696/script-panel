import { Grid } from "@mui/material";

import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { LoginPromo } from "../../widgets/login/LoginPromo";
import { LoginAuthCol } from "../../widgets/login/LoginAuthCol";

const Login = () => {
	return (
		<AuthLayout>
			<Grid container height="100vh">
				<Grid
					item
					display={{ md: "flex", sm: "none", xs: "none" }}
					py={3}
					md={7}
					lg={7}
					xl={9}
					className="grid_dark"
				>
					<LoginPromo />
				</Grid>
				<Grid item p={4} xs={12} sm={12} md={5} lg={5} xl={3}>
					<LoginAuthCol />
				</Grid>
			</Grid>
		</AuthLayout>
	);
};

export default Login;
