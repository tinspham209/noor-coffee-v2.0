import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
	name: API,
	initialState: {
		about: null,
		products: {
			special: [],
			coffee: [],
		},
	},
	reducers: {
		setAboutData: (state, action) => {
			state.about = action.payload;
		},
		setProductSpecial: (state, action) => {
			state.products.special = action.payload;
		},
	},
});

const { reducer, actions } = fetchApi;

export const { setAboutData, setProductSpecial } = actions;

export default reducer;
