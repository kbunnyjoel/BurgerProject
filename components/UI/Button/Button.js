import React from 'react'
import { Box, Button } from 'grommet'
import classes from './Button.module.css'

const button = (props) => (
    <Button
    type="button"
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</Button>
);

export default button;