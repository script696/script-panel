import { Grid } from "@mui/material";

import { ProductGallery } from "widgets/product/ProductGallery";
import { ProductDescription } from "widgets/product/ProductDescription";

import { ProductServiceInfo } from "widgets/product/ProductServiceInfo";
import { ProductPublicInfo } from "widgets/product/ProductPublicInfo";
import { Navigate, useLocation } from "react-router-dom";

import React from "react";

import { PROTECTED_ROUTES } from "shared/lib/constants/routes";

import { useAppSelector } from "shared/lib/hooks";

import type { Product as ProductType } from "app/store/products/types";

const Product = () => {
	const { state }: { state: ProductType } = useLocation();
	const { products } = useAppSelector((state) => state.ProductsReducer);
	const product = products.find((product) => product.id === state.id);

	if (!state?.id || !product) {
		return <Navigate to={PROTECTED_ROUTES.PRODUCTS} replace />;
	}

	return (
		<Grid container spacing={2} py={2} sx={{ boxSizing: "border-box" }} height={"100%"}>
			<Grid item xs={3}>
				<Grid
					className="grid_dark grid_style_box-shadow grid_style_bordered"
					sx={{ overflow: "hidden" }}
					height={"100%"}
				>
					<ProductGallery product={product} />
				</Grid>
			</Grid>
			<Grid item xs={9}>
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered" height={"100%"}>
					<ProductDescription product={product} />
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered" minHeight="100%">
					<ProductServiceInfo product={product} />
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered" minHeight="100%">
					<ProductPublicInfo product={product} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Product;
