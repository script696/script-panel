import { NavigateFunction } from "react-router-dom";

export type Product = {
	id: number;
	title: string;
	price: number;
	discount: number;
	totalSold: number;
	description: string;
	amount: number;
	pictures?: Array<string>;
};

type ProductDescription = Pick<Product, "id" | "title" | "description">;
type ProductServiceInfo = Pick<Product, "id" | "totalSold" | "amount">;
type ProductPublicInfo = Pick<Product, "id" | "price" | "discount">;
type ProductId = Pick<Product, "id">;
type ModalEvent = {
	onCloseModal: () => void;
};
/* Responses*/
export type GetAllProductsResponse = Array<Product>;
export type UpdateProductDescriptionResponse = ProductDescription;
export type UpdateProductServiceInfoResponse = ProductServiceInfo;
export type UpdateProductPublicInfoResponse = ProductPublicInfo;
export type CreateProductResponse = Omit<Product, "url">;
export type DeleteProductResponse = ProductId;
export type AddPictureToProductResponse = { pictureUrl: string; productId: number };
export type RemovePictureFormProductResponse = { pictureUrl: string };

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
export type DeleteProductPayload = ProductId;
export type SetDeletedProductPayload = ProductId;
export type AddPictureToProductPayload = { picture: File; productId: number } & ModalEvent;
export type SetPictureToProductPayload = { pictureUrl: string; productId: number };
export type RemovePictureFromProductPayload = { pictureUrl: string; productId: number } & ModalEvent;
export type SetRemovedToProductPayload = { pictureUrl: string; productId: number };
export type GetAllProductsPayload = { userId: string };
