import {
	SetProductDescriptionPayload,
	SetProductPublicInfoPayload,
	SetProductServiceInfoPayload,
	SetProductsPayload,
	UpdateProductDescriptionPayload,
	UpdateProductPublicInfoPayload,
	UpdateProductServiceInfoPayload,
} from "./types";

export enum ActionType {
	GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
	SET_PRODUCTS = "SET_PRODUCTS",
	UPDATE_PRODUCT_DESCRIPTION = "UPDATE_PRODUCT_DESCRIPTION",
	UPDATE_PRODUCT_SERVICE_INFO = "UPDATE_PRODUCT_SERVICE_INFO",
	UPDATE_PRODUCT_PUBLIC_INFO = "UPDATE_PRODUCT_PUBLIC_INFO",
	SET_PRODUCT_PUBLIC_INFO = "SET_PRODUCT_PUBLIC_INFO",
	SET_PRODUCT_SERVICE_INFO = "SET_PRODUCT_SERVICE_INFO",
	SET_PRODUCT_DESCRIPTION = "SET_PRODUCT_DESCRIPTION",
}

/* Redux action Types */
export type SetProducts = {
	type: ActionType.SET_PRODUCTS;
	payload: SetProductsPayload;
};

export type SetProductDescription = {
	type: ActionType.SET_PRODUCT_DESCRIPTION;
	payload: SetProductDescriptionPayload;
};

export type SetProductServiceInfo = {
	type: ActionType.SET_PRODUCT_SERVICE_INFO;
	payload: SetProductServiceInfoPayload;
};

export type SetProductPublicInfo = {
	type: ActionType.SET_PRODUCT_PUBLIC_INFO;
	payload: SetProductPublicInfoPayload;
};

/* Saga action Types */
export type UpdateProductDescription = {
	type: ActionType.UPDATE_PRODUCT_DESCRIPTION;
	payload: UpdateProductDescriptionPayload;
};

export type UpdateProductServiceInfo = {
	type: ActionType.UPDATE_PRODUCT_SERVICE_INFO;
	payload: UpdateProductServiceInfoPayload;
};

export type UpdateProductPublicInfo = {
	type: ActionType.UPDATE_PRODUCT_PUBLIC_INFO;
	payload: UpdateProductPublicInfoPayload;
};

export type Actions = SetProducts | SetProductDescription | SetProductServiceInfo | SetProductPublicInfo;
