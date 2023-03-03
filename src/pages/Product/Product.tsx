import { Box, Grid } from "@mui/material";

import { ProductGallery } from "widgets/product/ProductGallery";

import { Navigate, useLocation } from "react-router-dom";

import React from "react";

import { PROTECTED_ROUTES } from "shared/lib/constants/routes";

import { useAppSelector } from "shared/lib/hooks";

import { ProductDescription } from "../../widgets/product/ProductDescription";
import { ProductServiceInfo } from "../../widgets/product/ProductServiceInfo";

import { ProductPublicInfo } from "../../widgets/product/ProductPublicInfo";

import type { Product as ProductType } from "app/store/products/types";

const Product = () => {
	const { state }: { state: ProductType } = useLocation();
	const { products } = useAppSelector((state) => state.ProductsReducer);
	const product = products.find((product) => product.id === state.id);

	if (!state?.id || !product) {
		return <Navigate to={PROTECTED_ROUTES.PRODUCTS} replace />;
	}

	return (
		<Box
			display="grid"
			gridTemplateColumns="1fr 1fr 1fr 1fr"
			columnGap={".8rem"}
			rowGap={".8rem"}
			gridTemplateAreas={
				"\"gallery description description description\" \"serviceInfo serviceInfo publicInfo publicInfo\""
			}
			gridTemplateRows="1fr 2fr"
			height={"100%"}
			py={2}
		>
			<Box gridArea="gallery" overflow="hidden">
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered" height="100%" overflow="hidden">
					<ProductGallery product={product} />
				</Grid>
			</Box>
			<Box gridArea="description">
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered" height="100%">
					<ProductDescription product={product} />
				</Grid>
			</Box>
			<Box gridArea="serviceInfo">
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered" height="100%">
					<ProductServiceInfo product={product} />
				</Grid>
			</Box>
			<Box gridArea="publicInfo">
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered" height="100%">
					<ProductPublicInfo product={product} />
				</Grid>
			</Box>
		</Box>
	);
};

export default Product;
