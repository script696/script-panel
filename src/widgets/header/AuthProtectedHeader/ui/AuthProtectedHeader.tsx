import { Grid, Toolbar } from "@mui/material";

import Box from "@mui/material/Box";

import * as React from "react";

import { AdminMenuToggle } from "entities/admin/AdminMenuToggler";
import { AdminMenu, useAdminMenu } from "entities/admin/AdminMenu";
import { Elevation } from "shared/ui/Elevation";

const AuthProtectedHeader = () => {
	const { anchorEl, handleCloseMenu, handleOpenMenu } = useAdminMenu();

	return (
		<Grid component="header">
			<Elevation borderRadius={0} elevation={2}>
				<Toolbar>
					<Box width="100%" display="flex" justifyContent="flex-end">
						<AdminMenuToggle onMenuClick={handleOpenMenu} />
						<AdminMenu anchorEl={anchorEl} isMenuOpen={!!anchorEl} onCloseMenu={handleCloseMenu} />
					</Box>
				</Toolbar>
			</Elevation>
		</Grid>
	);
};

export default AuthProtectedHeader;
