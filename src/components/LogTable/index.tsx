import styles from "./LogTable.module.scss";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
// import { useSelector } from "react-redux";
// import { Product } from "../../features/productSlice";
import { logData } from "../../dummyData";
import { logModel } from "../../models/product";
const LogTable = () => {
	const dataColumns = useMemo<GridColumns<logModel>>(
		() => [
			{
				field: "security_code",
				headerName: "Security",
				width: 200,
			},
			{
				field: "board",
				headerName: "Board",
				width: 150,
			},
			{
				field: "transaction_fee_configurations",
				headerName: "Order Type",
				width: 150,
				renderCell: (params) => {
					const orderType = params.row.transaction_fee_configurations?.map(
						(item) => item.order_type
					);
					const buyOrSell = orderType[0];
					return <>{buyOrSell}</>;
				},
			},
			{
				field: "price",
				headerName: "Matched Price",
				width: 150,
			},
			{
				field: "created",
				headerName: "Date",
				width: 240,
				renderCell: (params) => {
					const dateObj = params.row.created;
					const newDate = moment(dateObj).format("lll");
					return <>{newDate}</>;
				},
			},
			// {
			// 	field: "created",
			// 	headerName: "Time",
			// 	width: 200,
			// 	renderCell: (params) => {
			// 		const timeObj = params.row.created;
			// 		const newTime = moment(timeObj).format("LT");
			// 		return <>{newTime}</>;
			// 	},
			// },
		],
		[]
	);

	return (
		<div className={styles.table}>
			<div className={styles.title}>
				<h4>Trade Log</h4>
			</div>
			<DataGrid
				sx={{
					height: 300,
					border: "none",
					paddingLeft: 2,
					backgroundColor: "#fff",
				}}
				rows={logData}
				getRowId={(row: any) => row.security_code}
				columns={dataColumns}
				pageSize={5}
				rowsPerPageOptions={[10]}
				disableColumnFilter={true}
				disableColumnMenu={true}
				localeText={{
					toolbarFilters: "",
				}}
			/>
		</div>
	);
};

export default LogTable;
