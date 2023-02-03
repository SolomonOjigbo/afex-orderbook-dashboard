import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://comx-sand-api.afexnigeria.com/api/login";

var formdata = new FormData();
formdata.append("email", "sa.abdulgafar@gmail.com");
formdata.append("password", "password");
formdata.append("auth_type", "password");

var requestOptions = {
	method: "POST",
	body: formdata,
	redirect: "follow",
};
