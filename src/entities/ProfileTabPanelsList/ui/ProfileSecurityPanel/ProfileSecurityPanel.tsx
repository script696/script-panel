import Typography from "@mui/material/Typography";
import { Box, Divider, Grid, Switch } from "@mui/material";
import React from "react";

import PanelEditRow from "../components/PanelEditRow";

const ProfileSecurityPanel = () => {
	return (
		<>
			<Typography component="h3" variant="h3" alignSelf="start">
				Security Settings
			</Typography>
			<Typography component="span" variant="subtitle1" alignSelf="start" mb={2}>
				These settings are helps you keep your account secure.
			</Typography>
			<PanelEditRow title="Change your security settings" onChangeEditMode={() => console.log("click")} />
			<Grid
				container
				px={2}
				sx={{
					borderRadius: "20px",
					boxSizing: "border-box",
					width: "100%",
				}}
				className="grid_style_box-shadow"
				direction="column"
			>
				<Grid
					item
					container
					xs={12}
					justifyContent="space-between"
					alignItems="center"
					py={2}
					sx={{ boxSizing: "border-box" }}
				>
					<Box display="flex" flexDirection="column" rowGap="5px">
						<Typography component="p" variant="h5">
							Save my Activity Logs
						</Typography>
						<Typography component="p" variant="subtitle1">
							You can save your all activity logs including unusual activity detected.
						</Typography>
					</Box>
					<Box>
						<Switch disabled={true} defaultChecked color="info" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid
					container
					item
					xs={12}
					py={2}
					justifyContent="space-between"
					direction="column"
					sx={{ boxSizing: "border-box" }}
				>
					<Typography component="span" variant="h5">
						Change Password
					</Typography>
					<Typography component="span" variant="subtitle1">
						Set a unique password to protect your account.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default ProfileSecurityPanel;
