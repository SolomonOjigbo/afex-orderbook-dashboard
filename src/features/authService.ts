import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import Manager from "../lib/encryption.js";
import { FormValues, loginModel } from "../models/user.js";

const API_URL = "https://comx-sand-api.afexnigeria.com/api/";

export const login = createAsyncThunk<any, loginModel>(
	"auth/login",
	async (formData, thunkApi) => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};

			const response = await axios.post<any, any>(
				API_URL + "login",
				formData,
				config
			);
			const { token } = response.data.data;
			localStorage.setItem("token", JSON.stringify(token));
			console.log("token :", token);
			return token;
		} catch (error: any) {
			thunkApi.rejectWithValue(error.message);
		}
	}
);

export const registerUser = createAsyncThunk<any, FormValues>(
	"auth/registerUser",
	async (formData, thunkApi) => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const response = await axios.post<any, any>(
				API_URL + "register",
				formData,
				config
			);
			const { token } = response.data.data;
			localStorage.setItem("token", JSON.stringify(token));
			return token;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
