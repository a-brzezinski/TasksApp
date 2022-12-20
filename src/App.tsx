import { Form } from './components/Form/Form/Form';
import { TaskList } from './components/Tasks/TaskList/TaskList';
import { InfoHeading } from './components/UI/InfoHeading/InfoHeading';
import { Wrapper } from './components/UI/Wrapper/Wrapper';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const App = () => {
	const tasks = useSelector((state: RootState) => state.task.tasks);
	const tasksLength = tasks.length;
	return (
		<Wrapper>
			<Form />
			{tasksLength !== Number(0) ? <TaskList /> : <InfoHeading />}
		</Wrapper>
	);
};

export default App;
