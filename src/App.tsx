import { Form } from './components/Form/Form/Form';
import { TaskList } from './components/Tasks/TaskList/TaskList';
import { InfoHeading } from './components/UI/InfoHeading/InfoHeading';
import { Wrapper } from './components/UI/Wrapper/Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';
import { fetchTasks, sendTaskData } from './store/task-actions';

const App = () => {
	const tasks = useSelector((state: RootState) => state.task.tasks);
	const dispatch = useDispatch();
	const tasksLength = tasks.length;

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	useEffect(() => {
		dispatch(sendTaskData(tasks));
	}, [tasks]);

	return (
		<Wrapper>
			<Form />
			{tasksLength !== Number(0) ? <TaskList /> : <InfoHeading />}
		</Wrapper>
	);
};

export default App;
