import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import React from "react";

type ProfileIRoleColProps = {
	userName: string;
	email: string;
};

const ProfileIRoleCol = ({ userName, email }: ProfileIRoleColProps) => {
	return (
		<Box display="flex" flexDirection="column" rowGap="5px">
			<Typography component="span" variant="body1">
				{userName}
			</Typography>
			<Typography component="span" variant="h6">
				{email}
			</Typography>
		</Box>
	);
};

export default ProfileIRoleCol;
