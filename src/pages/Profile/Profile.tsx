import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/user/actions";

type FormValues = {
  email: string;
  password: string;
};

const Profile = () => {
  const dispatch = useDispatch();
  const handleUpdateProfile = (values: FormValues) => {
    console.log(values);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "testEmail",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("common.validations.required"),
      password: Yup.string()
        .max(20, "common.validations.max")
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
        <Grid component="form" width="80%" className="grid_base" px={4} py={2}>
          <Typography component="h2" variant="h4">
            Your profile
          </Typography>
          {isEdit ? (
            <TextField
              size="small"
              margin="normal"
              fullWidth
              required
              id="email"
              label="Введите почту"
              name="email"
              autoComplete="family-name"
              value={formik.values.email}
              disabled={true}
              sx={{ border: "none" }}
            />
          ) : (
            <Typography>Test</Typography>
          )}
          <TextField
            size="small"
            margin="normal"
            fullWidth
            required
            id="email"
            label="Введите почту"
            name="email"
            autoComplete="family-name"
            value={formik.values.email}
            disabled={true}
            sx={{ border: "none" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
