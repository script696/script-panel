import { Grid } from "@mui/material";
import { ReactNode } from "react";

type IAuthLayout = {
  children: ReactNode;
};

const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      component="main"
      sx={{ minHeight: "100vh" }}
    >
      {children}
    </Grid>
  );
};

export default AuthLayout;
