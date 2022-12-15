import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { Button, Grid, TextField } from "@mui/material";
import { Logo } from "../../components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
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
      handleRegister(values);
    },
  });

  const handleRegister = (values: FormValues) => {
    console.log(values);
  };
  return (
    <AuthLayout>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid item xs={7} className="login"></Grid>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          justifyContent="center"
          p={4}
          xs={5}
          maxWidth={450}
        >
          <Logo size={80} />
          <Typography component="h2" variant="h5" mb={4}>
            Авторизация
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Введите почту"
              name="email"
              autoComplete="family-name"
              disabled={false}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Введите пароль"
              name="password"
              autoComplete="family-name"
              disabled={false}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
              Войти
            </LoadingButton>
            <Box display="flex" columnGap={2}>
              <Typography component="span" variant="subtitle1">
                Еще не зарегестрированы ?
              </Typography>
              <Button component={Link} to="/signup">
                Зарегестрироваться
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

export default Login;
