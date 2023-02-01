// import { InitialRows } from "./components/BidTable";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://comx-sand-api.afexnigeria.com/api/securities/boards";

export type Product = {
	name: string;
	quantity: number;
	bidPrice: number;
};

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
		const { data } = await axios.get<Product[]>(API_URL);
		return data;
	}
);

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getProducts.pending, (state) => {
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

export const selectAllProducts = (state: IProduct) => state.data;

export default productSlice.reducer;
