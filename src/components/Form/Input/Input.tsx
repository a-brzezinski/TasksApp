import React from 'react';
import classes from './Input.module.css';

type InputProps = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
};

export const Input: React.FC<InputProps> = props => {
	return (
		<input
			className={classes.input}
			type='text'
			placeholder='Enter Task'
			value={props.value}
			onChange={props.onChange}
		/>
	);
};
