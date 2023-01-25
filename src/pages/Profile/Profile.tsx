import { Grid } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import * as Yup from "yup";

import { Divider } from "@mui/material";

import { useAppSelector, useFileReader } from "../../hooks";
import { updateUser } from "../../store/user/actions";
import { ERRORS } from "../../utils/errors/errors";
import { SUPPORTED_PICTURE_FORMATS } from "../../utils/constants/constants";

import { ProfileTabsList } from "../../entities/ProfileTabs";

import useTabsProvider from "../../entities/ProfileTabPanelsList/lib/hooks/useTabs";

import ProfileInformationPanel from "../../widgets/ProfileInformationPanel/ui/ProfileInformationPanel";
import { TabsProvider } from "../../entities/TabsProvider";

import { ProfileEditAvatar } from "../../widgets/ProfileEditAvatar";
import { ProfileIRoleCol } from "../../entities/ProfileIRoleCol";

type FormValues = {
	email: string;
	username: string;
	about: string;
	avatar: string | undefined;
	role: string;
};

const Profile = () => {
	const { email, username, about, role, avatar, isEditMode } = useAppSelector((state) => state.UserReducer);

	const dispatch = useDispatch();

	const { handleReadPicture, picturePreviewUrl, file, resetPicturePreviewUrlToDefault } = useFileReader({
		defaultPictureUrl: avatar,
	});

	const formik = useFormik<FormValues>({
		enableReinitialize: true,
		initialValues: {
			about,
			avatar,
			email,
			role: "admin",
			username,
		},
		onSubmit: (values) => {
			handleUpdateProfile(values);
		},
		validateOnChange: true,
		validationSchema: Yup.object({
			avatar: Yup.mixed()
				.notRequired()
				.test("type", ERRORS.PICTURE, (value) => {
					/**
					 * Валидация осуществляется только по вновь загруженным файлам,
					 * если картинка не загружена - null или загружена дефолтная - string => валидация не требуется
					 */
					if (!value || typeof value === "string") return true;

					const type = value?.type?.split("/")[1];
					return SUPPORTED_PICTURE_FORMATS.includes(type);
				}),
			email: Yup.string().email().required(),
			username: Yup.string().min(5).max(10).required(),
		}),
	});

	const handleUpdateProfile = (values: FormValues) => {
		dispatch(updateUser(values));
	};

	useEffect(() => {
		formik.setFieldValue("avatar", file);
	}, [file]);

	const { handleChangeTabIndex: onChangeTabIndex, tabIndex } = useTabsProvider();

	return (
		<TabsProvider onTabClick={onChangeTabIndex} currentTabId={tabIndex}>
			<Grid container gap={1.5} wrap="nowrap" sx={{ height: "100%" }} px={1} pt={1} pb={2}>
				<Grid component="section" item md={4} className="grid_dark grid_style_box-shadow grid_style_bordered">
					<Box display="flex" p={2} columnGap="10px" alignItems="center">
						<ProfileEditAvatar />
						<ProfileIRoleCol userName={username} email={email} />
					</Box>
					<Divider />
					<ProfileTabsList currentTabId={tabIndex} />
				</Grid>
				<Grid component="section" item md={8} className="grid_dark grid_style_box-shadow grid_style_bordered">
					<ProfileInformationPanel />
				</Grid>
			</Grid>
		</TabsProvider>
	);
};

export default Profile;
