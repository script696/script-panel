import { Grid, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

const Home = () => {
	return (
		<Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "100%" }}>
			<Grid item container direction="column" rowGap="10px" alignItems="center">
				<Typography variant="h4" className="color_contrastText">
					Service on construction
				</Typography>
				<ConstructionIcon sx={{ fontSize: "3rem" }} className="color_contrastText" />
			</Grid>
		</Grid>
	);
};

export default Home;
