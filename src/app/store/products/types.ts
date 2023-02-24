export type Product = {
	id: number;
	title: string;
	price: number;
	discount: number;
	totalSold: number;
	amount: number;
	url?: string;
};

/* Responses*/
export type GetAllProductsResponse = Array<Product>;

/* Payloads */
export type SetProductsPayload = Array<Product>;
