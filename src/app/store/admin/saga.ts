import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { setLoading } from "../requests/actions";
import { getMessageFromError } from "../../../shared/lib/handlers";
import { openSnackBar } from "../ui/actions";

import Admin from "./services";
import { setAddressInfo, setAvatar, setBasicInfo, setUser } from "./actions";
import { ActionType, UpdateAddressInfo, UpdateAvatar, UpdateBasicInfo } from "./actionTypes";
import {
	GetUserResponse,
	UpdateAddressInfoResponse,
	UpdateAvatarResponse,
	UpdateBasicInfoResponse,
} from "./types";

function* getAdmin() {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<GetUserResponse> = yield call(Admin.fetchGetAdmin);

		yield put(setUser(response.data));
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* updateAvatar({ payload: { data, onCloseModal } }: UpdateAvatar) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<UpdateAvatarResponse> = yield call(Admin.fetchUpdateAvatar, data);
		yield put(setAvatar(response.data));
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
		const response: AxiosResponse<UpdateBasicInfoResponse> = yield call(Admin.fetchUpdateBasicInfo, data);
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
		const response: AxiosResponse<UpdateAddressInfoResponse> = yield call(Admin.fetchUpdateAddressInfo, data);
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

const AdminSaga = [
	takeEvery(ActionType.GET_ADMIN, getAdmin),
	takeEvery(ActionType.UPDATE_AVATAR, updateAvatar),
	takeEvery(ActionType.UPDATE_BASIC_INFO, updateBasicInfo),
	takeEvery(ActionType.UPDATE_ADDRESS_INFO, updateAddressInfo),
];

export default AdminSaga;
