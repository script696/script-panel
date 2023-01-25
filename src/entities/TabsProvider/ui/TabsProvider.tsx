import TabsUnstyled from "@mui/base/TabsUnstyled";
import React, { ReactNode } from "react";

type ProfileTabsProps = {
	onTabClick: (_: unknown, newValue: number | string | boolean) => void;
	currentTabId: number;
	children: ReactNode;
};

const TabsProvider = ({ onTabClick, currentTabId, children }: ProfileTabsProps) => {
	return (
		<TabsUnstyled onChange={onTabClick} value={currentTabId} style={{ height: "100%" }}>
			{children}
		</TabsUnstyled>
	);
};

export default TabsProvider;
