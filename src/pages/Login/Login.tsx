import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/auth/actions";
import { ReactComponent as InformationSvg } from "../../assets/svg/information.svg";
import { Logo } from "../../components";
import { useAppSelector } from "../../hooks";
import * as Yup from "yup";
import { passwordRegExp } from "../../utils/regExp/regExp";
import { Errors } from "../../utils/errors/errors";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { colorMode } = useAppSelector((state) => state.SettingsReducer);

  const { isLoading } = useAppSelector((state) => state.RequestsReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string()
        .matches(passwordRegExp, Errors.PASSWORD)
        .required(),
    }),
    validateOnChange: true,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = (values: FormValues) => {
    dispatch(loginUser(values, navigate));
  };

  return (
    <AuthLayout>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid
          item
          container
          display={{ xs: "none", sm: "none", md: "flex" }}
          py={3}
          md={7}
          lg={7}
          xl={9}
          justifyContent="center"
          alignItems="center"
          direction="column"
          className="login"
        >
          <Box flexGrow={1} height="25rem" width="25rem">
            <InformationSvg height="100%" width="100%" />
          </Box>
          <Grid item container justifyContent="center">
            <Typography component="p" variant="body1">
              Created by Nikita ?? 2022
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          p={4}
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={3}
        >
          <Logo
            size={50}
            mb={2}
            color={colorMode === "dark" ? "#fff" : "#ddbea9"}
          />
          <Grid
            className="grid_base"
            container
            alignItems="center"
            direction="column"
            px={4}
            py={1}
          >
            <Typography
              component="h2"
              variant="h3"
              mb={0.5}
              className="color_secondary"
            >
              ??????????
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
              width="100%"
            >
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="email"
                label="?????????????? ??????????"
                name="email"
                autoComplete="email"
                disabled={isLoading}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                type="password"
                id="password"
                name="password"
                label="?????????????? ????????????"
                autoComplete="current-password"
                disabled={isLoading}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
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
                ??????????
              </LoadingButton>
              <Box display="flex" columnGap={2}></Box>
            </Box>
          </Grid>
          <Box flexGrow={1} />
          <Grid
            className="grid_base"
            container
            direction="column"
            alignItems="center"
            px={4}
            pt={1}
            pb={2}
          >
            <Typography
              mb={2}
              component="span"
              variant="subtitle1"
              className="color_secondary"
            >
              ?????? ???? ???????????????????????????????? ?
            </Typography>
            <Button
              component={Link}
              to="/signup"
              className="button_login"
              fullWidth
            >
              ????????????????????????????????????
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

export default Login;
