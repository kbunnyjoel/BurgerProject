import React from 'react';
import { Box } from 'grommet';
import classes from './Backdrop.module.css'

const backDrop = (props) => {
    return (
        props.show ? <Box className={classes.Backdrop} onClick={props.clicked}></Box> : null
    );
}

export default backDrop;