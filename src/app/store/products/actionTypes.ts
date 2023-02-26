import {
	CreateProductPayload,
	DeleteProductPayload,
	SetDeletedProductPayload,
	SetProductDescriptionPayload,
	SetProductPayload,
	SetProductPublicInfoPayload,
	SetProductServiceInfoPayload,
	SetProductsPayload,
	UpdateProductDescriptionPayload,
	UpdateProductPublicInfoPayload,
	UpdateProductServiceInfoPayload,
} from "./types";

export enum ActionType {
	GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
	SET_PRODUCT = "SET_PRODUCT",
	SET_DELETED_PRODUCT = "SET_DELETED_PRODUCT",
	SET_PRODUCTS = "SET_PRODUCTS",
	DELETE_PRODUCT = "DELETE_PRODUCT",
	UPDATE_PRODUCT_DESCRIPTION = "UPDATE_PRODUCT_DESCRIPTION",
	UPDATE_PRODUCT_SERVICE_INFO = "UPDATE_PRODUCT_SERVICE_INFO",
	UPDATE_PRODUCT_PUBLIC_INFO = "UPDATE_PRODUCT_PUBLIC_INFO",
	SET_PRODUCT_PUBLIC_INFO = "SET_PRODUCT_PUBLIC_INFO",
	SET_PRODUCT_SERVICE_INFO = "SET_PRODUCT_SERVICE_INFO",
	SET_PRODUCT_DESCRIPTION = "SET_PRODUCT_DESCRIPTION",
	CREATE_PRODUCT = "CREATE_PRODUCT",
}

/* Redux action Types */
export type SetProducts = {
	type: ActionType.SET_PRODUCTS;
	payload: SetProductsPayload;
};

export type SetProduct = {
	type: ActionType.SET_PRODUCT;
	payload: SetProductPayload;
};

export type SetDeletedProduct = {
	type: ActionType.SET_DELETED_PRODUCT;
	payload: SetDeletedProductPayload;
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

export type CreateProduct = {
	type: ActionType.CREATE_PRODUCT;
	payload: CreateProductPayload;
};

export type DeleteProduct = {
	type: ActionType.DELETE_PRODUCT;
	payload: DeleteProductPayload;
};

export type Actions =
	| SetProducts
	| SetProductDescription
	| SetProductServiceInfo
	| SetProductPublicInfo
	| SetProduct
	| SetDeletedProduct;
