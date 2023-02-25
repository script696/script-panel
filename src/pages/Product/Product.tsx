import { Grid } from "@mui/material";

import { ProductGallery } from "widgets/product/ProductGallery";
import { ProductDescription } from "widgets/product/ProductDescription";

import { ProductServiceInfo } from "widgets/product/ProductServiceInfo";
import { ProductPublicInfo } from "widgets/product/ProductPublicInfo";

const Product = () => {
	return (
		<Grid container spacing={2} py={2}>
			<Grid item xs={4}>
				<Grid
					className="grid_dark grid_style_box-shadow grid_style_bordered"
					height={"18rem"}
					sx={{ overflow: "hidden" }}
				>
					<ProductGallery />
				</Grid>
			</Grid>
			<Grid item xs={8}>
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered" height={"18rem"}>
					<ProductDescription />
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered">
					<ProductServiceInfo />
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Grid className="grid_dark grid_style_box-shadow grid_style_bordered">
					<ProductPublicInfo />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Product;
