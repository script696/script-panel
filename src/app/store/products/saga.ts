import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { setLoading } from "../requests/actions";
import { getMessageFromError } from "../../../shared/lib/handlers";
import { openSnackBar } from "../ui/actions";

import { PROTECTED_ROUTES } from "../../../shared/lib/constants/routes";

import {
	setDeletedProduct,
	setPictureToProduct,
	setProduct,
	setProductDescription,
	setProductPublicInfo,
	setProducts,
	setProductServiceInfo,
	setRemovedPictureToProduct,
} from "./actions";
import {
	ActionType,
	AddPictureToProduct,
	CreateProduct,
	DeleteProduct,
	GetAllProducts,
	RemovePictureFromProduct,
	UpdateProductDescription,
	UpdateProductPublicInfo,
	UpdateProductServiceInfo,
} from "./actionTypes";
import {
	AddPictureToProductResponse,
	CreateProductResponse,
	DeleteProductResponse,
	GetAllProductsResponse,
	RemovePictureFormProductResponse,
	UpdateProductDescriptionResponse,
	UpdateProductPublicInfoPayload,
	UpdateProductServiceInfoResponse,
} from "./types";
import Product from "./services";

function* getAllProducts({ payload }: GetAllProducts) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<GetAllProductsResponse> = yield call(Product.fetchAllProducts, payload);

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
	const { onCloseModal, ...rest } = payload;
	try {
		const response: AxiosResponse<UpdateProductDescriptionResponse> = yield call(
			Product.fetchUpdateProductDescription,
			rest,
		);

		yield put(setProductDescription(response.data));
		yield put(
			openSnackBar({
				message: "Description has been successfully updated",
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

function* updateProductServiceInfo({ payload }: UpdateProductServiceInfo) {
	yield put(setLoading(true));
	const { onCloseModal, ...rest } = payload;
	try {
		const response: AxiosResponse<UpdateProductServiceInfoResponse> = yield call(
			Product.fetchUpdateProductServiceInfo,
			rest,
		);

		yield put(setProductServiceInfo(response.data));
		yield put(
			openSnackBar({
				message: "Service info has been successfully updated",
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

function* updateProductPublicInfo({ payload }: UpdateProductPublicInfo) {
	yield put(setLoading(true));
	const { onCloseModal, ...rest } = payload;
	try {
		const response: AxiosResponse<UpdateProductPublicInfoPayload> = yield call(
			Product.fetchUpdateProductPublicInfo,
			rest,
		);
		yield put(setProductPublicInfo(response.data));
		yield put(
			openSnackBar({
				message: "Public info has been successfully updated",
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

function* createProduct({ payload }: CreateProduct) {
	yield put(setLoading(true));
	const { navigate, ...rest } = payload;
	try {
		const response: AxiosResponse<CreateProductResponse> = yield call(Product.fetchCreateProduct, rest);
		yield put(setProduct(response.data));
		navigate(`${PROTECTED_ROUTES.PRODUCTS}/${response.data.id}`, { state: response.data });
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* deleteProduct({ payload }: DeleteProduct) {
	yield put(setLoading(true));
	try {
		const response: AxiosResponse<DeleteProductResponse> = yield call(Product.fetchDeleteProduct, payload);
		yield put(setDeletedProduct(response.data));
	} catch (error) {
		const message = getMessageFromError(error);
		yield put(openSnackBar({ message, snackBarType: "error" }));
	} finally {
		yield put(setLoading(false));
	}
}

function* addPictureToProduct({ payload }: AddPictureToProduct) {
	yield put(setLoading(true));
	const { onCloseModal, ...rest } = payload;
	try {
		const response: AxiosResponse<AddPictureToProductResponse> = yield call(
			Product.fetchAddPictureToProduct,
			rest,
		);
		yield put(setPictureToProduct(response.data));
		yield put(
			openSnackBar({
				message: "Picture has been successfully added to gallery",
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

function* removePictureFromProduct({ payload }: RemovePictureFromProduct) {
	yield put(setLoading(true));
	const { onCloseModal, ...rest } = payload;
	const { productId } = payload;
	try {
		const response: AxiosResponse<RemovePictureFormProductResponse> = yield call(
			Product.fetchRemovePictureFromProduct,
			rest,
		);
		yield put(setRemovedPictureToProduct({ ...response.data, productId }));
		yield put(
			openSnackBar({
				message: "Picture has been successfully removed from gallery",
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

const ProductSaga = [
	takeEvery(ActionType.GET_ALL_PRODUCTS, getAllProducts),
	takeEvery(ActionType.UPDATE_PRODUCT_DESCRIPTION, updateProductDescription),
	takeEvery(ActionType.UPDATE_PRODUCT_SERVICE_INFO, updateProductServiceInfo),
	takeEvery(ActionType.UPDATE_PRODUCT_PUBLIC_INFO, updateProductPublicInfo),
	takeEvery(ActionType.CREATE_PRODUCT, createProduct),
	takeEvery(ActionType.DELETE_PRODUCT, deleteProduct),
	takeEvery(ActionType.ADD_PICTURE_TO_PRODUCT, addPictureToProduct),
	takeEvery(ActionType.REMOVE_PICTURE_FROM_PRODUCT, removePictureFromProduct),
];

export default ProductSaga;
