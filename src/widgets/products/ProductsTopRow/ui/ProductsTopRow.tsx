import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { PUBLIC_ROUTES } from "shared/lib/constants/routes";

const ProductsTopRow = () => {
	return (
		<Box
			mb={2}
			pl={2}
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			sx={{ boxSizing: "border-box" }}
		>
			<Box>
				<Typography component="h2" variant="h3" mb={1}>
					Products
				</Typography>
				<Typography component="span" variant="body1">
					Control your items
				</Typography>
			</Box>
			<Button
				component={Link}
				to={PUBLIC_ROUTES.SIGNUP}
				className="button_login"
				sx={{ padding: "10px", textTransform: "none" }}
			>
				Create New Product
			</Button>
		</Box>
	);
};

export default ProductsTopRow;
