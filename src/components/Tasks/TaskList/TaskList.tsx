import { useSelector } from 'react-redux/es/hooks/useSelector';
import { TaskItem } from '../TaskItem/TaskItem';
import classes from './TaskList.module.css';
import { RootState } from '../../../store';

export const TaskList: React.FC = () => {
	const taskList = useSelector((state: RootState) => state.task.tasks);
	return (
		<ul className={classes.list}>
			{taskList.map(item => (
				<TaskItem
					text={item.name}
					key={item.id}
					importance={item.importance}
					id={item.id}
				/>
			))}
		</ul>
	);
};
