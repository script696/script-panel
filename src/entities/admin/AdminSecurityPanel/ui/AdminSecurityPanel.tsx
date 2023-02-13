import Typography from "@mui/material/Typography";
import { Box, Button, Divider, Grid, Switch } from "@mui/material";
import React from "react";

import { PanelTitleBox } from "../components/PanelTitleBox";

type ProfileSecurityPanelProps = {
	onTurnOnEditMode: () => void;
};

const AdminSecurityPanel = ({ onTurnOnEditMode }: ProfileSecurityPanelProps) => {
	return (
		<Box component="section" p={3}>
			<Box display="flex" flexDirection="column" rowGap={2} mb={1}>
				<Typography component="h3" variant="h3" alignSelf="start">
					Security Settings
				</Typography>
				<Typography component="span" variant="subtitle1" alignSelf="start" mb={2}>
					These settings are helps you keep your account secure.
				</Typography>
			</Box>
			<PanelTitleBox title="Security" />
			<Grid container px={2} className="grid_style_box-shadow grid_style_bordered" direction="column">
				<Grid item container xs={12} justifyContent="space-between" alignItems="center" py={2}>
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
				<Grid item xs={12} py={2}>
					<Button className="button_styles_none" sx={{ textTransform: "none" }} onClick={onTurnOnEditMode}>
						<Box display="flex" flexDirection="column" alignItems="flex-start" rowGap={1}>
							<Typography component="span" variant="h5">
								Change Password
							</Typography>
							<Typography component="span" variant="subtitle1">
								Set a unique password to protect your account.
							</Typography>
						</Box>
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AdminSecurityPanel;
