import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import { ReactComponent as PageNotFoundSvg } from "../../app/assets/svg/pageNotFound.svg";

const PageNotFound = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
			<Grid container direction="column" alignItems="center">
				<PageNotFoundSvg />
				<Typography component="h2" variant="h5" sx={{ mt: 2 }}>
					Что то пошло не так...
				</Typography>
				<Button onClick={goBack} sx={{ mt: 3 }} className="variantOne">
					Назад
				</Button>
			</Grid>
		</Box>
	);
};

export default PageNotFound;
