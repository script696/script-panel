import { Grid, Toolbar } from "@mui/material";

import Box from "@mui/material/Box";

import * as React from "react";

import { AdminMenuToggle } from "entities/admin/AdminMenuToggler";
import { AdminMenu, useAdminMenu } from "entities/admin/AdminMenu";
import { Elevation } from "shared/ui/Elevation";

import BackArrowButton from "./BackArrowButton";

const AuthProtectedHeader = () => {
	const { anchorEl, handleCloseMenu, handleOpenMenu } = useAdminMenu();

	return (
		<Grid width="100%">
			<Elevation borderRadius={0} elevation={2}>
				<Toolbar>
					<Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
						<BackArrowButton />
						<Box>
							<AdminMenuToggle onMenuClick={handleOpenMenu} />
							<AdminMenu anchorEl={anchorEl} isMenuOpen={!!anchorEl} onCloseMenu={handleCloseMenu} />
						</Box>
					</Box>
				</Toolbar>
			</Elevation>
		</Grid>
	);
};

export default AuthProtectedHeader;
