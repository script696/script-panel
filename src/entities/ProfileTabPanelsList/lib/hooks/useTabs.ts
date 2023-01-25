import { useState } from "react";

type UseTabs = () => {
	tabIndex: number;
	handleChangeTabIndex: (_: unknown, newTabIndex: number | string | boolean) => void;
};

const useTabsProvider: UseTabs = () => {
	const [tabIndex, setTabIndex] = useState(0);

	const handleChangeTabIndex = (_: unknown, newTabIndex: number | string | boolean) => {
		if (typeof newTabIndex !== "number") return;
		setTabIndex(newTabIndex);
	};

	return { handleChangeTabIndex, tabIndex };
};

export default useTabsProvider;
