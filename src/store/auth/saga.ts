import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType, ILoginUser, IRegisterUser } from "./actionTypes";
import { AxiosResponse } from "axios";
import Auth from "./services";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";
import {
  ICheckAuthResponse,
  ILoginUserResponse,
  IRegisterUserResponse,
} from "./types";
import { loginSuccess, pending, success } from "./actions";

function* loginUser({ payload }: ILoginUser) {
  const { values, navigate } = payload;
  yield put(pending());
  try {
    const response: AxiosResponse<ILoginUserResponse> = yield call(
      Auth.fetchLogin,
      values
    );

    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
    yield put(loginSuccess());
    navigate("/home");
  } catch (error) {
    yield;
  } finally {
    yield put(success());
    // yield put(loadJudicialCases(false));
  }
}

function* registerUser({ payload }: IRegisterUser) {
  const { values, navigate } = payload;
  yield put(pending());

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
    yield put(success());

    // yield put(loadJudicialCases(false));
  }
}

function* checkAuth() {
  yield put(pending());

  try {
    const response: AxiosResponse<ICheckAuthResponse> = yield call(
      Auth.fetchCheckAuth
    );
    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
  } catch (error) {
    yield;
  } finally {
    yield put(success());
  }
}

function* testCheck() {
  yield put(pending());

  try {
    const response: AxiosResponse<ICheckAuthResponse> = yield call(
      Auth.fetchTestCheck
    );
    console.log(response);
  } catch (error) {
    yield;
  } finally {
    yield put(success());
  }
}

function* RequestSaga() {
  yield takeEvery(ActionType.REGISTER_USER, registerUser);
  yield takeEvery(ActionType.LOGIN_USER, loginUser);
  yield takeEvery(ActionType.CHECK_AUTH, checkAuth);
  yield takeEvery(ActionType.TEST_CHECK, testCheck);
}

export default RequestSaga;
