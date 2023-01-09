import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType, LoginUser, RegisterUser } from "./actionTypes";
import { AxiosResponse } from "axios";
import Auth from "./services";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";
import {
  ICheckAuthResponse,
  ILoginUserResponse,
  IRegisterUserResponse,
} from "./types";
import { setFirstLoad, setLoading } from "../requests/actions";

function* loginUser({ payload }: LoginUser) {
  const { values, navigate } = payload;
  yield put(setLoading(true));

  try {
    const response: AxiosResponse<ILoginUserResponse> = yield call(
      Auth.fetchLogin,
      values
    );

    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
    navigate("/home");
  } catch (error) {
    yield;
  } finally {
    yield put(setLoading(false));
  }
}

function* registerUser({ payload }: RegisterUser) {
  const { values, navigate } = payload;
  yield put(setLoading(true));
  try {
    const response: AxiosResponse<IRegisterUserResponse> = yield call(
      Auth.fetchRegister,
      values
    );

    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
    navigate("/home");
  } catch (error) {
    yield;
  } finally {
    yield put(setLoading(false));
  }
}

function* checkAuth() {
  yield put(setLoading(true));

  try {
    const response: AxiosResponse<ICheckAuthResponse> = yield call(
      Auth.fetchCheckAuth
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
];

export default AuthSaga;
