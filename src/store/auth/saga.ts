import { call, takeEvery } from "redux-saga/effects";
import { ActionType, ILoginUser, IRegisterUser } from "./actionTypes";
import { AxiosResponse } from "axios";
import Auth from "./services";
import { ACCESS_TOKEN } from "../../api/constants/app_constants";
import { ILoginUserResponse, IRegisterUserResponse } from "./types";

function* loginUser({ payload }: ILoginUser) {
  const { values, navigate } = payload;
  try {
    const response: AxiosResponse<ILoginUserResponse> = yield call(
      Auth.fetchLogin,
      values
    );

    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);

    navigate("/admin");
  } catch (error) {
    yield;
  } finally {
    // yield put(loadJudicialCases(false));
  }
}

function* registerUser({ payload }: IRegisterUser) {
  const { values, navigate } = payload;
  try {
    const response: AxiosResponse<IRegisterUserResponse> = yield call(
      Auth.fetchRegister,
      values
    );

    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);

    navigate("/admin");
  } catch (error) {
    yield;
  } finally {
    // yield put(loadJudicialCases(false));
  }
}

function* RequestSaga() {
  yield takeEvery(ActionType.REGISTER_USER, registerUser);
  yield takeEvery(ActionType.LOGIN_USER, loginUser);
}

export default RequestSaga;
