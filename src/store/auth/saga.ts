import { call, takeEvery } from "redux-saga/effects";
import { ActionType, ILoginUser } from "./actionTypes";
import { AxiosResponse } from "axios";
import Auth from "./services";

function* loginUser({ payload }: ILoginUser) {
  try {
    const response: AxiosResponse<any> = yield call(Auth.fetchLogin, payload);
    console.log(response);
    // const response: IfetchRequestData = yield call(
    //   RequestService.sendFakeRequest,
    //   values
    // );
    // const data = JSON.parse(`${response}`);
    // console.log(data);
    // resetForm();
  } catch (error) {
    yield;
  } finally {
    // yield put(loadJudicialCases(false));
  }
}

function* RequestSaga() {
  yield takeEvery(ActionType.LOGIN_USER, loginUser);
}

export default RequestSaga;
