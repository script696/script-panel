import $api from "../../../shared/api/api";
import { PRODUCTS_ENDPOINTS } from "../../../shared/api/constants/api_endpoints";

import { GetAllProductsResponse } from "./types";

class Product {
	static fetchAllProducts(): Promise<GetAllProductsResponse> {
		return $api.get(`${PRODUCTS_ENDPOINTS.BASE}/${PRODUCTS_ENDPOINTS.GET_ALL}`);
	}
}

export default Product;
