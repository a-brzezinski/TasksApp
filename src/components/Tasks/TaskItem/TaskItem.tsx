import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { taskActions } from '../../../store/task-slice';
import { Button } from '../../UI/Button/Button';
import classes from './TaskItem.module.css';

export const TaskItem: React.FC<{
	text: string;
	importance: string;
	id: number;
}> = props => {
	const id = props.id;
	const importance = props.importance;
	const dispatch = useDispatch();
	const taskDoneHandler = () => {
		dispatch(taskActions.removeTask(id));
	};

	return (
		<li className={classes.item}>
			<div className={classes.wrap}>
				<div className={classes[importance]}></div>
				<p className={classes.text}>{props.text}</p>
			</div>
			<Button onClick={taskDoneHandler}>Delete</Button>
		</li>
	);
};
