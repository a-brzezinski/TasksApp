import { Form } from './components/Form/Form/Form';
import { TaskList } from './components/Tasks/TaskList/TaskList';
import { InfoHeading } from './components/UI/InfoHeading/InfoHeading';
import { Wrapper } from './components/UI/Wrapper/Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';
import { fetchTasks, sendTaskData } from './store/task-actions';
import ErrorModal from './components/UI/ErrorModal/ErrorModal';

const App = () => {
	const tasks = useSelector((state: RootState) => state.task.tasks);
	const notification = useSelector((state: RootState) => state.ui.notification); 
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
			{notification && <ErrorModal/>}
			<Form />
			{tasksLength !== Number(0) ? <TaskList /> : <InfoHeading />}
		</Wrapper>
	);
};

export default App;
