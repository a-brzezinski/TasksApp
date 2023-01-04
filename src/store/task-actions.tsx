import { ThunkAction } from '@reduxjs/toolkit';
import { taskActions } from './task-slice';

export const fetchTasks = (): any => {
	return async (dispatch: any) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://tasksapp-e72c2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
			);

			const data = await response.json();

			return data;
		};

		try {
			const tasksData = await fetchData();
			dispatch(taskActions.replaceTasks(tasksData));
		} catch {}
	};
};

export const sendTaskData = (tasks: {}[]): any => {
	return async () => {
		const sendRequest = async () => {
			const response = await fetch(
				'https://tasksapp-e72c2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
				{
					method: 'PUT',
					body: JSON.stringify(tasks),
				}
			);
		};
		try {
			await sendRequest();
		} catch {}
	};
};
