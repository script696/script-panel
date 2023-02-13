import React from "react";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";

import { useAppSelector } from "shared/lib/hooks";

const AdminRoleCol = () => {
	const { email, nickName } = useAppSelector((state) => state.UserReducer);

	return (
		<Box display="flex" flexDirection="column" rowGap="5px">
			<Typography component="span" variant="body1">
				{nickName}
			</Typography>
			<Typography component="span" variant="h6">
				{email}
			</Typography>
		</Box>
	);
};

export default AdminRoleCol;
