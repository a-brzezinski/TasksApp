import { createSlice } from '@reduxjs/toolkit';

interface taskState {
	tasks: [
		{
			name: string;
			importance: string;
			id: number;
		}
	];
}

const initialState: taskState = {
	tasks: [],
};

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask(state, action) {
			const newTask = action.payload;
			state.tasks.unshift(newTask);
		},
		removeTask(state, action) {
			const id = action.payload;
			const existingItem = state.tasks.find(item => item.id === id);
			if (existingItem?.id === id) {
				state.tasks = state.tasks.filter(item => item.id !== id);
			}
		},
	},
});
export const taskActions = taskSlice.actions;
export default taskSlice;
