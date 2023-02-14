import { Drawer } from "@mui/material";
import { ReactNode } from "react";

type StaticSideBarProps = {
	children: ReactNode;
};
const StaticSideBar = ({ children }: StaticSideBarProps) => {
	return (
		<Drawer
			variant="permanent"
			sx={{
				"& .MuiDrawer-paper": {
					border: "none",
					boxSizing: "border-box",
					position: "static",
					width: "100%",
				},
				display: {
					sm: "block",
					xs: "none",
				},
				height: "100%",
				width: "100%",
			}}
		>
			{children}
		</Drawer>
	);
};

export default StaticSideBar;
