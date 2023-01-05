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
import { useAppSelector } from "../../hooks/useAppSelector";

type FormValues = {
  role: string;
  username: string;
  password: string;
  email: string;
};

const Registration = () => {
  const { colorMode } = useAppSelector((state) => state.SettingsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "admin",
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
      <Grid
        container
        p={4}
        direction="column"
        alignItems="center"
        maxWidth={450}
      >
        <Logo size={50} color={colorMode === "dark" ? "#fff" : "#ddbea9"} />
        <Typography
          component="h2"
          variant="h3"
          mb={2}
          className="color_secondary"
        >
          Регистрация
        </Typography>
        <Box component="form" noValidate onSubmit={formik.handleSubmit}>
          <TextField
            size="small"
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
          />
          <TextField
            size="small"
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
            size="small"
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
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography
              component="span"
              variant="subtitle1"
              className="color_secondary"
            >
              Уже зарегестрированы ?
            </Typography>
            <Button component={Link} to="/signin" sx={{ width: "40%" }}>
              Войти
            </Button>
          </Grid>
        </Box>
      </Grid>
    </AuthLayout>
  );
};
export default Registration;
