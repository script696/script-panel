import { useState } from "react";

const useSwipeableSideBar = () => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	const toggleSideBar = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setIsSideBarOpen(open);
	};

	return { isSideBarOpen, toggleSideBar };
};

export default useSwipeableSideBar;
