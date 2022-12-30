import AuthHeader from "../../components/AuthHeader/AuthHeader";
import Navigation from "../../components/Navigation/Navigation";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { ReactNode } from "react";
import Settings from "../../components/Settings/Settings";
import { useDispatch } from "react-redux";
import { changeSettingsStatus } from "../../store/settings/actions";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const dispatch = useDispatch();

  const onChangeSettingsStatus = (newStatus: boolean) => {
    dispatch(changeSettingsStatus(newStatus));
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <AuthHeader />
      <Navigation />
      <Settings
        isSettingsOpen={true}
        onChangeSettingsStatus={onChangeSettingsStatus}
      />
      <Box component="main" flexGrow={1} pt="64px" px={3}>
        {children}
      </Box>
    </Grid>
  );
};

export default AdminLayout;
