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

/* Responses*/
export type GetAllProductsResponse = Array<Product>;
export type UpdateProductDescriptionResponse = ProductDescription;
export type UpdateProductServiceInfoResponse = ProductServiceInfo;
export type UpdateProductPublicInfoResponse = ProductPublicInfo;

/* Payloads */
export type SetProductsPayload = Array<Product>;
export type UpdateProductDescriptionPayload = ProductDescription;
export type SetProductDescriptionPayload = ProductDescription;
export type UpdateProductServiceInfoPayload = ProductServiceInfo;
export type SetProductServiceInfoPayload = ProductServiceInfo;
export type UpdateProductPublicInfoPayload = ProductPublicInfo;
export type SetProductPublicInfoPayload = ProductPublicInfo;
