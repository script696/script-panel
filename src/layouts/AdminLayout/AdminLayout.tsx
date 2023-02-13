import { Box, Grid } from "@mui/material";
import { ReactNode, useEffect } from "react";

import { useDispatch } from "react-redux";

import { getAdmin } from "app/store/admin/actions";
import { AuthProtectedHeader } from "widgets/header/AuthProtectedHeader";
import { Navigation } from "widgets/navigation";

type AdminLayoutProps = {
	children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAdmin());
	}, []);

	return (
		<Grid container sx={{ height: "100vh" }}>
			<Box display="flex" flexGrow={1}>
				<Navigation />
				<Box display="flex" flexDirection="column" flexGrow={1}>
					<AuthProtectedHeader />
					<Box component="main" flexGrow={1} px={1}>
						{children}
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default AdminLayout;
