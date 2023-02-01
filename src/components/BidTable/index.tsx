import React, { useEffect, useMemo, useState } from "react";
import styles from "./BidTable.module.scss";
import Button from "@mui/material/Button";

import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Product, selectAllProducts } from "../../features/productSlice";

const BidTable = () => {
	const products = useSelector(selectAllProducts);

	const buyHandler = (params: any) => {
		const name: string = params.row.name;
		console.log(name);
	};

	const dataColumns = useMemo<GridColumns<Product>>(
		() => [
			{
				field: "products",
				headerName: "Products",
				width: 220,
			},
			{
				field: "quantity",
				headerName: "Quantity",
				width: 220,
			},
			{
				field: "bidPrice",
				headerName: "Bid Price",
				width: 200,
			},
			{
				field: "action",
				headerName: "",
				type: "actions",
				width: 100,
				renderCell: (params) => {
					return (
						<Button variant="outlined" onClick={(event) => buyHandler(params)}>
							Buy
						</Button>
					);
				},
			},
		],
		[]
	);

	return (
		<div className={styles.table}>
			<DataGrid
				rows={products}
				columns={dataColumns}
				pageSize={10}
				onCellClick={buyHandler}
				rowsPerPageOptions={[5, 10, 20]}
				disableColumnMenu={true}
				localeText={{
					toolbarFilters: "",
				}}
			/>
		</div>
	);
};

export default BidTable;
