import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, registerUser } from "./authService";

import { User } from "../models/user";

export interface IUser {
	error: string | null;
	user: User | null;
	isAuthenticated: boolean;
}

const initialState = {
	error: null,
	user: null,
	isAuthenticated: false,
} as IUser;

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers(builder) {
		// login user
		builder
			.addCase(login.pending, (state) => {
				state.isAuthenticated = false;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
				state.isAuthenticated = true;
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, { payload }: PayloadAction<any>) => {
				state.isAuthenticated = false;
				state.error = payload.message;
			})

			// register user
			.addCase(registerUser.pending, (state, action: PayloadAction<any>) => {
				state.isAuthenticated = false;
			})
			.addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
				state.isAuthenticated = true;
				state.user = action.payload;
			})
			.addCase(
				registerUser.rejected,
				(state, { payload }: PayloadAction<any>) => {
					state.isAuthenticated = false;
					state.error = payload.message;
				}
			);
	},
});

export default authSlice.reducer;
