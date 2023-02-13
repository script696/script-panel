import { Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

import { TabsController } from "shared/ui/TabsController";
type ProfileInfoFormProps = {
	children: Array<ReactNode>;
};
const AdminUpdateProfile = ({ children }: ProfileInfoFormProps) => {
	return (
		<Grid
			container
			sx={{ height: "100%", width: "100%" }}
			direction="column"
			justifyContent="center"
			alignItems="center"
		>
			<Typography component="h3" variant="h6" className="color_secondary" mb={1}>
				Update Profile
			</Typography>
			<TabsController initialTabIndex={"Basic Info"}>{children}</TabsController>
		</Grid>
	);
};

export default AdminUpdateProfile;
