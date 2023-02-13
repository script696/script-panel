import { all } from "redux-saga/effects";

import AuthSaga from "./auth/saga";
import AdminSaga from "./admin/saga";

export default function* rootSaga() {
	yield all([...AuthSaga, ...AdminSaga]);
}
