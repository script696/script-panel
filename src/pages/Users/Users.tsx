import { Grid, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

const Users = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100%" }}
    >
      <Grid item container direction="column" rowGap="10px" alignItems="center">
        <Typography variant="h4">Service on construction</Typography>
        <ConstructionIcon sx={{ color: "#fff", fontSize: "3rem" }} />
      </Grid>
    </Grid>
  );
};

export default Users;
