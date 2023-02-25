import { NavigateFunction } from "react-router-dom";

export type Product = {
	id: number;
	title: string;
	price: number;
	discount: number;
	totalSold: number;
	description: string;
	amount: number;
	url?: string;
};

type ProductDescription = Pick<Product, "id" | "title" | "description">;
type ProductServiceInfo = Pick<Product, "id" | "totalSold" | "amount">;
type ProductPublicInfo = Pick<Product, "id" | "price" | "discount">;
type ModalEvent = {
	onCloseModal: () => void;
};
/* Responses*/
export type GetAllProductsResponse = Array<Product>;
export type UpdateProductDescriptionResponse = ProductDescription;
export type UpdateProductServiceInfoResponse = ProductServiceInfo;
export type UpdateProductPublicInfoResponse = ProductPublicInfo;
export type CreateProductResponse = Omit<Product, "url">;
export type DeleteProductResponse = Pick<Product, "id">;

/* Payloads */
export type SetProductsPayload = Array<Product>;
export type SetProductPayload = Product;
export type UpdateProductDescriptionPayload = ProductDescription & ModalEvent;
export type SetProductDescriptionPayload = ProductDescription;
export type UpdateProductServiceInfoPayload = ProductServiceInfo & ModalEvent;
export type SetProductServiceInfoPayload = ProductServiceInfo;
export type UpdateProductPublicInfoPayload = ProductPublicInfo & ModalEvent;
export type SetProductPublicInfoPayload = ProductPublicInfo;
export type CreateProductPayload = Omit<Product, "id" | "url"> & { navigate: NavigateFunction };
export type DeleteProductPayload = Pick<Product, "id">;
export type SetDeletedProductPayload = Pick<Product, "id">;
