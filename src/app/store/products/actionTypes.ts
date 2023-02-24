import { SetProductsPayload } from "./types";

export enum ActionType {
	GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
	SET_PRODUCTS = "SET_PRODUCTS",
}

/* Redux action Types */
export type SetProducts = {
	type: ActionType.SET_PRODUCTS;
	payload: SetProductsPayload;
};

/* Saga action Types */
export type GetAllProducts = {
	type: ActionType.GET_ALL_PRODUCTS;
};

export type Actions = SetProducts;
