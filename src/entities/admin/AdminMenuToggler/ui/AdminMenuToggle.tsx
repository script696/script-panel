import { Avatar, Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as React from "react";

import { useAppSelector } from "../../../../shared/lib/hooks";

type AdminMenuToggleProps = {
	onMenuClick: (e: React.MouseEvent<HTMLElement>) => void;
};
const AdminMenuToggle = ({ onMenuClick }: AdminMenuToggleProps) => {
	const { avatarUrl, nickName, role } = useAppSelector((state) => state.UserReducer);

	return (
		<Button className="button_styles_none" onClick={onMenuClick} size="small" sx={{ textTransform: "none" }}>
			<Grid container direction="row" alignItems="center">
				<Avatar alt="user avatar" src={avatarUrl} />
				<Box display="flex" flexDirection="column" ml={2}>
					<Typography textAlign="start" component="span" variant="body1">
						{role}
					</Typography>
					<Typography textAlign="start" component="span" variant="h6">
						{nickName}
					</Typography>
				</Box>
				<KeyboardArrowDownIcon sx={{ color: "#fff" }} />
			</Grid>
		</Button>
	);
};

export default AdminMenuToggle;
