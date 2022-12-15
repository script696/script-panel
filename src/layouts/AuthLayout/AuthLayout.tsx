import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { Logo } from "../../components";

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
      // style={{ minHeight: "100vh" }}
      sx={{ minHeight: "100vh" }}
    >
      {children}
    </Grid>
  );
};

export default AuthLayout;
