import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import React from "react";

import { useAppSelector } from "shared/lib/hooks";

import { PanelTitleBox } from "shared/ui/PanelTitleBox";

import { EditButton } from "shared/ui/EditButton";

import { InfoRow } from "shared/ui/InfoRow";

type ProfileInfoProps = {
	onTurnOnEditMode: () => void;
};

const AdminInfoPanel = ({ onTurnOnEditMode }: ProfileInfoProps) => {
	const { nickName, apartment, dateOfBirth, addressLine, fullName, phoneNumber, country, city } =
		useAppSelector((state) => state.AdminReducer);
	const profileBaseData = [
		{ text: nickName, title: "Nickname" },
		{ text: fullName, title: "Full Name" },
		{ text: dateOfBirth, title: "Date of Birth" },
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
			<PanelTitleBox title="Basics">
				<EditButton onClick={onTurnOnEditMode} />
			</PanelTitleBox>
			{profileBaseData.map(({ title, text }) => {
				return <InfoRow key={title} title={title} text={text || "-"} />;
			})}
			<PanelTitleBox title="Address" />
			{profileAddressData.map(({ title, text }) => {
				return <InfoRow key={title} title={title} text={text || "-"} />;
			})}
		</Box>
	);
};

export default AdminInfoPanel;
