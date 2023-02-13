import { Grid } from "@mui/material";
import { ReactNode } from "react";

type IAuthLayout = {
	children: ReactNode;
};

const AuthLayout = ({ children }: IAuthLayout) => {
	return (
		<Grid container component="main" height="100vh">
			{children}
		</Grid>
	);
};

export default AuthLayout;
