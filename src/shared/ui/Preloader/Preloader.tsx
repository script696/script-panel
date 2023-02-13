import { CircularProgress, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const Preloader = () => {
	return (
		<Grid
			container
			direction="column"
			height="100vh"
			justifyContent="center"
			alignItems="center"
			rowGap="20px"
		>
			<Typography>Wait please ...</Typography>
			<CircularProgress color="secondary" />
		</Grid>
	);
};
export default Preloader;
