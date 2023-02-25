import { Box } from "@mui/material";

import React from "react";

import { PanelTitleBox } from "shared/ui/PanelTitleBox";
import { EditButton } from "shared/ui/EditButton";

import { InfoRow } from "shared/ui/InfoRow";

const serviceInfo = [
	{ text: "nickName", title: "Nickname" },
	{ text: "Full Name", title: "Full Name" },
	{ text: "Date of Birth", title: "Date of Birth" },
	{ text: "Phone Number", title: "Phone Number" },
];

const ProductPublicInfo = () => {
	const onTurnOnEditMode = () => {};
	return (
		<Box component="section" p={3}>
			<Box mb={1}>
				<PanelTitleBox title="Public Info">
					<EditButton onClick={onTurnOnEditMode} />
				</PanelTitleBox>
			</Box>
			{serviceInfo.map(({ title, text }) => {
				return <InfoRow key={title} title={title} text={text || "-"} />;
			})}
		</Box>
	);
};

export default ProductPublicInfo;
