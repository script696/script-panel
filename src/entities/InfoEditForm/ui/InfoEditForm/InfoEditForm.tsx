import { Box, Grid, Tab, Typography } from "@mui/material";
import React from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";

import { TabsData } from "../../types/types";
import InfoSlide from "../components/InfoSlide/InfoSlide";

import useProfileInfoForm from "../../lib/hooks/useInfoEditForm";

import { SLIDE_LABELS } from "../../constants/constants";

import AddressSlide from "../components/AddressSlide/AddressSlide";

import useInfoAddressEditForm from "../../lib/hooks/useInfoAddressEditForm";
import useTabs from "../../lib/hooks/useTabs";

const INFO_MOCK = {
	dateOfBirth: "11.11.1992",
	fullName: "nikita",
	nickName: "script696",
	phoneNumber: "79215562686",
};
const ADDRESS_MOCK = {
	addressLine: "Liberty street",
	apartment: "201",
	city: "Los Angeles",
	country: "USA",
};

type ProfileInfoFormProps = {
	initialProfileInfoFormValues?: Record<string, string>;
	initialProfileAddressFormValues?: Record<string, string>;
	onCancelForm: () => void;
};
const InfoEditForm = ({
	initialProfileInfoFormValues,
	initialProfileAddressFormValues,
	onCancelForm,
}: ProfileInfoFormProps) => {
	const { formInfoInstance } = useProfileInfoForm({ initialFormValues: INFO_MOCK });
	const { formAddressInstance } = useInfoAddressEditForm({ initialFormValues: ADDRESS_MOCK });
	const { currentTabIndex, handleChangeTabIndex: onChangeTabIndex } = useTabs(SLIDE_LABELS.profileInfoSlide);

	const tabsData: Array<TabsData> = [
		{
			index: 0,
			label: SLIDE_LABELS.profileInfoSlide,
			tabSlide: <InfoSlide formInstance={formInfoInstance} onCancel={onCancelForm} />,
		},
		{
			index: 1,
			label: SLIDE_LABELS.profileAddressSlide,
			tabSlide: <AddressSlide formInstance={formAddressInstance} onCancel={onCancelForm} />,
		},
	];

	return (
		<Grid
			container
			sx={{ height: "100%", width: "100%" }}
			px={2}
			direction="column"
			justifyContent="center"
			alignItems="center"
		>
			<Typography component="h3" variant="h3" className="color_secondary">
				Update Profile
			</Typography>
			<TabContext value={currentTabIndex}>
				<Box mb={3}>
					<TabList onChange={onChangeTabIndex} aria-label="lab API tabs example">
						{tabsData.map(({ label }) => {
							return <Tab key={label} label={label} value={label} />;
						})}
					</TabList>
				</Box>
				{tabsData.map(({ label, tabSlide: TabSlide }) => {
					return (
						<TabPanel key={label} value={label}>
							{TabSlide}
						</TabPanel>
					);
				})}
			</TabContext>
		</Grid>
	);
};

export default InfoEditForm;
