import { createSlice } from '@reduxjs/toolkit';

interface sliceTypes {
	notification: { title: string; message: string } | null;
}

const initialState: sliceTypes = {
	notification: null,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showError(state, action) {
			state.notification = {
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
