import { Box } from "@mui/material";

import { ProductsTopRow } from "widgets/products/ProductsTopRow";
import { ProductsTable } from "widgets/products/ProductsTable";

const Products = () => {
	return (
		<Box
			display="flex"
			justifyContent="flex-start"
			flexDirection="column"
			alignItems="flex-start"
			sx={{ minHeight: "100%" }}
			py={2}
		>
			<ProductsTopRow />
			<ProductsTable />
		</Box>
	);
};

export default Products;
