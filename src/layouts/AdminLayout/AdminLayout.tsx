import { Box, Grid } from "@mui/material";
import { ReactNode, useEffect } from "react";

import { useDispatch } from "react-redux";

import { getAdmin } from "app/store/admin/actions";
import { Navigation } from "widgets/navigation";

import { AuthProtectedHeader } from "../../widgets/header/AuthProtectedHeader";
import { Footer } from "../../widgets/footer";

type AdminLayoutProps = {
	children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAdmin());
	}, []);

	return (
		<Box height="100vh">
			<Grid container height="100%">
				<Grid item xs={3}>
					<Navigation />
				</Grid>
				<Grid item xs={9} container direction="column">
					<AuthProtectedHeader />
					<Box component="main" maxWidth={"100%"} flexGrow={1} px={1} sx={{ boxSizing: "border-box" }}>
						{children}
					</Box>
					<Footer classNames={["color_contrastText"]} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default AdminLayout;
