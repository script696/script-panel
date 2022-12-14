import { Avatar, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleProfileEditeMode, updateUser } from "../../store/user/actions";
import { MutableField } from "../../components";
import { useAppSelector, useFileReader } from "../../hooks";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

type FormValues = {
  email: string;
  username: string;
  about: string;
  avatar: string | undefined;
  role: string;
};

const Profile = () => {
  const { email, username, about, role, avatar, isEditMode } = useAppSelector(
    (state) => state.UserReducer
  );

  const { isLoading } = useAppSelector((state) => state.RequestsReducer);

  const dispatch = useDispatch();

  const {
    handleReadPicture,
    picturePreviewUrl,
    file,
    resetPicturePreviewUrlToDefault,
  } = useFileReader({
    defaultPictureUrl: avatar,
  });

  const SUPPORTED_FORMATS = ["jpeg"];

  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: {
      username,
      email,
      about,
      avatar,
      role: "admin",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(5).max(10).required(),
      email: Yup.string().email().required(),
      avatar: Yup.mixed()
        .notRequired()
        .test(
          "type",
          "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc",
          (value) => {
            if (!value) return true;

            const type = value?.type.split("/")[1];
            const isFormatSupported = SUPPORTED_FORMATS.includes(type);
            console.log(isFormatSupported);
            return isFormatSupported;
          }
        ),
    }),
    validateOnChange: true,
    onSubmit: (values) => {
      handleUpdateProfile(values);
    },
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

  return (
    <Box component="section" sx={{ height: "100%" }}>
      <Grid
        container
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ height: "100%" }}
      >
        <Grid
          item
          xs={4}
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          rowGap={1}
        >
          <Box component="label" position="relative">
            <Avatar
              sx={{
                width: "12rem",
                height: "12rem",
                opacity: isEditMode ? 0.5 : 1,
              }}
              src={picturePreviewUrl}
            />
            {isEditMode && (
              <AddPhotoAlternateIcon
                sx={{
                  fontSize: "3rem",
                  color: "#fff",
                  position: "absolute",
                  bottom: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            )}

            <input
              type="file"
              hidden
              id="avatar"
              name="avatar"
              onChange={handleReadPicture}
              disabled={!isEditMode}
            />
          </Box>
          {formik.errors.avatar && <Typography>test</Typography>}
          <Typography component="span" variant="h5">
            {roleTitle}
          </Typography>
        </Grid>
        <Grid container item xs={8} justifyContent="center" alignItems="center">
          <Grid width="80%" className="grid_test" px={6} py={6}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography component="h2" variant="h4" mb={2}>
                Your profile
              </Typography>
              <IconButton
                edge="start"
                aria-label="settings"
                onClick={toggleEditMode}
              >
                {isEditMode ? (
                  <CloseIcon sx={{ fontSize: "1.5rem", color: "#fff" }} />
                ) : (
                  <EditIcon sx={{ fontSize: "1.3rem", color: "#fff" }} />
                )}
              </IconButton>
            </Grid>
            <MutableField
              id="username"
              label="?????????????? ??????"
              autoComplete="name"
              formik={formik}
              isEditMode={isEditMode}
              value={formik.values.username}
            />
            <MutableField
              id="email"
              label="?????????????? ??????????"
              autoComplete="email"
              formik={formik}
              isEditMode={isEditMode}
              value={formik.values.email}
            />
            <MutableField
              id="about"
              label="?? ????????"
              multiline
              formik={formik}
              autoComplete="off"
              isEditMode={isEditMode}
              value={formik.values.about}
            />
            {isEditMode && (
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                color="inherit"
                className="color_secondary"
                disabled={isLoading}
                loading={isLoading}
                sx={{ my: 2 }}
              >
                Update
              </LoadingButton>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
