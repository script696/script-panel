import { Paper } from "@mui/material";
import { ElementType, ReactNode } from "react";
type ElevationProps = {
	children: ReactNode;
	elevation?: number;
	component?: ElementType<any>;
	borderRadius?: number;
};
const Elevation = ({ children, elevation = 4, component = "div", borderRadius = 16 }: ElevationProps) => {
	return (
		<Paper
			sx={{ background: "none", borderRadius: `${borderRadius}px`, width: "100%" }}
			elevation={elevation}
			component={component}
		>
			{children}
		</Paper>
	);
};

export default Elevation;
