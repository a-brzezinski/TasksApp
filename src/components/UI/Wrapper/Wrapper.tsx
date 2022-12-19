import React from 'react';

import classes from './Wrapper.module.css'

export const Wrapper: React.FC<{ children: React.ReactNode }> = props => {
	return <div className={classes.wrapper}>{props.children}</div>;
};
