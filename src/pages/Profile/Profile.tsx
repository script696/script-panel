import { Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/user/actions";
import { MutableField } from "../../components";
import { useAppSelector } from "../../hooks/useAppSelector";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";

type FormValues = {
  email: string;
  username: string;
};

const Profile = () => {
  const dispatch = useDispatch();
  const { email, username } = useAppSelector((state) => state.UserReducer);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const handleUpdateProfile = (values: FormValues) => {
    console.log(values);
  };

  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: {
      username,
      email,
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
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        <Typography>Test1</Typography>
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
            <Typography component="h2" variant="h4">
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
            id={"username"}
            label="Введите имя"
            formik={formik}
            isEditMode={isEditMode}
            value={formik.values.username}
          />
          <MutableField
            id={"email"}
            label="Введите почту"
            formik={formik}
            isEditMode={isEditMode}
            value={formik.values.email}
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
