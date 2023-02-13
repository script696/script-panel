import { SwipeableDrawer } from "@mui/material";
import { ReactNode } from "react";

type SwipeableSideBarProps = {
	children: ReactNode;
	isSideBarOpen: boolean;
	onToggleSideBar: (hasSideBarOpen: boolean) => void;
};

const SwipeableSideBar = ({ children, isSideBarOpen, onToggleSideBar }: SwipeableSideBarProps) => {
	const anchor = "right";

	const handleChangeSidebarStatus = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		onToggleSideBar(open);
	};

	return (
		<SwipeableDrawer
			anchor={anchor}
			open={isSideBarOpen}
			onClose={handleChangeSidebarStatus(false)}
			onOpen={handleChangeSidebarStatus(true)}
			sx={{
				"& .MuiDrawer-paper": {
					border: "none",
					boxSizing: "border-box",
					width: { lg: "250px", md: "25vw", sm: "35vw", xs: "100vw" },
				},
			}}
		>
			{children}
		</SwipeableDrawer>
	);
};

export default SwipeableSideBar;
