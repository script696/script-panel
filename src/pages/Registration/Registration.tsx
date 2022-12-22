import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { Logo } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/actions";

type FormValues = {
  username: string;
  password: string;
  email: string;
};

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("common.validations.required"),
      email: Yup.string().required("common.validations.required"),
      password: Yup.string().required("common.validations.required"),
    }),
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  const handleRegister = (values: FormValues) => {
    dispatch(registerUser(values, navigate));
  };

  return (
    <AuthLayout>
      <Grid container direction="column" alignItems="center" maxWidth={450}>
        <Logo size={80} />
        <Typography component="h2" variant="h5" mb={2}>
          Регистрация
        </Typography>
        <Box component="form" noValidate onSubmit={formik.handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Введите имя"
            name="username"
            autoFocus
            disabled={false}
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.email && formik.errors.username}
          />{" "}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Введите почту"
            name="email"
            autoFocus
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
            autoFocus
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
