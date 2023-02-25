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
		case ActionType.SET_PRODUCT_DESCRIPTION:
			const updatedProducts = state.products.reduce<Array<Product>>((acc, product) => {
				if (product.id !== action.payload.id) {
					return [...acc, product];
				}
				return [...acc, { ...product, description: action.payload.description, title: action.payload.title }];
			}, []);

			state = {
				...state,
				products: updatedProducts,
			};
			break;
		case ActionType.SET_PRODUCT_SERVICE_INFO:
			const test = state.products.reduce<Array<Product>>((acc, product) => {
				if (product.id !== action.payload.id) {
					return [...acc, product];
				}
				return [...acc, { ...product, amount: action.payload.amount, totalSold: action.payload.totalSold }];
			}, []);

			state = {
				...state,
				products: test,
			};
			break;
		case ActionType.SET_PRODUCT_PUBLIC_INFO:
			const test2 = state.products.reduce<Array<Product>>((acc, product) => {
				if (product.id !== action.payload.id) {
					return [...acc, product];
				}
				return [...acc, { ...product, discount: action.payload.discount, price: action.payload.price }];
			}, []);

			state = {
				...state,
				products: test2,
			};
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};

export default ProductsReducer;
