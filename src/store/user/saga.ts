import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType } from "./actionTypes";
import { AxiosResponse } from "axios";
import { setLoading, setUser } from "./actions";
import User from "./services";
import { UserDto } from "./models/userModel";

function* getUser() {
  yield put(setLoading(true));

  try {
    const response: AxiosResponse<UserDto> = yield call(User.fetchUser);
    console.log(response.data);
    yield put(setUser(response.data));
  } catch (error) {
    yield;
  } finally {
    yield put(setLoading(false));
  }
}

const UserSaga = [takeEvery(ActionType.GET_USER, getUser)];

export default UserSaga;
