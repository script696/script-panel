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
		case ActionType.SET_DELETED_PRODUCT:
			const filterProducts = (arr: Array<Product>) => {
				return arr.filter(({ id }) => id !== action.payload.id);
			};
			state = {
				...state,
				products: filterProducts(state.products),
			};
			break;
		case ActionType.SET_PRODUCT:
			state = {
				...state,
				products: [...state.products, action.payload],
			};
			break;

		case ActionType.SET_PICTURE_TO_PRODUCT:
			const test3 = state.products.reduce<Array<Product>>((acc, product) => {
				if (product.id !== action.payload.productId) {
					return [...acc, product];
				}
				return [
					...acc,
					{
						...product,
						pictures: product.pictures
							? [...product.pictures, action.payload.pictureUrl]
							: [action.payload.pictureUrl],
					},
				];
			}, []);

			state = {
				...state,
				products: test3,
			};
			break;
		case ActionType.SET_REMOVED_PICTURE_TO_PRODUCT:
			const test4 = state.products.reduce<Array<Product>>((acc, product) => {
				if (product.id !== action.payload.productId || !product.pictures) {
					return [...acc, product];
				}
				const a = product.pictures.filter((pictureUrl) => {
					return pictureUrl !== action.payload.pictureUrl;
				});
				return [...acc, { ...product, pictures: [...a] }];
			}, []);
			state = {
				...state,
				products: test4,
			};
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};

export default ProductsReducer;
