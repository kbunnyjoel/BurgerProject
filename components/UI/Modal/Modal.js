import React from 'react';
import { Box } from 'grommet';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'


const modal = (props) => {

    return (
        <Box>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <Box className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? "1" : "0"
                }}
            >
                {props.children}
            </Box>
        </Box>
    );

}

export default modal;