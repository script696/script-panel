import { Box, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { Elevation } from "shared/ui/Elevation";
import { spinKeyframe } from "shared/lib/constants/animations";
import { useDispatch } from "react-redux";
import { toggleSettingsSidebar } from "app/store/widgets/actions";

type PublicHeaderProps = {
	classNames?: Array<string>;
};

const PublicHeader = ({ classNames }: PublicHeaderProps) => {
	const dispatch = useDispatch();

	const handleSettingsToggle = () => {
		dispatch(toggleSettingsSidebar(true));
	};

	const classes = classNames ? classNames.join(" ") : "";
	return (
		<Elevation borderRadius={0} elevation={1}>
			<Box
				component="header"
				display="flex"
				height="2.5rem"
				width="100%"
				px={1}
				justifyContent="space-between"
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{
						"&:hover .gear": { animation: `${spinKeyframe} 1.5s infinite linear` },
						cursor: "pointer",
					}}
				>
					<Button className="button_styles_none" onClick={handleSettingsToggle}>
						<SettingsIcon className={`gear ${classes}`} sx={{ fontSize: "1.4rem" }} />
					</Button>
				</Box>
			</Box>
		</Elevation>
	);
};

export default PublicHeader;
