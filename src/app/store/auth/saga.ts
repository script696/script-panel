import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { ACCESS_TOKEN } from "../../../shared/api/constants/app_constants";
import { setFirstLoad, setLoading } from "../requests/actions";
import { getMessageFromError } from "../../../shared/lib/handlers";
import { openSnackBar } from "../ui/actions";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "../../../shared/lib/constants/routes";

import Auth from "./services";
import { ActionType, ChangePassword, Login, Register, SignOut } from "./actionTypes";
import { CheckAuthResponse, LoginResponse, RegisterResponse } from "./types";
import { setAuth } from "./actions";

function* login({ payload: { data, navigate } }: Login) {
	yield put(setLoading(true));

	try {
		const response: AxiosResponse<LoginResponse> = yield call(Auth.fetchLogin, data);

		localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);

		yield put(setAuth({ isAuth: true, userId: response.data.userId }));

		navigate(PROTECTED_ROUTES.PRODUCTS);
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* register({ payload: { data, navigate } }: Register) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<RegisterResponse> = yield call(Auth.fetchRegister, data);

		localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);

		yield put(setAuth({ isAuth: true, userId: response.data.userId }));

		yield put(
			openSnackBar({
				message: "You have successfully registered",
				snackBarType: "success",
			}),
		);

		setTimeout(() => navigate(PROTECTED_ROUTES.PRODUCTS), 1000);
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* signOut({ payload: { navigate } }: SignOut) {
	yield put(setLoading(true));
	try {
		yield call(Auth.fetchLogout);

		localStorage.removeItem(ACCESS_TOKEN);

		navigate(PUBLIC_ROUTES.SIGNIN);
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* changePassword({ payload: { data, onCloseModal } }: ChangePassword) {
	yield put(setLoading(true));
	try {
		yield call(Auth.fetchChangePassword, data);
		yield put(
			openSnackBar({
				message: "Password successfully changed",
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

function* checkAuth() {
	yield put(setLoading(true));

	try {
		const response: AxiosResponse<CheckAuthResponse> = yield call(Auth.fetchCheckAuth);
		localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);

		yield put(setAuth({ isAuth: true, userId: response.data.userId }));
	} catch (error) {
		localStorage.removeItem(ACCESS_TOKEN);
	} finally {
		yield put(setLoading(false));
		yield put(setFirstLoad());
	}
}

const AuthSaga = [
	takeEvery(ActionType.REGISTER, register),
	takeEvery(ActionType.LOGIN, login),
	takeEvery(ActionType.CHECK_AUTH, checkAuth),
	takeEvery(ActionType.LOGOUT, signOut),
	takeEvery(ActionType.CHANGE_PASSWORD, changePassword),
];

export default AuthSaga;
