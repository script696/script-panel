import { Avatar, Button, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser, updateUser } from "../../store/user/actions";
import { MutableField } from "../../components";
import { useAppSelector } from "../../hooks/useAppSelector";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import { BASE_URL } from "../../api/constants/api_endpoints";
import Box from "@mui/material/Box";

type FormValues = {
  email: string;
  username: string;
  about: string;
  avatar: any;
};

const Profile = () => {
  const dispatch = useDispatch();
  const { email, username, about, role, avatar } = useAppSelector(
    (state) => state.UserReducer
  );
  const [isEditMode, setIsEditMode] = useState(false);
  console.log(role);
  const roleTitle = `${role[0]?.toUpperCase()}${role?.slice(1)}`;

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const handleUpdateProfile = (values: FormValues) => {
    console.log("here");
    dispatch(updateUser(values));
  };

  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: {
      username,
      email,
      about,
      avatar: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("common.validations.required"),
    }),
    onSubmit: (values) => {
      handleUpdateProfile(values);
    },
  });

  const [avatarPreview, setAvatarPreview] = useState("");

  const fileReader = (e: any) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    console.log(file);
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        formik.setFieldValue("avatar", file);
        // @ts-ignore
        setAvatarPreview(fileReader.result);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };
  useEffect(() => {
    setAvatarPreview(`${BASE_URL}/${avatar}`);
  }, [avatar]);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log(avatar);
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
          <Button
            component="label"
            sx={{ background: "none", border: "none", boxShadow: "none" }}
            disabled={!isEditMode}
            onChange={fileReader}
          >
            <Avatar
              sx={{ width: "12rem", height: "12rem" }}
              src={avatarPreview}
            />
            <input type="file" hidden id="avatar" name="avatar" />
          </Button>
          <Typography>{roleTitle}</Typography>
        </Grid>
        <Grid container item xs={8} justifyContent="center" alignItems="center">
          <Grid width="80%" className="grid_base" px={4} py={2}>
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
              label="Введите имя"
              formik={formik}
              isEditMode={isEditMode}
              value={formik.values.username}
            />
            <MutableField
              id="email"
              label="Введите почту"
              formik={formik}
              isEditMode={isEditMode}
              value={formik.values.email}
            />
            <MutableField
              id="about"
              label="О себе"
              multiline
              formik={formik}
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
                disabled={false}
                loading={false}
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
