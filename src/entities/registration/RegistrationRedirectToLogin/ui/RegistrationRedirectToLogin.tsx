import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { PUBLIC_ROUTES } from "../../../../shared/lib/constants/routes";

const RegistrationRedirectToLogin = () => {
	return (
		<Grid container alignItems="center" justifyContent="space-between">
			<Typography component="span" variant="subtitle1">
				Already Registered ?
			</Typography>
			<Button
				component={Link}
				to={PUBLIC_ROUTES.SIGNIN}
				sx={{ textTransform: "none", width: "40%" }}
				className="button_login"
			>
				Login
			</Button>
		</Grid>
	);
};

export default RegistrationRedirectToLogin;
