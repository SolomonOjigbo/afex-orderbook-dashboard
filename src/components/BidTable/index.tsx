import React, { useEffect, useMemo, useState } from "react";
import styles from "./BidTable.module.scss";
import Button from "@mui/material/Button";

import { DataGrid, GridColumns } from "@mui/x-data-grid";
// import { useSelector } from "react-redux";
import { Product, selectAllProducts } from "../../features/productSlice";
import { productData } from "../../dummyData";

const BidTable = () => {
	// const products = useSelector(selectAllProducts);

	const buyHandler = (params: any) => {
		const name: string = params.row.name;
		console.log(name);
	};

	const dataColumns = useMemo<GridColumns<Product>>(
		() => [
			{
				field: "name",
				headerName: "Products",
				width: 200,
			},
			{
				field: "quantity",
				headerName: "Quantity",
				width: 100,
			},
			{
				field: "bidPrice",
				headerName: "Bid Price",
				width: 100,
			},
			{
				field: "action",
				headerName: "",
				type: "actions",
				width: 100,
				renderCell: (params) => {
					return (
						<Button
							sx={{ color: "#52965E" }}
							variant="outlined"
							onClick={(event) => buyHandler(params)}
						>
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
				sx={{ height: 400, width: 609, border: "none", paddingLeft: 2 }}
				rows={productData}
				getRowId={(row: any) => row.code}
				columns={dataColumns}
				pageSize={5}
				rowsPerPageOptions={[10]}
				onCellClick={buyHandler}
				disableColumnFilter={true}
				disableColumnMenu={true}
				localeText={{
					toolbarFilters: "",
				}}
			/>
		</div>
	);
};

export default BidTable;
