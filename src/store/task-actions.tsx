import { taskActions } from './task-slice';
import { uiActions } from './ui-slice';

export const fetchTasks = (): any => {
	return async (dispatch: any) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://tasks-9806f-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
			);

			if (!response.ok) throw new Error('Could not fetch data!');

			const data = await response.json();

			return data;
		};

		try {
			const tasksData = await fetchData();
			dispatch(taskActions.replaceTasks(tasksData || []));
		} catch (error) {
			dispatch(
				uiActions.showError({
					title: 'Error',
					message: 'Could not fetch data!',
				})
			);
		}
	};
};

export const sendTaskData = (tasks: {}[]): any => {
	return async (dispatch: any) => {
		const sendRequest = async () => {
			const response = await fetch(
				'https://tasks-9806f-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
				{
					method: 'PUT',
					body: JSON.stringify(tasks),
				}
			);
		};
		try {
			await sendRequest();
		} catch (error) {
			dispatch(
				uiActions.showError({
					title: 'Error',
					message: 'Something went wrong',
				})
			);
		}
	};
};
