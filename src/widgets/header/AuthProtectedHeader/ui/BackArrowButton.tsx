import { Button } from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import Box from "@mui/material/Box";

import { Link, useLocation } from "react-router-dom";

import { useAppSelector } from "../../../../shared/lib/hooks";

const BackArrowButton = () => {
	const pathname = useLocation();
	const constParentPath = pathname.pathname.split("/")[1];
	const { colorMode } = useAppSelector((state) => state.WidgetsReducer);

	return (
		<Box sx={{ opacity: pathname.state ? 1 : 0, visibility: pathname.state ? "visible" : "hidden" }}>
			<Button
				component={Link}
				to={constParentPath}
				className="style_ghost"
				sx={{ "&:hover .test": { color: colorMode === "dark" ? "#0d1b2a" : "#4A403A" }, width: "2rem" }}
			>
				<ForwardIcon sx={{ transform: "rotate(180deg)" }} className={"color_contrastText"} />
			</Button>
		</Box>
	);
};

export default BackArrowButton;
