import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import classes from './ErrorModal.module.css';

const ErrorModal: React.FC = () => {
	const notification = useSelector((state: RootState) => state.ui.notification);
	return (
		<div className={classes.box}>
			<p>{notification?.message}</p>
			<p>{notification?.title}</p>
		</div>
	);
};

export default ErrorModal;
