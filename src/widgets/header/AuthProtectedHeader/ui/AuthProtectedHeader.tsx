import { Toolbar } from "@mui/material";

import Box from "@mui/material/Box";

import * as React from "react";

import { AdminMenuToggle } from "entities/admin/AdminMenuToggler";
import { AdminMenu, useAdminMenu } from "entities/admin/AdminMenu";

const AuthProtectedHeader = () => {
	const { anchorEl, handleCloseMenu, handleOpenMenu } = useAdminMenu();

	return (
		<Box component="header">
			<Toolbar>
				<Box width="100%" display="flex" justifyContent="flex-end">
					<AdminMenuToggle onMenuClick={handleOpenMenu} />
					<AdminMenu anchorEl={anchorEl} isMenuOpen={!!anchorEl} onCloseMenu={handleCloseMenu} />
				</Box>
			</Toolbar>
		</Box>
	);
};

export default AuthProtectedHeader;
