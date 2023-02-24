import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { useAppSelector } from "shared/lib/hooks";
import { getAllProducts } from "app/store/products/actions";

const ProductsTable = () => {
	const dispatch = useDispatch();
	const { products } = useAppSelector((state) => state.ProductsReducer);

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="left">Title</TableCell>
						<TableCell align="center">Price</TableCell>
						<TableCell align="center">Discount</TableCell>
						<TableCell align="center">Amount</TableCell>
						<TableCell align="center">Total Sold</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products?.map(({ id, title, amount, discount, totalSold, price }) => (
						<TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell align="left">{title}</TableCell>
							<TableCell align="center">{price}</TableCell>
							<TableCell align="center">{discount}</TableCell>
							<TableCell align="center">{amount}</TableCell>
							<TableCell align="center">{totalSold}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ProductsTable;
