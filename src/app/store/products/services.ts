import $api from "shared/api/api";
import { PRODUCTS_ENDPOINTS } from "shared/api/constants/api_endpoints";

import {
	GetAllProductsResponse,
	UpdateProductDescriptionResponse,
	UpdateProductPublicInfoResponse,
	UpdateProductServiceInfoResponse,
} from "./types";
import { UpdateProductDescriptionDto } from "./productDto/UpdateProductDescriptionDto";
import { UpdateServiceInfoDto } from "./productDto/UpdateServiceInfoDto";
import { UpdatePublicInfoDto } from "./productDto/UpdatePublicInfoDto";

class Product {
	static fetchAllProducts(): Promise<GetAllProductsResponse> {
		return $api.get(`${PRODUCTS_ENDPOINTS.BASE}/${PRODUCTS_ENDPOINTS.GET_ALL}`);
	}

	static fetchUpdateProductDescription(
		data: UpdateProductDescriptionDto,
	): Promise<UpdateProductDescriptionResponse> {
		return $api.put(`${PRODUCTS_ENDPOINTS.BASE}/${PRODUCTS_ENDPOINTS.UPDATE_DESCRIPTION}`, data);
	}

	static fetchUpdateProductServiceInfo(
		data: UpdateServiceInfoDto,
	): Promise<UpdateProductServiceInfoResponse> {
		return $api.put(`${PRODUCTS_ENDPOINTS.BASE}/${PRODUCTS_ENDPOINTS.UPDATE_SERVICE_INFO}`, data);
	}

	static fetchUpdateProductPublicInfo(data: UpdatePublicInfoDto): Promise<UpdateProductPublicInfoResponse> {
		return $api.put(`${PRODUCTS_ENDPOINTS.BASE}/${PRODUCTS_ENDPOINTS.UPDATE_PUBLIC_INFO}`, data);
	}
}

export default Product;
