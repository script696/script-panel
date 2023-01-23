import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import * as Yup from "yup";

import { Divider } from "@mui/material";

import { useAppSelector, useFileReader } from "../../hooks";
import { toggleProfileEditeMode, updateUser } from "../../store/user/actions";
import { ERRORS } from "../../utils/errors/errors";
import { SUPPORTED_PICTURE_FORMATS } from "../../utils/constants/constants";

import ProfileAvatar from "./components/ProfileAvatar";
import ProfileTabs from "./components/ProfileTabs";
import useProfileTabs from "./hooks/useProfileTabs";

type FormValues = {
	email: string;
	username: string;
	about: string;
	avatar: string | undefined;
	role: string;
};

const Profile = () => {
	const { email, username, about, role, avatar, isEditMode } = useAppSelector((state) => state.UserReducer);

	const profileInfoData = [
		{ text: username, title: "Username" },
		{ text: email, title: "Email" },
	];

	const { isLoading } = useAppSelector((state) => state.RequestsReducer);

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

	const roleTitle = `${role[0]?.toUpperCase()}${role?.slice(1)}`;

	const toggleEditMode = () => {
		if (isEditMode) resetPicturePreviewUrlToDefault();

		dispatch(toggleProfileEditeMode());
	};

	const handleUpdateProfile = (values: FormValues) => {
		dispatch(updateUser(values));
	};

	useEffect(() => {
		formik.setFieldValue("avatar", file);
	}, [file]);
	const {
		getCurrentTabSlideComponent,
		handleTabClick: onTabClick,
		currentTabSlide,
	} = useProfileTabs({ profileInfoData });

	return (
		<Box component="section" sx={{ height: "100%" }}>
			<Grid container gap={1.5} wrap="nowrap" sx={{ height: "100%" }} px={1} pt={1} pb={2}>
				<Grid
					item
					md={4}
					className="grid_dark grid_style_box-shadow"
					sx={{
						borderRadius: "10px",
						height: "100%",
					}}
				>
					<Box display="flex" p={2} columnGap="10px" alignItems="center">
						<ProfileAvatar
							isEditMode={isEditMode}
							picturePreviewUrl={picturePreviewUrl}
							onReadPicture={handleReadPicture}
						/>
						<Box display="flex" flexDirection="column" rowGap="5px">
							<Typography component="span" variant="body1">
								{username}
							</Typography>
							<Typography component="span" variant="h6">
								{email}
							</Typography>
						</Box>
					</Box>
					<Divider />
					<Box p={2}>
						<ProfileTabs onTabClick={onTabClick} currentTabSlide={currentTabSlide} />
					</Box>
				</Grid>
				<Grid
					item
					md={8}
					className="grid_dark grid_style_box-shadow"
					sx={{ borderRadius: "10px", height: "100%" }}
				>
					<Box display="flex" p={2} columnGap="10px" alignItems="center" flexDirection="column">
						{getCurrentTabSlideComponent()}
					</Box>
				</Grid>
			</Grid>
			{/*<Grid*/}
			{/*  container*/}
			{/*  component="form"*/}
			{/*  onSubmit={formik.handleSubmit}*/}
			{/*  sx={{ height: "100%" }}*/}
			{/*>*/}
			{/*  <Grid*/}
			{/*    item*/}
			{/*    xs={4}*/}
			{/*    container*/}
			{/*    justifyContent="center"*/}
			{/*    alignItems="center"*/}
			{/*    direction="column"*/}
			{/*    rowGap={1}*/}
			{/*  >*/}
			{/*    <Box component="label" position="relative">*/}
			{/*      <Avatar*/}
			{/*        sx={{*/}
			{/*          height: "12rem",*/}
			{/*          opacity: isEditMode ? 0.5 : 1,*/}
			{/*          width: "12rem",*/}
			{/*        }}*/}
			{/*        src={picturePreviewUrl}*/}
			{/*      />*/}
			{/*      {isEditMode && (*/}
			{/*        <AddPhotoAlternateIcon*/}
			{/*          sx={{*/}
			{/*            bottom: "10%",*/}
			{/*            color: "#fff",*/}
			{/*            fontSize: "3rem",*/}
			{/*            left: "50%",*/}
			{/*            position: "absolute",*/}
			{/*            transform: "translateX(-50%)",*/}
			{/*          }}*/}
			{/*        />*/}
			{/*      )}*/}

			{/*      <input*/}
			{/*        type="file"*/}
			{/*        hidden*/}
			{/*        id="avatar"*/}
			{/*        name="avatar"*/}
			{/*        onChange={handleReadPicture}*/}
			{/*        disabled={!isEditMode}*/}
			{/*      />*/}
			{/*    </Box>*/}
			{/*    {formik.errors.avatar && <Typography>test</Typography>}*/}
			{/*    <Typography component="span" variant="h5">*/}
			{/*      {roleTitle}*/}
			{/*    </Typography>*/}
			{/*  </Grid>*/}
			{/*  <Grid container item xs={8} justifyContent="center" alignItems="center">*/}
			{/*    <Grid width="80%" className="grid_test" px={6} py={6}>*/}
			{/*      <Grid container alignItems="center" justifyContent="space-between">*/}
			{/*        <Typography component="h2" variant="h4" mb={2}>*/}
			{/*          Your profile*/}
			{/*        </Typography>*/}
			{/*        <IconButton*/}
			{/*          edge="start"*/}
			{/*          aria-label="settings"*/}
			{/*          onClick={toggleEditMode}*/}
			{/*        >*/}
			{/*          {isEditMode ? (*/}
			{/*            <CloseIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />*/}
			{/*          ) : (*/}
			{/*            <EditIcon sx={{ color: "#fff", fontSize: "1.3rem" }} />*/}
			{/*          )}*/}
			{/*        </IconButton>*/}
			{/*      </Grid>*/}
			{/*      <MutableField*/}
			{/*        id="username"*/}
			{/*        label="Введите имя"*/}
			{/*        autoComplete="name"*/}
			{/*        formik={formik}*/}
			{/*        isEditMode={isEditMode}*/}
			{/*        value={formik.values.username}*/}
			{/*      />*/}
			{/*      <MutableField*/}
			{/*        id="email"*/}
			{/*        label="Введите почту"*/}
			{/*        autoComplete="email"*/}
			{/*        formik={formik}*/}
			{/*        isEditMode={isEditMode}*/}
			{/*        value={formik.values.email}*/}
			{/*      />*/}
			{/*      <MutableField*/}
			{/*        id="about"*/}
			{/*        label="О себе"*/}
			{/*        multiline*/}
			{/*        formik={formik}*/}
			{/*        autoComplete="off"*/}
			{/*        isEditMode={isEditMode}*/}
			{/*        value={formik.values.about}*/}
			{/*      />*/}
			{/*      {isEditMode && (*/}
			{/*        <LoadingButton*/}
			{/*          type="submit"*/}
			{/*          fullWidth*/}
			{/*          variant="contained"*/}
			{/*          color="inherit"*/}
			{/*          className="color_secondary"*/}
			{/*          disabled={isLoading}*/}
			{/*          loading={isLoading}*/}
			{/*          sx={{ my: 2 }}*/}
			{/*        >*/}
			{/*          Update*/}
			{/*        </LoadingButton>*/}
			{/*      )}*/}
			{/*    </Grid>*/}
			{/*  </Grid>*/}
			{/*</Grid>*/}
		</Box>
	);
};

export default Profile;
