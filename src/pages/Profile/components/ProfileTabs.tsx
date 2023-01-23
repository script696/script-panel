import { Box, Button, SvgIconTypeMap, Tab, Tabs, Typography } from "@mui/material";
import React, { MouseEventHandler, SyntheticEvent, useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LockIcon from "@mui/icons-material/Lock";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type Test = "Personal information" | "Security settings";

type ProfileTabsProps = {
	onTabClick: (title: "Personal information" | "Security settings") => void;
	currentTabSlide: Test;
};

type ProfileTabsData = {
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
	title: Test;
};

const ProfileTabs = ({ onTabClick, currentTabSlide }: ProfileTabsProps) => {
	const profileTabsData: Array<ProfileTabsData> = [
		{ icon: AccountBoxIcon, title: "Personal information" },
		{ icon: LockIcon, title: "Security settings" },
	];
	return (
		<Box display="flex" flexDirection="column" rowGap="10px">
			{profileTabsData.map(({ icon: Icon, title }) => {
				const isCurrentTabActive = currentTabSlide === title;
				const currentTabColor = { color: isCurrentTabActive ? "#fff" : "#778da9" };

				return (
					<Button
						key={title}
						className="button_styles_none"
						sx={{ textTransform: "none" }}
						onClick={() => onTabClick(title)}
					>
						<Box display="flex" justifyContent="space-between" sx={{ width: "100%" }}>
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
					</Button>
				);
			})}
		</Box>
	);
};

export default ProfileTabs;
