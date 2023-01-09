import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType, UpdateUser } from "./actionTypes";
import { AxiosResponse } from "axios";
import { setLoading, setUser, toggleProfileEditeMode } from "./actions";
import User from "./services";
import { UserDto } from "./models/userModel";

function* getUser() {
  yield put(setLoading(true));
  try {
    const response: AxiosResponse<UserDto> = yield call(User.fetchGetUser);
    yield put(setUser(response.data));
  } catch (error) {
    yield;
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
  } catch (error) {
    yield;
  } finally {
    yield put(setLoading(false));
  }
}

const UserSaga = [
  takeEvery(ActionType.GET_USER, getUser),
  takeEvery(ActionType.UPDATE_USER, updateUser),
];

export default UserSaga;
