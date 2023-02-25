import { Box, Button, Typography } from "@mui/material";

type ProductsTopRowProps = {
	onCreateNewProduct: () => void;
};
const ProductsTopRow = ({ onCreateNewProduct }: ProductsTopRowProps) => {
	return (
		<Box
			mb={2}
			pl={2}
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			sx={{ boxSizing: "border-box" }}
		>
			<Box>
				<Typography className="color_contrastText" component="h2" variant="h3" mb={1}>
					Products
				</Typography>
				<Typography className="color_contrastText" component="span" variant="body1">
					Control your items
				</Typography>
			</Box>
			<Button sx={{ padding: "10px", textTransform: "none" }} onClick={onCreateNewProduct}>
				Create New Product
			</Button>
		</Box>
	);
};

export default ProductsTopRow;
