import { ActionType } from "./actionTypes";
import {
	AddPictureToProductPayload,
	CreateProductPayload,
	RemovePictureFromProductPayload,
	DeleteProductPayload,
	SetDeletedProductPayload,
	SetPictureToProductPayload,
	SetProductDescriptionPayload,
	SetProductPayload,
	SetProductPublicInfoPayload,
	SetProductServiceInfoPayload,
	SetProductsPayload,
	UpdateProductDescriptionPayload,
	UpdateProductPublicInfoPayload,
	UpdateProductServiceInfoPayload,
	SetRemovedToProductPayload,
} from "./types";

/* Redux actions */
export const setProducts = (payload: SetProductsPayload) => {
	return { payload, type: ActionType.SET_PRODUCTS };
};

export const setProduct = (payload: SetProductPayload) => {
	return { payload, type: ActionType.SET_PRODUCT };
};

export const setDeletedProduct = (payload: SetDeletedProductPayload) => {
	return { payload, type: ActionType.SET_DELETED_PRODUCT };
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

export const setPictureToProduct = (payload: SetPictureToProductPayload) => {
	return { payload, type: ActionType.SET_PICTURE_TO_PRODUCT };
};

export const setRemovedPictureToProduct = (payload: SetRemovedToProductPayload) => {
	return { payload, type: ActionType.SET_REMOVED_PICTURE_TO_PRODUCT };
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

export const createProduct = (payload: CreateProductPayload) => {
	return { payload, type: ActionType.CREATE_PRODUCT };
};

export const deleteProduct = (payload: DeleteProductPayload) => {
	return { payload, type: ActionType.DELETE_PRODUCT };
};

export const addPictureToProduct = (payload: AddPictureToProductPayload) => {
	return { payload, type: ActionType.ADD_PICTURE_TO_PRODUCT };
};

export const removePictureFromProduct = (payload: RemovePictureFromProductPayload) => {
	return { payload, type: ActionType.REMOVE_PICTURE_FROM_PRODUCT };
};
