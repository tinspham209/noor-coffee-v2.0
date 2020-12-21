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
		posts: null,
		instaPosts: null,
	},
	reducers: {
		setAboutData: (state, action) => {
			state.about = action.payload;
		},
		setProductSpecial: (state, action) => {
			state.products.special = action.payload;
		},
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		setInstaPosts: (state, action) => {
			state.instaPosts = action.payload;
		},
	},
});

const { reducer, actions } = fetchApi;

export const {
	setAboutData,
	setProductSpecial,
	setPosts,
	setInstaPosts,
} = actions;

export default reducer;
