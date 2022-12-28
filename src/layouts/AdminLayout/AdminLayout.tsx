import AuthHeader from "../../components/AuthHeader/AuthHeader";
import Navigation from "../../components/Navigation/Navigation";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <AuthHeader />
      <Navigation />
      <Box component="main" flexGrow={1} pt="64px" px={3}>
        {children}
      </Box>
    </Grid>
  );
};

export default AdminLayout;
