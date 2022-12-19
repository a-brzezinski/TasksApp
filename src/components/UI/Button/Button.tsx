import React from 'react';
import classes from './Button.module.css';

type ButtonProps = {
	children: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void 
};

export const Button: React.FC<ButtonProps> = props => {
	return (
		<button className={classes.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
};
