import { Box, Grid } from "@mui/material";
import { ReactNode, useEffect } from "react";

import { useDispatch } from "react-redux";

import { getAdmin } from "app/store/admin/actions";
import { AuthProtectedHeader } from "widgets/header/AuthProtectedHeader";
import { Navigation } from "widgets/navigation";
import { Footer } from "widgets/footer";

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
				<Box flexBasis="9rem" display="flex">
					<Navigation />
				</Box>
				<Box display="flex" flexDirection="column" flexGrow={1}>
					<AuthProtectedHeader />
					<Box component="main" flexGrow={1} px={1} sx={{ boxSizing: "border-box" }}>
						{children}
					</Box>
					<Footer classNames={["color_contrastText"]} />
				</Box>
			</Box>
		</Grid>
	);
};

export default AdminLayout;
