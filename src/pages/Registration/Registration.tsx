import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
// import LoadingButton from "@mui/lab/LoadingButton";

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
};

const Registration = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("common.validations.required"),
      firstName: Yup.string()
        .max(20, "common.validations.max")
        .required("common.validations.required"),
      lastName: Yup.string()
        .max(30, "common.validations.max")
        .required("common.validations.required"),
    }),
    onSubmit: (values) => handleRegister(values),
  });

  const handleRegister = (values: FormValues) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <Box component="form">
        <Typography component="h2" variant="h4">
          Sign Up
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="Введите имя"
          name="firstName"
          autoComplete="family-name"
          autoFocus
          disabled={false}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />{" "}
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Введите фамилию"
          name="lastName"
          autoComplete="family-name"
          autoFocus
          disabled={false}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        {/*<LoadingButton*/}
        {/*  type="submit"*/}
        {/*  fullWidth*/}
        {/*  variant="contained"*/}
        {/*  color="primary"*/}
        {/*  disabled={true}*/}
        {/*  loading={false}*/}
        {/*  sx={{ mt: 2 }}*/}
        {/*>*/}
        {/*  Register*/}
        {/*</LoadingButton>*/}
      </Box>
    </AuthLayout>
  );
};
export default Registration;
