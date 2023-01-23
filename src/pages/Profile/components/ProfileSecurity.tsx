import Typography from "@mui/material/Typography";
import { Box, Button, Divider, Grid, Switch } from "@mui/material";

import ProfileInfoRow from "./ProfileInfoRow";

const ProfileSecurity = () => {
	const label = { inputProps: { "aria-label": "Switch demo" } };

	return (
		<>
			<Typography component="h3" variant="h3" alignSelf="start">
				Security Settings
			</Typography>
			<Typography component="span" variant="subtitle1" alignSelf="start" mb={2}>
				These settings are helps you keep your account secure.
			</Typography>
			<Grid
				container
				px={2}
				sx={{
					borderRadius: "20px",
					boxSizing: "border-box",
					width: "100%",
				}}
				className="grid_style_box-shadow"
			>
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
						<Switch {...label} defaultChecked color="info" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid container item xs={12} justifyContent="space-between" py={2}>
					<Box display="flex" flexDirection="column" rowGap="5px">
						<Typography component="p" variant="h5">
							Change Password
						</Typography>
						<Typography component="p" variant="subtitle1">
							Set a unique password to protect your account.
						</Typography>
					</Box>
					<Box display="flex" justifyContent="center" alignItems="center">
						<Button sx={{ padding: "7px", textTransform: "none" }}>Change Password</Button>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default ProfileSecurity;
