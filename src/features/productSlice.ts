import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../models/product";

const API_URL = "https://comx-sand-api.afexnigeria.com/api/securities/boards";

export interface IProduct {
	error: string | null;
	data: Product[];
	status: "pending" | "succeeded" | "failed";
}

const initialState = {
	error: null,
	data: [],
	status: "pending",
} as IProduct;

export const getProducts = createAsyncThunk(
	"products/getProducts",
	async () => {
		try {
			let token = localStorage.getItem("token");
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			};
			const { data } = await axios.get(API_URL, config);

			return data;
		} catch (error: any) {
			return console.log(error.data.message);
		}
	}
);

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state, action) => {
				state.status = "pending";
			})
			.addCase(
				getProducts.fulfilled,
				(state, action: PayloadAction<Product[]>) => {
					state.status = "succeeded";
					state.data = action.payload;
				}
			)
			.addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

// export const selectAllProducts = (state: { data: { products: Product[] } }) =>
// 	state.data.products;

export default productSlice.reducer;
