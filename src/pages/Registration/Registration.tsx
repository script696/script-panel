import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { Logo } from "../../components";
import { Link } from "react-router-dom";

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
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (values: FormValues) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <Grid container direction="column" alignItems="center" maxWidth={450}>
        <Logo size={80} />
        <Typography component="h2" variant="h4" mb={4}>
          Регистрация
        </Typography>
        <Box component="form" noValidate onSubmit={formik.handleSubmit}>
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
            helperText={formik.touched.email && formik.errors.firstName}
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Введите email"
            name="email"
            autoComplete="family-name"
            autoFocus
            disabled={false}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={false}
            loading={false}
            sx={{ my: 2 }}
          >
            Register
          </LoadingButton>
          <Box display="flex" columnGap={2} justifyContent="center">
            <Typography component="span" variant="subtitle1">
              Уже зарегестрированы ?
            </Typography>
            <Button component={Link} to="/signin">
              Войти
            </Button>
          </Box>
        </Box>
      </Grid>
    </AuthLayout>
  );
};
export default Registration;
