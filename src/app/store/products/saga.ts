import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { setLoading } from "../requests/actions";
import { getMessageFromError } from "../../../shared/lib/handlers";
import { openSnackBar } from "../ui/actions";

import { setProducts } from "./actions";
import { ActionType } from "./actionTypes";
import { GetAllProductsResponse } from "./types";
import Product from "./services";

function* getAllProducts() {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<GetAllProductsResponse> = yield call(Product.fetchAllProducts);

		yield put(setProducts(response.data));
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

const ProductSaga = [takeEvery(ActionType.GET_ALL_PRODUCTS, getAllProducts)];

export default ProductSaga;
