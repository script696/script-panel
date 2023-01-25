import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import React from "react";

import ProfileInfoRow from "../../../../pages/Profile/components/ProfileInfoRow";

import PanelEditRow from "../components/PanelEditRow";
import { ProfileInfoData } from "../../types/types";

type ProfileInfoProps = {
	profileInfoData: Array<ProfileInfoData>;
	onTurnOnEditMode: () => void;
};

const ProfileInfoPanel = ({ profileInfoData, onTurnOnEditMode }: ProfileInfoProps) => {
	return (
		<Box p={3} component="section">
			<Box display="flex" flexDirection="column" rowGap={2} mb={1}>
				<Typography component="span" variant="h3" alignSelf="start">
					Personal Information
				</Typography>
				<Typography component="span" variant="subtitle1" alignSelf="start">
					Basic info, like your name and address, that you use on platform.
				</Typography>
			</Box>
			<Box sx={{ width: "100%" }}>
				<PanelEditRow title="Basics" onChangeEditMode={onTurnOnEditMode} />
				{profileInfoData.map(({ title, text }) => {
					return <ProfileInfoRow key={title} title={title} text={text} />;
				})}
			</Box>
		</Box>
	);
};

export default ProfileInfoPanel;
