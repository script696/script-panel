import { Grid } from "@mui/material";
import { MainLayout } from "../../layouts";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <MainLayout />
      <Box component="main" flexGrow={1}>
        Home
      </Box>
    </Grid>
  );
};

export default Home;
