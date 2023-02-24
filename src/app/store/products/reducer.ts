import { Actions, ActionType } from "./actionTypes";
import { Product } from "./types";

const initialState: { products: Array<Product> } = {
	products: [],
};

const ProductsReducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case ActionType.SET_PRODUCTS:
			state = {
				...state,
				products: action.payload,
			};
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};

export default ProductsReducer;
