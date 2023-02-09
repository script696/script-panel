import { Box, Typography } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";

import { PROFILE_TABS_DATA } from "../consts/constants";

type ProfileTabsProps = {
	currentTabId: number;
};

const ProfileTabs = ({ currentTabId }: ProfileTabsProps) => {
	return (
		<Box p={2}>
			<TabsListUnstyled style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				{PROFILE_TABS_DATA.map(({ icon: Icon, title, slideId }) => {
					const isCurrentTabActive = currentTabId === slideId;
					const currentTabColor = { color: isCurrentTabActive ? "#fff" : "#778da9" };

					return (
						<TabUnstyled key={title} style={{ background: "none", border: "none" }}>
							<Box display="flex" justifyContent="space-between" sx={{ cursor: "pointer", width: "100%" }}>
								<Box display="flex" columnGap={2} alignItems="center">
									<Icon sx={{ ...currentTabColor }} />
									<Typography component="span" variant="body1" sx={{ ...currentTabColor }}>
										{title}
									</Typography>
								</Box>
								<Box display="flex" alignItems="center">
									<ChevronRightIcon sx={{ ...currentTabColor, fontSize: "1.2rem" }} />
								</Box>
							</Box>
						</TabUnstyled>
					);
				})}
			</TabsListUnstyled>
		</Box>
	);
};

export default ProfileTabs;
