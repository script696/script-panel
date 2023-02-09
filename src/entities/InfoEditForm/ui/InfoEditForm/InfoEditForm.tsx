import { Box, Grid, Tab, Typography } from "@mui/material";
import React from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";

import { useDispatch } from "react-redux";

import { FormAddressValues, FormInfoValues, TabsData } from "../../types/types";
import InfoSlide from "../components/InfoSlide/InfoSlide";

import { SLIDE_LABELS } from "../../consts/constants";

import AddressSlide from "../components/AddressSlide/AddressSlide";

import useAddressInfoForm from "../../lib/hooks/useAddressInfoForm";
import useTabs from "../../lib/hooks/useTabs";
import { useAppSelector } from "../../../../shared/lib/hooks";
import { updateAddressInfo, updateBasicInfo } from "../../../../app/store/admin/actions";
import useBasicInfoForm from "../../lib/hooks/useBasicInfoForm";
import { removeFalsyValues } from "../../../../shared/lib/handlers";

type ProfileInfoFormProps = {
	onCancelForm: () => void;
};
const InfoEditForm = ({ onCancelForm }: ProfileInfoFormProps) => {
	const adminData = useAppSelector((state) => state.UserReducer);
	const dispatch = useDispatch();

	const { nickName, fullName, phoneNumber, dateOfBirth } = adminData;
	const { addressLine, apartment, city, country } = adminData;

	const handleSubmitAddressInfoForm = (values: FormAddressValues) => {
		const mappedValues = removeFalsyValues<FormAddressValues>(values);
		dispatch(updateAddressInfo({ data: mappedValues, onCloseModal: onCancelForm }));
	};

	const handleSubmitBasicInfoForm = (values: FormInfoValues) => {
		const mappedValues = removeFalsyValues<FormInfoValues>(values);
		dispatch(updateBasicInfo({ data: mappedValues, onCloseModal: onCancelForm }));
	};

	const { formInfoInstance } = useBasicInfoForm({
		initialFormValues: { dateOfBirth, fullName, nickName, phoneNumber },
		onSubmit: handleSubmitBasicInfoForm,
	});
	const { formAddressInstance } = useAddressInfoForm({
		initialFormValues: { addressLine, apartment, city, country },
		onSubmit: handleSubmitAddressInfoForm,
	});

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
				<Box flexGrow={1}>
					{tabsData.map(({ label, tabSlide: TabSlide }) => {
						return (
							<TabPanel key={label} value={label}>
								{TabSlide}
							</TabPanel>
						);
					})}
				</Box>
			</TabContext>
		</Grid>
	);
};

export default InfoEditForm;
