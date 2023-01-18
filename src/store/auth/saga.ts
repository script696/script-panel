import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { ACCESS_TOKEN } from "../../api/constants/app_constants";
import { setFirstLoad, setLoading } from "../requests/actions";
import getMessageFromError from "../../utils/handlers/getMessageFromError";
import { openSnackBar } from "../ui/actions";
import { ProtectedRotes, PublicRotes } from "../../utils/routes/routes";

import { CheckAuthResponse, RegisterUserResponse } from "./types";
import Auth from "./services";
import {
  ActionType,
  LoginUser,
  RegisterUser,
  SignOutUser,
} from "./actionTypes";

function* loginUser({ payload }: LoginUser) {
  const { values, navigate } = payload;
  yield put(setLoading(true));

  try {
    yield call(Auth.fetchLogin, values);

    navigate(ProtectedRotes.HOME);
  } catch (error) {
    const message = getMessageFromError(error);
    yield put(openSnackBar({ message, snackBarType: "error" }));
  } finally {
    yield put(setLoading(false));
  }
}

function* registerUser({ payload }: RegisterUser) {
  const { values, navigate } = payload;
  yield put(setLoading(true));
  try {
    const response: AxiosResponse<RegisterUserResponse> = yield call(
      Auth.fetchRegister,
      values,
    );

    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);

    yield put(
      openSnackBar({
        message: "You have successfully registered",
        snackBarType: "success",
      }),
    );

    setTimeout(() => navigate(ProtectedRotes.HOME), 3000);
  } catch (error) {
    const message = getMessageFromError(error);
    yield put(openSnackBar({ message, snackBarType: "error" }));
  } finally {
    yield put(setLoading(false));
  }
}

function* signOutUser({ payload }: SignOutUser) {
  const { navigate } = payload;

  yield put(setLoading(true));
  try {
    yield call(Auth.fetchSignOut);

    localStorage.removeItem(ACCESS_TOKEN);

    navigate(PublicRotes.SIGNIN);
  } catch (error) {
    const message = getMessageFromError(error);
    yield put(openSnackBar({ message, snackBarType: "error" }));
  } finally {
    yield put(setLoading(false));
  }
}

function* checkAuth() {
  yield put(setLoading(true));

  try {
    const response: AxiosResponse<CheckAuthResponse> = yield call(
      Auth.fetchCheckAuth,
    );
    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
  } catch (error) {
    localStorage.removeItem(ACCESS_TOKEN);
  } finally {
    yield put(setLoading(false));
    yield put(setFirstLoad());
  }
}

const AuthSaga = [
  takeEvery(ActionType.REGISTER_USER, registerUser),
  takeEvery(ActionType.LOGIN_USER, loginUser),
  takeEvery(ActionType.CHECK_AUTH, checkAuth),
  takeEvery(ActionType.SIGN_OUT_USER, signOutUser),
];

export default AuthSaga;
