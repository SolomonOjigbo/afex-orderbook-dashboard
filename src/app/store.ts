import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/productSlice";
import authReducer from "../features/authSlice";

const store = configureStore({
	reducer: {
		products: productReducer,
		user: authReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
