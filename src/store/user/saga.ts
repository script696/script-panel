import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { setLoading } from "../requests/actions";
import getMessageFromError from "../../utils/handlers/getMessageFromError";
import { openSnackBar } from "../ui/actions";

import User from "./services";
import { setAddressInfo, setAvatar, setBasicInfo, setUser } from "./actions";
import { ActionType, UpdateAddressInfo, UpdateAvatar, UpdateBasicInfo, UpdateUser } from "./actionTypes";
import { getUserResponse } from "./types";
import { UpdateBasicInfoDto } from "./userDto/updateBasicInfoDto";
import { UpdateAddressInfoDto } from "./userDto/updateAddressInfoDto";

function* getUser() {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<getUserResponse> = yield call(User.fetchGetUser);
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
		const response: AxiosResponse<any> = yield call(User.fetchUpdateUser, payload);
		yield put(setUser(response.data));
		yield put(
			openSnackBar({
				message: "Profile has been successfully updated",
				snackBarType: "success",
			}),
		);
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}
function* updateAvatar({ payload: { avatar, onCloseModal } }: UpdateAvatar) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<{ avatarUrl: string }> = yield call(User.fetchUpdateAvatar, avatar);
		yield put(setAvatar(response.data.avatarUrl));
		yield put(
			openSnackBar({
				message: "AvatarIconButton has been successfully updated",
				snackBarType: "success",
			}),
		);
		onCloseModal();
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* updateBasicInfo({ payload: { data, onCloseModal } }: UpdateBasicInfo) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<UpdateBasicInfoDto> = yield call(User.fetchUpdateBasicInfo, data);
		yield put(setBasicInfo(response.data));
		yield put(
			openSnackBar({
				message: "Basic info has been successfully updated",
				snackBarType: "success",
			}),
		);
		onCloseModal();
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}
function* updateAddressInfo({ payload: { data, onCloseModal } }: UpdateAddressInfo) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<UpdateAddressInfoDto> = yield call(User.fetchUpdateAddressInfo, data);
		yield put(setAddressInfo(response.data));
		yield put(
			openSnackBar({
				message: "Address info has been successfully updated",
				snackBarType: "success",
			}),
		);
		onCloseModal();
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
	takeEvery(ActionType.UPDATE_AVATAR, updateAvatar),
	takeEvery(ActionType.UPDATE_BASIC_INFO, updateBasicInfo),
	takeEvery(ActionType.UPDATE_ADDRESS_INFO, updateAddressInfo),
];

export default UserSaga;
