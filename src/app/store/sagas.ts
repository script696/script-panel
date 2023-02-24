import { all } from "redux-saga/effects";

import AuthSaga from "./auth/saga";
import AdminSaga from "./admin/saga";
import ProductSaga from "./products/saga";

export default function* rootSaga() {
	yield all([...AuthSaga, ...AdminSaga, ...ProductSaga]);
}
