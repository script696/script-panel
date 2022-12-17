import { takeEvery } from "redux-saga/effects";
import { ActionType, ILoginUser } from "./actionTypes";

function* loginUser({ payload: { userData } }: ILoginUser) {
  try {
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
