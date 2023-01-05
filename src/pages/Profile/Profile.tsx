import { Avatar, Grid, IconButton } from "@mui/material";
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

type FormValues = {
  email: string;
  username: string;
  about: string;
};

const Profile = () => {
  const dispatch = useDispatch();
  const { email, username, about, role } = useAppSelector(
    (state) => state.UserReducer
  );
  const [isEditMode, setIsEditMode] = useState(false);
  console.log(role);
  const roleTitle = `${role[0]?.toUpperCase()}${role?.slice(1)}`;

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const handleUpdateProfile = (values: FormValues) => {
    dispatch(updateUser(values));
  };

  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: {
      username,
      email,
      about,
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

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Grid container component="section" direction="row" sx={{ height: "100%" }}>
      <Grid
        item
        xs={4}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        rowGap={2}
      >
        <IconButton onClick={() => console.log("click")}>
          <Avatar sx={{ width: "9rem", height: "9rem" }} />
        </IconButton>
        <Typography>{roleTitle}</Typography>
      </Grid>
      <Grid container item xs={8} justifyContent="center" alignItems="center">
        <Grid
          component="form"
          width="80%"
          className="grid_base"
          px={4}
          py={2}
          onSubmit={formik.handleSubmit}
        >
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
  );
};

export default Profile;
