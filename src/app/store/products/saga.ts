import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { setLoading } from "../requests/actions";
import { getMessageFromError } from "../../../shared/lib/handlers";
import { openSnackBar } from "../ui/actions";

import { setProductDescription, setProductPublicInfo, setProducts, setProductServiceInfo } from "./actions";
import {
	ActionType,
	UpdateProductDescription,
	UpdateProductPublicInfo,
	UpdateProductServiceInfo,
} from "./actionTypes";
import {
	GetAllProductsResponse,
	UpdateProductDescriptionResponse,
	UpdateProductPublicInfoPayload,
	UpdateProductServiceInfoResponse,
} from "./types";
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
function* updateProductDescription({ payload }: UpdateProductDescription) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<UpdateProductDescriptionResponse> = yield call(
			Product.fetchUpdateProductDescription,
			payload,
		);

		yield put(setProductDescription(response.data));
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* updateProductServiceInfo({ payload }: UpdateProductServiceInfo) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<UpdateProductServiceInfoResponse> = yield call(
			Product.fetchUpdateProductServiceInfo,
			payload,
		);

		yield put(setProductServiceInfo(response.data));
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* updateProductPublicInfo({ payload }: UpdateProductPublicInfo) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<UpdateProductPublicInfoPayload> = yield call(
			Product.fetchUpdateProductPublicInfo,
			payload,
		);
		yield put(setProductPublicInfo(response.data));
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

const ProductSaga = [
	takeEvery(ActionType.GET_ALL_PRODUCTS, getAllProducts),
	takeEvery(ActionType.UPDATE_PRODUCT_DESCRIPTION, updateProductDescription),
	takeEvery(ActionType.UPDATE_PRODUCT_SERVICE_INFO, updateProductServiceInfo),
	takeEvery(ActionType.UPDATE_PRODUCT_PUBLIC_INFO, updateProductPublicInfo),
];

export default ProductSaga;
