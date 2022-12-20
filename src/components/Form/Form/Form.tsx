import React, { useState } from 'react';
import { Button } from '../../UI/Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import classes from './Form.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { taskActions } from '../../../store/task-slice';

export const Form: React.FC = () => {
	const [selectValue, setSelectValue] = useState('important');
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();

	const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(e.target.value);
	};

	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const formSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		if (inputValue.trim() === '') {
			return;
		}
		dispatch(
			taskActions.addTask({
				name: inputValue,
				importance: selectValue,
				id: Math.floor(Math.random() * 100),
			})
		);
		setInputValue('');
	};

	return (
		<form onSubmit={formSubmitHandler} className={classes.form}>
			<Input onChange={inputChangeHandler} value={inputValue} />
			<Select onChange={selectChangeHandler} />
			<Button onClick={() => {}}>Add Task</Button>
		</form>
	);
};
