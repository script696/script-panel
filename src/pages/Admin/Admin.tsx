import { Grid } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

import { Divider } from "@mui/material";

import { ProfileTabsList } from "../../entities/admin/AdminTabs";

import { ProfileInformationPanel } from "../../widgets/admin/AdminPanels";
import { TabsProvider, useTabsProvider } from "../../shared/ui/TabsProvider";

import { ProfileEditAvatar } from "../../widgets/admin/AdminAvatar";
import { ProfileIRoleCol } from "../../entities/admin/AdminRoleCol";

const Admin = () => {
	const { handleChangeTabIndex: onChangeTabIndex, tabIndex } = useTabsProvider();

	return (
		<TabsProvider onTabClick={onChangeTabIndex} currentTabId={tabIndex}>
			<Grid container height="100%" wrap="nowrap" px={1} pt={1} pb={2} gap={1.5}>
				<Grid component="section" item md={4} className="grid_dark grid_style_box-shadow grid_style_bordered">
					<Box display="flex" p={2} columnGap="10px" alignItems="center">
						<ProfileEditAvatar />
						<ProfileIRoleCol />
					</Box>
					<Divider />
					<ProfileTabsList currentTabId={tabIndex} />
				</Grid>
				<Grid component="section" item md={8} className="grid_dark grid_style_box-shadow grid_style_bordered">
					<ProfileInformationPanel />
				</Grid>
			</Grid>
		</TabsProvider>
	);
};

export default Admin;
