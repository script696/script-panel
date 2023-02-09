import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { Elevation } from "../../../../shared/ui/Elevation";

const LoginRedirectToRegistration = () => {
	return (
		<Elevation>
			<Grid
				container
				className="grid_style_bordered grid_border_light"
				direction="column"
				alignItems="center"
				rowGap={1}
				px={4}
				py={2}
			>
				<Typography mb={2} component="span" variant="subtitle1">
					Еще не зарегестрированы ?
				</Typography>
				<Button
					component={Link}
					to="/signup"
					className="button_login"
					fullWidth
					sx={{ textTransform: "none" }}
				>
					Зарегестрироваться
				</Button>
			</Grid>
		</Elevation>
	);
};

export default LoginRedirectToRegistration;
