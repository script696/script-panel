import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import React from "react";

import { useAppSelector } from "shared/lib/hooks";

import { PanelTitleBox } from "../components/PanelTitleBox";
import { EditButton } from "../components/EditButton";
import { ProfileInfoRow } from "../components/ProfileInfoRow";

type ProfileInfoProps = {
	onTurnOnEditMode: () => void;
};

const AdminInfoPanel = ({ onTurnOnEditMode }: ProfileInfoProps) => {
	const { nickName, apartment, dateOfBirth, addressLine, fullName, phoneNumber, country, city } =
		useAppSelector((state) => state.UserReducer);

	const profileBaseData = [
		{ text: nickName, title: "Nickname" },
		{ text: dateOfBirth, title: "Full Name" },
		{ text: fullName, title: "Date of Birth" },
		{ text: phoneNumber, title: "Phone Number" },
	];

	const profileAddressData = [
		{ text: country, title: "Country" },
		{ text: city, title: "City" },
		{ text: addressLine, title: "Address Line" },
		{ text: apartment, title: "Apartment" },
	];

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
				<PanelTitleBox title="Basics">
					<EditButton onClick={onTurnOnEditMode} />
				</PanelTitleBox>
				{profileBaseData.map(({ title, text }) => {
					return <ProfileInfoRow key={title} title={title} text={text || "-"} />;
				})}
				<PanelTitleBox title="Address" />
				{profileAddressData.map(({ title, text }) => {
					return <ProfileInfoRow key={title} title={title} text={text || "-"} />;
				})}
			</Box>
		</Box>
	);
};

export default AdminInfoPanel;
