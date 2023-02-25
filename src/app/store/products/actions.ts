import { ActionType } from "./actionTypes";
import {
	SetProductDescriptionPayload,
	SetProductPublicInfoPayload,
	SetProductServiceInfoPayload,
	SetProductsPayload,
	UpdateProductDescriptionPayload,
	UpdateProductPublicInfoPayload,
	UpdateProductServiceInfoPayload,
} from "./types";

/* Redux actions */
export const setProducts = (payload: SetProductsPayload) => {
	return { payload, type: ActionType.SET_PRODUCTS };
};

export const setProductDescription = (payload: SetProductDescriptionPayload) => {
	return { payload, type: ActionType.SET_PRODUCT_DESCRIPTION };
};

export const setProductServiceInfo = (payload: SetProductServiceInfoPayload) => {
	return { payload, type: ActionType.SET_PRODUCT_SERVICE_INFO };
};

export const setProductPublicInfo = (payload: SetProductPublicInfoPayload) => {
	return { payload, type: ActionType.SET_PRODUCT_PUBLIC_INFO };
};

/* Saga actions */
export const getAllProducts = () => {
	return { type: ActionType.GET_ALL_PRODUCTS };
};

export const updateProductDescription = (payload: UpdateProductDescriptionPayload) => {
	return { payload, type: ActionType.UPDATE_PRODUCT_DESCRIPTION };
};

export const updateProductServiceInfo = (payload: UpdateProductServiceInfoPayload) => {
	return { payload, type: ActionType.UPDATE_PRODUCT_SERVICE_INFO };
};

export const updateProductPublicInfo = (payload: UpdateProductPublicInfoPayload) => {
	return { payload, type: ActionType.UPDATE_PRODUCT_PUBLIC_INFO };
};
