import { Box, Drawer } from "@mui/material";
import { ReactNode } from "react";

type StaticSideBarProps = {
	children: ReactNode;
};
const StaticSideBar = ({ children }: StaticSideBarProps) => {
	const drawerWidth = 240;
	return (
		<Box
			component="nav"
			sx={{
				flexShrink: { lg: 0 },
				width: { sm: drawerWidth, xs: 0 },
			}}
		>
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Drawer
				variant="temporary"
				open={false}
				onClose={() => console.log("close")}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					"& .MuiDrawer-paper": {
						border: "none",
						boxSizing: "border-box",
						width: "70vw",
					},
					display: { sm: "none", xs: "block" },
				}}
			>
				{children}
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					"& .MuiDrawer-paper": {
						border: "none",
						boxSizing: "border-box",
						width: drawerWidth,
					},
					display: {
						sm: "block",
						xs: "none",
					},
				}}
				open
			>
				{children}
			</Drawer>
		</Box>
	);
};

export default StaticSideBar;
