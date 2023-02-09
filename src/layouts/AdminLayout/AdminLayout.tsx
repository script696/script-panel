import { Box, Grid } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AuthHeader, Navigation, Settings } from "../../components";
import { changeSettingsStatus } from "../../app/store/ui/actions";
import { getAdmin } from "../../app/store/admin/actions";
import { useAppSelector } from "../../shared/lib/hooks";

type AdminLayoutProps = {
	children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
	const dispatch = useDispatch();
	const { isSettingsOpen } = useAppSelector((state) => state.UiReducer);

	const onChangeSettingsStatus = (newStatus: boolean) => {
		dispatch(changeSettingsStatus(newStatus));
	};

	useEffect(() => {
		dispatch(getAdmin());
	}, []);

	return (
		<Grid container sx={{ height: "100vh" }}>
			<AuthHeader />
			<Navigation />
			<Settings isSettingsOpen={isSettingsOpen} onChangeSettingsStatus={onChangeSettingsStatus} />
			<Box component="main" flexGrow={1} pt="64px" px={1}>
				{children}
			</Box>
		</Grid>
	);
};

export default AdminLayout;
