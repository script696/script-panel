import React from "react";

const useTabs = (initialTabIndex: string) => {
	const [currentTabIndex, setCurrentTabIndex] = React.useState(initialTabIndex);

	const handleChangeTabIndex = (_: unknown, newTabIndex: string) => {
		setCurrentTabIndex(newTabIndex);
	};

	return { currentTabIndex, handleChangeTabIndex };
};

export default useTabs;
