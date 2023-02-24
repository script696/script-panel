import { ActionType } from "./actionTypes";
import { SetProductsPayload } from "./types";

/* Redux actions */
export const setProducts = (payload: SetProductsPayload) => {
	return { payload, type: ActionType.SET_PRODUCTS };
};

/* Saga actions */
export const getAllProducts = () => {
	return { type: ActionType.GET_ALL_PRODUCTS };
};
