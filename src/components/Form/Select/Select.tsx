import React from 'react';
import classes from './Select.module.css';

type SelectProps = {
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<SelectProps> = props => {
	return (
		<select onChange={props.onChange} className={classes.select}>
			<option value='important'>Important</option>
			<option value='medium'>Medium</option>
			<option value='easy'>Easy</option>
		</select>
	);
};
