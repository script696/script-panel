import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType, UpdateUser } from "./actionTypes";
import { AxiosResponse } from "axios";
import { setUser, toggleProfileEditeMode } from "./actions";
import User from "./services";
import { setLoading } from "../requests/actions";
import getMessageFromError from "../../utils/handlers/getMessageFromError";
import { openSnackBar } from "../ui/actions";
import { getUserResponse } from "./types";

function* getUser() {
  yield put(setLoading(true));
  try {
    const response: AxiosResponse<getUserResponse> = yield call(
      User.fetchGetUser
    );
    yield put(setUser(response.data));
  } catch (error) {
    const message = getMessageFromError(error);
    yield put(openSnackBar({ message, snackBarType: "error" }));
  } finally {
    yield put(setLoading(false));
  }
}

function* updateUser({ payload }: UpdateUser) {
  yield put(setLoading(true));
  try {
    const response: AxiosResponse<any> = yield call(
      User.fetchUpdateUser,
      payload
    );
    yield put(setUser(response.data));
    yield put(toggleProfileEditeMode());
    yield put(
      openSnackBar({
        message: "Profile has been successfully updated",
        snackBarType: "success",
      })
    );
  } catch (error) {
    const message = getMessageFromError(error);
    yield put(openSnackBar({ message, snackBarType: "error" }));
  } finally {
    yield put(setLoading(false));
  }
}

const UserSaga = [
  takeEvery(ActionType.GET_USER, getUser),
  takeEvery(ActionType.UPDATE_USER, updateUser),
];

export default UserSaga;
